import { cn } from 'lib/utils/helpers'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function BaseLayoutNavbarThemeButton() {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      className={cn(
        'flex items-center justify-center',
        'w-9 h-9',
        'bg-gray-200 dark:bg-gray-600',
        'rounded-lg hover:ring-2 ring-gray-300 transition-all'
      )}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle Dark Mode"
    >
      {mounted && (
        <svg
          className="w-5 h-5 text-gray-800 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  )
}
