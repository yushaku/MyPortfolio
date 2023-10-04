import { Work } from '@mui/icons-material'
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import FormContact from '../components/FormContact'
import { showFormContact, showNavbar, themeMode } from '../utils/storeAtom'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Topbar from '@/components/Header'
import Intro from '@/components/Intro'
import LoadingPage from '@/components/LoadingPage'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Social from '@/components/Social'

const Home: NextPage = () => {
  const isDarkMode = useRecoilValue(themeMode)
  const isShowNavbar = useRecoilValue(showNavbar)
  const isShowFormContact = useRecoilValue(showFormContact)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const setLoading = setTimeout(() => {
      setIsLoading(false)
    }, 50)

    return () => clearTimeout(setLoading)
  }, [])

  return (
    <main className={`${isDarkMode && 'dark'}`}>
      <Head>
        <title>Yushaku</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <LoadingPage />
      ) : (
        <section className="bg-bgLight  text-textLight dark:bg-bgDark dark:text-[#f5f5f7] relative overflow-hidden">
          <div className="container mx-auto">
            <Topbar data-aos="fade-down" />
            <Intro />
            <Social />
            <About />
            <Work />
            <Project />
            <Contact />

            <div className="py-8 text-center text-colorGreen w-100vw">Designed & Built by Yushaku</div>
            {isShowFormContact && <FormContact />}
            {isShowNavbar && <Navbar />}
          </div>
        </section>
      )}
    </main>
  )
}

export default Home
