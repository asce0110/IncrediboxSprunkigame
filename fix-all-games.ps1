# PowerShell脚本用于扫描和修复所有游戏页面

# 获取所有游戏页面
$gamePages = Get-ChildItem -Path "app/(game)" -Recurse -Filter "page.tsx" | Where-Object { $_.FullName -notlike "*\[slug]*" }

Write-Host "找到 $($gamePages.Count) 个游戏页面需要检查" -ForegroundColor Cyan

# 处理每个游戏页面
foreach ($page in $gamePages) {
    Write-Host "检查文件: $($page.FullName)" -ForegroundColor Cyan
    
    try {
        # 尝试读取文件内容
        $content = $null
        try {
            $content = Get-Content -Path $page.FullName -Raw -Encoding utf8
        } 
        catch {
            Write-Host "  尝试使用默认编码读取..." -ForegroundColor Yellow
            $content = Get-Content -Path $page.FullName -Raw -Encoding Default
        }
        
        if ($null -eq $content) {
            Write-Host "  无法读取文件内容，跳过" -ForegroundColor Red
            continue
        }
        
        $modified = $false
        
        # 获取正确的标题（基于文件路径）
        $title = $page.Directory.Name -replace "-", " "
        $title = (Get-Culture).TextInfo.ToTitleCase($title)
        
        # 检查和修复GameNav标题
        if ($content -match '<GameNav title="[^"]*Groups\[') {
            Write-Host "  修复GameNav标题" -ForegroundColor Yellow
            $content = $content -replace '<GameNav title="[^"]*"', "<GameNav title=`"$title`""
            $modified = $true
        }
        
        # 检查和替换Comments组件为CommentsMock
        if ($content -match 'import\s*\{\s*Comments\s*\}\s*from\s*[''"]@/components/comments[''"]') {
            Write-Host "  替换Comments为CommentsMock组件" -ForegroundColor Yellow
            $content = $content -replace "import\s*\{\s*Comments\s*\}\s*from\s*[`"']@/components/comments[`"']", "import { CommentsMock } from '@/components/comments-mock'"
            $content = $content -replace "<Comments\s*/>", "<CommentsMock />"
            $modified = $true
        }
        
        # 检查和移除Head组件
        if ($content -match '<Head>') {
            Write-Host "  移除Head组件" -ForegroundColor Yellow
            $content = $content -replace "import Head from 'next/head'", ""
            $content = $content -replace '<Head>[\s\S]*?<\/Head>', ""
            $modified = $true
        }
        
        # 检查和修复导航结构
        if ($content -match '<Link[^>]*href="/"[^>]*>.*?<ArrowLeft') {
            Write-Host "  修复导航结构" -ForegroundColor Yellow
            $content = $content -replace '(<div className="mb-\d+\s*flex[^>]*>)[\s\S]*?(<Link[\s\S]*?<\/Link>)[\s\S]*?(<div>)', '<div className="mb-4">'
            $modified = $true
        }
        
        # 检查和修复布局结构
        if ($content -match '<>') {
            Write-Host "  修复布局结构" -ForegroundColor Yellow
            $content = $content -replace "<>", '<div className="min-h-screen bg-black/90">'
            $content = $content -replace "</>", "</div>"
            $modified = $true
        }
        
        # 检查和修复多余的嵌套min-h-screen
        if ($content -match '<div className="min-h-screen[^>]*>[\s\S]*?<div className="min-h-screen') {
            Write-Host "  修复多余的嵌套min-h-screen" -ForegroundColor Yellow
            $content = $content -replace '(<div className="min-h-screen[^>]*>[\s\S]*?)(<div className="min-h-screen[^>]*>)', '$1'
            $modified = $true
        }
        
        # 如果有修改，保存文件
        if ($modified) {
            Write-Host "  保存修改..." -ForegroundColor Green
            $content | Out-File -FilePath $page.FullName -Encoding utf8
            Write-Host "  文件已修复: $($page.FullName)" -ForegroundColor Green
        } else {
            Write-Host "  文件无需修改" -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  处理文件时出错: $_" -ForegroundColor Red
    }
}

Write-Host "所有游戏页面检查和修复完成!" -ForegroundColor Green 