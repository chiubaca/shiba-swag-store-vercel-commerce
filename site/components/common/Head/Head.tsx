import type { VFC } from 'react'
import { SEO } from '@components/common'
import Script from 'next/script'

const Head: VFC = () => {
  return (
    <>
      <SEO>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      </SEO>
      <Script
        src="https://cdn.counter.dev/script.js"
        data-id="91ee2db8-dc88-40a2-9529-ef18149e911b"
        data-utcoffset="0"
      ></Script>
    </>
  )
}

export default Head
