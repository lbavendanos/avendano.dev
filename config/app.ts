const app = {
  name: process.env.NEXT_PUBLIC_APP_NAME || 'Blog',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  domain: process.env.NEXT_PUBLIC_APP_DOMAIN || 'localhost:3000',
  twitter: process.env.NEXT_PUBLIC_APP_TWITTER || '@blog',
}

export default app
