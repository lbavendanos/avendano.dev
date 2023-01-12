import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '@/styles/app.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
