import Head from 'next/head'
import HeroSection from '@/Components/Home/HeroSection'
import Review from '@/Components/Home/Review'
import WhySocialAgent from '@/Components/Home/WhySocialAgent'
import HashBanner from '@/Components/HashBanner'
import DownloadSection from '@/Components/DownloadSection'
import PortfolioBlogs from '@/Components/Home/PortfolioBlogs'
import { useEffect, useState } from 'react'
import Faq from '../Components/Faq'
import StartAProjectSection from '@/Components/StartAProjectSection'


export default function Home() {
  const [title, setTitle] = useState('Social Agent')
  useEffect(() => {
    window.onblur = function () {
      setTitle('Come back!');
    }
    window.onfocus = function () {
      setTitle('Social Agent');
    }
  }, [title])
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <HeroSection />
        <WhySocialAgent />
        <HashBanner p='Your Digital Bridge To' h1='SUCCESS' />
        <PortfolioBlogs />
        <Review />
        <DownloadSection />
        <StartAProjectSection />
        <Faq />
      </>
    </>
  )
}
