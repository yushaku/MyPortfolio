import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <motion.div>
        <Component {...pageProps} />
      </motion.div>
    </RecoilRoot>
  )
}

export default MyApp
