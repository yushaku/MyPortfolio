import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { showNavbar, themeMode } from '../atoms/storeAtom'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Intro from '../components/Intro'
import LoadingPage from '../components/LoadingPage'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Social from '../components/Social'
import Work from '../components/Work'

const Home: NextPage = () => {
  const isDarkMode = useRecoilValue(themeMode)
  const isShowNavbar = useRecoilValue(showNavbar)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const setLoading = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(setLoading)
  }, [])
  return (
    <div
      className={`${isDarkMode && 'dark'}
      relative min-h-screen
      flex flex-col items-center justify-center `}
    >
      <Head>
        <title>Yushaku</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-textLight dark:bg-bgDark dark:text-[#f5f5f7]  relative '>
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Header data-aos='fade-down' />
            <Intro />
            <Social />
            <About />
            <Work />
            <Project />
            <Contact />
            {isShowNavbar && <Navbar />}
          </>
        )}
      </main>
    </div>
  )
}

export default Home
