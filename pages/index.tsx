import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import About from '../components/About'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-textLight dark:bg-bgDark dark:text-[#f5f5f7]  relative '>
        <Header data-aos='fade-down' />
        <Intro />
        <Social />
        <About />
        {isShowNavbar && <Navbar />}
      </main>
    </div>
  )
}

export default Home
