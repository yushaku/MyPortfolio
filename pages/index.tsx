import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { showFormContact, showNavbar, themeMode } from '../atoms/storeAtom'
import FormContact from '../components/FormContact'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Header from '../sections/Header'
import Intro from '../sections/Intro'
import LoadingPage from '../sections/LoadingPage'
import Navbar from '../sections/Navbar'
import Project from '../sections/Project'
import Social from '../sections/Social'
import Work from '../sections/Work'

const Home: NextPage = () => {
  const isDarkMode = useRecoilValue(themeMode)
  const isShowNavbar = useRecoilValue(showNavbar)
  const isShowFormContact = useRecoilValue(showFormContact)
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

      relative min-h-screen scroll-smooth
      flex flex-col items-center justify-center `}
    >
      <Head>
        <title>Yushaku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <LoadingPage />
      ) : (
        <main className="bg-bgLight text-textLight dark:bg-bgDark dark:text-[#f5f5f7] relative overflow-hidden">
          <Header data-aos="fade-down" />
          <Intro />
          <Social />
          <About />
          <Work />
          <Project />
          <Contact />
          <div className="py-8 text-center text-colorGreen w-100vw">Designed & Built by Yushaku</div>
          {isShowFormContact && <FormContact />}
          {isShowNavbar && <Navbar />}
        </main>
      )}
    </div>
  )
}

export default Home
