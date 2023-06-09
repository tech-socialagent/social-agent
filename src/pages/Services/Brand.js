import Button from '@/Components/Button'
import Consultation from '@/Components/Consultation'
import DownloadSection from '@/Components/DownloadSection'
import Faq from '@/Components/Faq'
import HashBanner from '@/Components/HashBanner'
import Carousel from '@/Components/Home/PortfolioBlog/Carousel'
import HeroSection from '@/Components/Services/Brand/HeroSection'
import WhatWeDo from '@/Components/Services/Brand/WhatWeDo'
import Work from '@/Components/Services/OurWork'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const BRANDPage = () => {

  const items = [
    {
      title: `What is branding and why is it important?`,
      content: `Branding encompasses the process of creating a unique identity for a business or organisation. It includes elements such as logo design, brand messaging, and visual aesthetics. We assist businesses differentiate themselves, build recognition, establish trust, and create a cohesive brand experience for their target audience by branding.`,
    },
    {
      title: `How can branding contribute to business success?`,
      content: ` Branding is a strategic tool that helps businesses differentiate themselves, build trust, foster customer loyalty, charge premium prices, attract talent, and pursue growth opportunities. By investing in effective branding strategies, businesses can enhance their competitiveness, market position, and long-term success. Social Agent excels in helping businesses stand out by establishing a unique identity, building trust, fostering loyalty, commanding premium prices, attracting top talent, and unlocking expansion opportunities through successful branding.`,
    },
    {
      title: `What is the significance of printing in branding?`,
      content: `The significance of printing in branding is substantial. Printing serves as a tangible medium for showcasing a brand's identity, messaging, and visual elements. Social Agent excels in providing top-quality in-house printing assistance, enabling businesses to leverage the substantial significance of printing in branding. With tangible marketing materials like business cards, brochures, and packaging, they establish brand recognition, trust, and lasting impressions for success.`,
    },
    {
      title: `How can branding and printing contribute to effective marketing campaigns?`,
      content: `Branding and printing are integral to effective marketing campaigns. They help businesses create visually appealing and memorable marketing materials that convey their brand message consistently.We assist in concept visualisation and printing of  well-designed printed materials that can attract attention, engage the target audience, and drive them to take desired actions, thus helping your business increase the effectiveness of marketing efforts.`,
    },
    {
      title: `Does branding and printing needs differ between businesses and can it be tailored to my industry or business?`,
      content: `Absolutely! Branding and printing needs differ from industry to industry and can be customised to suit the unique requirements of different industries and businesses. Whether it's a professional services firm, a retail business, or an e-commerce brand, branding and printing can be tailored to reflect the industry's aesthetics, target audience preferences, and business goals.We formulate unique requirement analysis and our inhouse design team brings out the most attractive and visually pleasing designs for production and printing.`,
    },
  ]

    const [mobileView, setMobileView] = useState(false)

    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth<=500){
          setMobileView(true)
        }else{
          setMobileView(false)
        }
      };
  
      // Initial screen size
      handleResize();
  
      // Add event listener for resize
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <>
            <Head>
                <title>Brand Print & Solutions</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <HeroSection />
                <WhatWeDo />
                <HashBanner p='Let Us Create Visibile' h1='BRAND SOLUTIONS' />
                <Work/>
                <Carousel mobile={mobileView} />
                <div style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                <Link href='/Portfolio'>
                <Button
                    value="View More"
                    color="#ffffff"
                    bg='var(--P700)'
                />
                </Link>
                </div>
                <DownloadSection />
                <Consultation/>
                <Faq items={items}/>
            </>
        </>
    )
}

export default BRANDPage