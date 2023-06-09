import React from 'react'
import styles from '@/styles/SMMPage/HeroSection.module.css'
import Button from '@/Components/Button'
import Image from 'next/image'
import Link from 'next/link'


const HeroSection = () => {
    return (
        <div className={styles.sectionWrap}>
            <h1>Social Media Marketing</h1>
            <p>Craft and share captivating content - from text, and images to videos - strategically designed to engage your audience, drive action, and boost conversions. Experience the art of persuasive social media marketing that delivers tangible results.</p>
            <Link href='/Start-A-Project' style={{ textDecoration: 'none', width: '100%',display:'flex',justifyContent:'center' }}>
                <div className={styles.ButtonContainer}>
                    <div className={styles.absoluteContainer}></div>
                    <Button
                        color='var(--P700)'
                        bg='#fff'
                        value="GET SOCIAL"
                        fontSize="14px"
                        padding='15px 65px'
                        fontWeight='700'
                    />
                </div>
            </Link>
            <Image
                src='/assets/SMM/SMMBG1.png'
                width={100}
                height={100}
                className={styles.MessageIcon}
            />
            <Image
                src='/assets/SMM/SMMBG2.png'
                width={100}
                height={100}
                className={styles.HeartbeatIcon}
            />
            <Image
                src='/assets/SMM/SMMBG3.png'
                width={100}
                height={100}
                className={styles.TwitterIcon}
            />
            <Image
                src='/assets/SMM/SMMBG4.png'
                width={100}
                height={100}
                className={styles.YoutubeIcon}
            />
            <Image
                src='/assets/SMM/SMMBG5.png'
                width={100}
                height={100}
                className={styles.LinkedInIcon}
            />
            <Image
                src='/assets/SMM/SMMBG6.png'
                width={100}
                height={100}
                className={styles.InstagramIcon}
            />
            <Image
                src='/assets/SMM/SMMBG7.png'
                width={100}
                height={100}
                className={styles.ShareIcon}
            />
        </div>
    )
}

export default HeroSection