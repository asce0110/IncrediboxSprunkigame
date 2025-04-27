# Script to add GameNav component to all pages in (game) directory
# Ignore layout.tsx files

Get-ChildItem -Path "app\(game)" -Recurse -Filter "page.tsx" | ForEach-Object {
    $pagePath = $_
    Write-Host "Processing file: $($pagePath.FullName)"
    
    # Use ReadAllText instead of Get-Content -Raw
    $content = [System.IO.File]::ReadAllText($pagePath.FullName)
    
    # Skip if GameNav is already in the file
    if ($content -notmatch "GameNav") {
        # Extract game title from path
        $folderName = $pagePath.Directory.Name
        $gameTitle = $folderName -replace "-", " " -replace "(\w)(\w*)", { $matches[1].ToUpper() + $matches[2] }
        Write-Host "Added GameNav to $folderName"
        
        # Check if GameNav import already exists
        if ($content -notmatch "import GameNav") {
            $content = $content -replace "import\s+{([^}]+)}\s+from\s+['""]\@/components/ui['""](;?)", "import {`$1, GameNav} from '@/components/ui'`$2"
            
            # If no UI import found, add it at the top
            if ($content -notmatch "import\s+{[^}]*GameNav[^}]*}\s+from") {
                $content = "import { GameNav } from '@/components/ui';" + [Environment]::NewLine + $content
            }
        }
        
        # Add GameNav component
        $content = $content -replace "(<main[^>]*>)", "`$1`n      <GameNav title=`"$gameTitle`" />"
        
        # Write modified content back to file
        [System.IO.File]::WriteAllText($pagePath.FullName, $content)
    }
}

Write-Host "GameNav addition completed!" 