import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import FormContact from '../components/FormContact'
import { showFormContact, themeMode } from '../utils/storeAtom'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Encryption from '@/components/Encryption'
import Topbar from '@/components/Header'
import Intro from '@/components/Intro'
import LoadingPage from '@/components/LoadingPage'
import StarsCanvas from '@/components/model3D/StartBackground'
import Project from '@/components/Project'
import Social from '@/components/Social'
import Work from '@/components/Work'

const Home: NextPage = () => {
  const isDarkMode = useRecoilValue(themeMode)
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
        <section className="bg-bgLight text-textLight dark:bg-bgDark dark:text-[#f5f5f7] relative overflow-hidden">
          <StarsCanvas />
          <div className="container mx-auto p-6 lg:p-0">
            <Topbar data-aos="fade-down" />
            <Intro />
            <About />
            <Work />
            <Encryption />
            <Project />
            <Contact />

            {isShowFormContact && <FormContact />}
            <Social />
          </div>
          <div className="py-8 text-center text-colorGreen">Designed & Built by Yushaku</div>
        </section>
      )}
    </main>
  )
}

export default Home
