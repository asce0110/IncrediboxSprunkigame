# PowerShell脚本用于修复GameNav标题中的编码问题

# 读取所有有问题的文件
$problematicFiles = @(
    "app/(game)/sprunki-smg4/page.tsx",
    "app/(game)/sprunki-cute-time/page.tsx",
    "app/(game)/sprunki-retake/page.tsx",
    "app/(game)/sprunki-phase-8/page.tsx",
    "app/(game)/sprunki-definitive-phase-5/page.tsx",
    "app/(game)/sprunki-christmas/page.tsx"
)

# 修复每个文件
foreach ($file in $problematicFiles) {
    Write-Host "正在处理文件: $file" -ForegroundColor Cyan
    
    # 尝试读取文件内容
    try {
        $content = Get-Content -Path $file -Raw -Encoding Default
        
        # 获取正确的标题（基于文件路径）
        $title = $file -replace "^app/\(game\)/", "" -replace "/page\.tsx$", "" -replace "-", " "
        $title = (Get-Culture).TextInfo.ToTitleCase($title)
        
        # 替换错误的标题标记
        $fixedContent = $content -replace '<GameNav title="[^"]*"', "<GameNav title=`"$title`""
        
        # 替换Comments组件为CommentsMock
        $fixedContent = $fixedContent -replace "import \{\s*Comments\s*\}\s*from\s*[`"']@/components/comments[`"']", "import { CommentsMock } from '@/components/comments-mock'"
        $fixedContent = $fixedContent -replace "<Comments\s*/>", "<CommentsMock />"
        
        # 移除多余的返回按钮结构
        $fixedContent = $fixedContent -replace '(<div className="mb-\d+ flex[^>]*>)[\s\S]*?(<Link[\s\S]*?<\/Link>)[\s\S]*?(<div>)', '<div className="mb-4">'
        
        # 修复布局结构
        $fixedContent = $fixedContent -replace "<>", '<div className="min-h-screen bg-black/90">'
        $fixedContent = $fixedContent -replace "</>", "</div>"
        
        # 将整个文件保存为UTF-8格式
        $fixedContent | Out-File -FilePath $file -Encoding utf8
        
        Write-Host "已成功修复文件: $file" -ForegroundColor Green
    }
    catch {
        Write-Host "处理文件 $file 时出错: $_" -ForegroundColor Red
    }
}

Write-Host "所有文件处理完成!" -ForegroundColor Green 