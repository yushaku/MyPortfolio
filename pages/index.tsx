import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const isDarkMode = useRecoilValue(themeMode)
  const isShowNavbar = useRecoilValue(showNavbar)
  return (
    <div
      className={`${isDarkMode && 'dark'}
      relative min-h-screen
      flex flex-col items-center justify-center 
      py-2`}
    >
      <Head>
        <title>Yushaku</title>
        <link rel='icon' href='/logo.ico' />
      </Head>

      <main className='dark:bg-bgDark relative '>
        <Header />
        <Intro/>
        {isShowNavbar && <Navbar />}
      </main>
    </div>
  )
}

export default Home
