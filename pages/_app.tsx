import type { AppProps } from 'next/app'
import React from 'react'
import './globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </RecoilRoot>
  )
}

export default MyApp
