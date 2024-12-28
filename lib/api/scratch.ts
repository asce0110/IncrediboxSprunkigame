import { SCRATCH_CONFIG } from '@/lib/constants/scratch'

export async function fetchScratchProject(id: string) {
  const url = `${SCRATCH_CONFIG.BASE_URL}${SCRATCH_CONFIG.EMBED_PATH.replace(':id', id)}`
  
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), SCRATCH_CONFIG.TIMEOUT)

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    return html
  } finally {
    clearTimeout(timeoutId)
  }
}