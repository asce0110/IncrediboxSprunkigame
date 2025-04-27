# 简化版脚本，仅修复Head组件和嵌套结构

# 查找需要检查的页面
$pageFiles = Get-ChildItem -Path "app/(game)" -Recurse -Filter "page.tsx" | Where-Object { $_.FullName -notlike "*\[slug]*" }

Write-Host "找到 $($pageFiles.Count) 个页面需要检查" -ForegroundColor Cyan

foreach ($file in $pageFiles) {
    Write-Host "检查文件: $($file.FullName)" -ForegroundColor Yellow
    
    # 读取文件内容
    $content = Get-Content -Path $file.FullName -Raw -Encoding utf8 -ErrorAction SilentlyContinue
    
    if ($null -eq $content) {
        # 尝试使用默认编码
        $content = Get-Content -Path $file.FullName -Raw -Encoding Default -ErrorAction SilentlyContinue
        
        if ($null -eq $content) {
            Write-Host "  无法读取文件，跳过" -ForegroundColor Red
            continue
        }
    }
    
    $modified = $false
    
    # 获取正确的标题
    $title = $file.Directory.Name -replace "-", " "
    $title = (Get-Culture).TextInfo.ToTitleCase($title)
    
    # 1. 移除Head组件
    if ($content -match '<Head>') {
        Write-Host "  移除Head组件" -ForegroundColor Yellow
        $content = $content -replace "import Head from 'next/head'", ""
        $content = $content -replace '<Head>[\s\S]*?<\/Head>', ""
        $modified = $true
    }
    
    # 2. 修复嵌套的min-h-screen
    if ($content -match '<div className="min-h-screen[^>]*>[\s\S]*?<div className="min-h-screen[^>]*>') {
        Write-Host "  修复嵌套的min-h-screen" -ForegroundColor Yellow
        $content = $content -replace '(<div className="min-h-screen[^>]*>[\s\S]*?)(<div className="min-h-screen[^>]*>)', '$1'
        $modified = $true
    }
    
    # 3. 修复标题中的奇怪字符串
    if ($content -match '<GameNav title="[^"]*Groups\[') {
        Write-Host "  修复错误的GameNav标题" -ForegroundColor Yellow
        $content = $content -replace '<GameNav title="[^"]*"', "<GameNav title=`"$title`""
        $modified = $true
    }
    
    # 4. 替换Comments为CommentsMock
    if ($content -match "import.*Comments.*from.*@/components/comments") {
        Write-Host "  替换Comments为CommentsMock" -ForegroundColor Yellow
        $content = $content -replace "import\s*\{\s*Comments\s*\}\s*from\s*[`'`"]@/components/comments[`'`"]", "import { CommentsMock } from '@/components/comments-mock'"
        $content = $content -replace "<Comments\s*/>", "<CommentsMock />"
        $modified = $true
    }
    
    # 如果有修改，保存文件
    if ($modified) {
        $content | Out-File -FilePath $file.FullName -Encoding utf8
        Write-Host "  已修复文件: $($file.FullName)" -ForegroundColor Green
    }
    else {
        Write-Host "  文件无需修改" -ForegroundColor Green
    }
}

Write-Host "检查完成!" -ForegroundColor Green 