import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import 'styles/app.css'

const inter = Inter({
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
