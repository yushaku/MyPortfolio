import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ParallaxProvider } from 'react-scroll-parallax'

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
