$files = Get-ChildItem -Path "app" -Recurse -Filter "*.tsx"

foreach ($file in $files) {
    $content = Get-Content $file.FullName | Out-String
    
    if ($content -match "import.*Comments.*from '@/components/comments'") {
        $content = $content -replace "import.*Comments.*from '@/components/comments'", "import { CommentsMock } from '@/components/comments-mock'"
        $content = $content -replace "<Comments />", "<CommentsMock />"
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated $($file.FullName)"
    }
} 