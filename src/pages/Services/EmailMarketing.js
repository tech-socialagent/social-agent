import Button from '@/Components/Button'
import Consultation from '@/Components/Consultation'
import DownloadSection from '@/Components/DownloadSection'
import Faq from '@/Components/Faq'
import HashBanner from '@/Components/HashBanner'
import Carousel from '@/Components/Home/PortfolioBlog/Carousel'
import HeroSection from '@/Components/Services/EmailMarketing/HeroSection'
import WhatWeDo from '@/Components/Services/EmailMarketing/WhatWeDo'
import Work from '@/Components/Services/OurWork'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const EMPage = () => {

  const items = [
    {
      title: 'Why choose the best email marketing services in Bangalore?',
      content: `Email marketing remains a vital component of digital marketing strategies due to its ability to directly communicate with the target audience, build relationships, provide personalization, generate measurable results, and offer a high ROI.Opting for the best email marketing services in Bangalore brings numerous advantages to businesses. Social Agent proudly stands out as one of the best email marketing agency in Bangalore to provide expert guidance, segmentation capabilities, and compliance with regulations. We offer creative design, automation, analytics, and integration with other tools. With a focus on personalization and targeted approaches, businesses can enhance engagement and conversions. Reliable customer support ensures a seamless experience.`,
    },
    {
      title: 'Which are the best free email marketing tools used by Social Agent?',
      content: `A renowned social media marketing agency, does not develop its own email marketing tools. However, there are excellent free email marketing tools available that businesses can utilize alongside their social media efforts. Popular options include Mailchimp, SendinBlue, MailerLite, and Benchmark Email. These tools offer features such as campaign creation, list management, automation, and analytics. The choice of tool depends on specific requirements and preferences and in-depth analytics post campaigns that are undertaken by Social agent to alter and optimize marketing strategies.`,
    },
    {
      title: 'How do businesses measure the success of email marketing campaigns?',
      content: `The success of email marketing campaign can be measured by tracking key performance indicators (KPIs) like open rates, click-through rates, conversion rates, bounce rates, unsubscribe rates, and return on investment (ROI). These metrics provide valuable insights into campaign performance, customer engagement, and overall impact. We analyze these indicators, to assist businesses refine strategies, optimize future campaigns, and achieve better results. Assistance in Data-driven decision-making based on these metrics helps businesses gauge success and continuously improve email marketing efforts. `,
    },
    {
      title: 'What are the benefits of email marketing for small businesses?',
      content: `Email marketing provides cost-effective and targeted marketing for small businesses. It helps build relationships with customers, track campaign performance, drive sales, and increase brand awareness through personalized messages. We help small businesses use email marketing as a tool to raise target marketing alongside raising campaign output. `,
    },
    {
      title: 'How do we enable businesses to improve email engagement and conversion?',
      content: `Social Agent excels in improving email engagement and conversion through effective strategies. We prioritise personalization, attention-grabbing subject lines, high-quality content, clear CTAs, mobile optimization, A/B testing, segmentation, email automation, optimised timing, and thorough metric monitoring. By implementing these tactics, we help businesses drive higher engagement, conversions, and desired actions from their email subscribers`,
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
                <title>Email Marketing</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <>
                <HeroSection />
                <WhatWeDo />
                <HashBanner p='Let Us Drive Results' h1='WITH EMAIL' />
                <Work/>
                <Carousel mobile={mobileView}/>
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

export default EMPage