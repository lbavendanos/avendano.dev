import { config as hConfig } from 'lib/utils/helpers'
import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(
  new URL(
    './../../../public/assets/fonts/Inter/Inter-Medium.ttf',
    import.meta.url
  )
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const appDomain = hConfig('app.domain')

  try {
    const fontData = await font
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '-.02em',
            fontWeight: 700,
            background: 'white',
          }}
        >
          <div
            style={{
              left: 42,
              top: 42,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                background: 'black',
              }}
            />
            <span
              style={{
                marginLeft: 8,
                fontSize: 20,
              }}
            >
              {appDomain}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px 50px',
              margin: '0 42px',
              fontSize: 40,
              width: 'auto',
              maxWidth: 550,
              textAlign: 'center',
              backgroundColor: 'black',
              color: 'white',
              lineHeight: 1.4,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        // debug: true,
        width: 800,
        height: 400,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
