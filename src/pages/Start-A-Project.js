import StartProject from '@/Components/Start-a-project-page/StartProject'
import Head from 'next/head'
import React from 'react'

const StartProjectPage = () => {
    return (
        <div>
            <Head>
                <title>Start A Project</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <StartProject />
            </div>
        </div>
    )
}

export default StartProjectPage