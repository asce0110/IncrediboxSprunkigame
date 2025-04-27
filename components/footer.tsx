import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="mt-8 py-6 bg-gray-100 dark:bg-black/50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {currentYear} IncrediboxSprunkiMod. All rights reserved. Sprunked Music Games Collection.
          </div>
          <div className="flex gap-6">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1D9E6F] dark:hover:text-[#2EE59D] transition-colors"
              title="Read our Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1D9E6F] dark:hover:text-[#2EE59D] transition-colors"
              title="Learn About Sprunked Music Games"
            >
              About Sprunked
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#1D9E6F] dark:hover:text-[#2EE59D] transition-colors"
              title="Contact IncrediboxSprunkiMod Support"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}