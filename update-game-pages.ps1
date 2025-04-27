# PowerShell 脚本用于更新所有游戏页面添加 GameNav 组件
$gamePagesPath = "app/(game)"
$gamePages = Get-ChildItem -Path $gamePagesPath -Recurse -Filter "page.tsx" | Where-Object { $_.FullName -notlike "*\[slug]*" }

foreach ($pagePath in $gamePages) {
    Write-Host "Processing $($pagePath.FullName)"
    
    # 读取文件内容
    $content = [System.IO.File]::ReadAllText($pagePath.FullName)
    $modified = $false
    
    # 检查文件是否已包含 GameNav 组件
    if ($content -notmatch 'GameNav') {
        # 添加 GameNav 导入
        if ($content -match "import.*from 'next/link'") {
            $content = $content -replace "import.*from 'next/link'", "import Link from 'next/link'`nimport { GameNav } from '@/components/game/game-nav'"
            $modified = $true
        } elseif ($content -match "'use client'") {
            $content = $content -replace "'use client'", "'use client'`n`nimport { GameNav } from '@/components/game/game-nav'"
            $modified = $true
        }
        
        # 替换 Comments 组件为 CommentsMock
        if ($content -match "import.*Comments.*from '@/components/comments'") {
            $content = $content -replace "import.*Comments.*from '@/components/comments'", "import { CommentsMock } from '@/components/comments-mock'"
            $modified = $true
        }
        
        # 获取游戏页面的标题
        $gameTitle = $pagePath.Directory.Name -replace "-", " "
        $gameTitle = (Get-Culture).TextInfo.ToTitleCase($gameTitle)
        
        # 添加 GameNav 组件
        if ($content -match '<div.*className="min-h-screen') {
            $content = $content -replace '(<div.*className="min-h-screen[^>]*>)', "`$1`n      <GameNav title=`"$gameTitle`" />"
            $modified = $true
        }
        
        # 移除页面顶部的返回链接区域
        if ($content -match '<div.*className="mb-4 flex items-center gap-6"') {
            $content = $content -replace '<div.*className="mb-4 flex items-center gap-6".*?<div>', '<div className="mb-4">'
            $modified = $true
        }
        
        # 移除结束标签
        if ($content -match "</div>\s*</div>(\s*</div>)*" -and $modified) {
            $content = $content -replace "</div>\s*</div>\s*</div>", "</div>`n            </div>`n          </div>"
            $modified = $true
        }
        
        # 替换 Comments 组件调用为 CommentsMock
        if ($content -match "<Comments") {
            $content = $content -replace "<Comments.*?/>", "<CommentsMock />"
            $modified = $true
        }
        
        # 更新固定高度的评论容器
        if ($content -match 'h-\[\d+px\] overflow-y-auto') {
            $content = $content -replace 'h-\[\d+px\] overflow-y-auto', 'overflow-y-auto'
            $modified = $true
        }
    }
    
    # 如果有修改，保存文件
    if ($modified) {
        [System.IO.File]::WriteAllText($pagePath.FullName, $content)
        Write-Host "Updated $($pagePath.FullName)" -ForegroundColor Green
    } else {
        Write-Host "No changes needed for $($pagePath.FullName)" -ForegroundColor Yellow
    }
}

Write-Host "All game pages updated successfully!" -ForegroundColor Green 