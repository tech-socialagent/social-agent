import React, { useEffect, useState } from 'react'
import styles from '@/styles/SMMPage/WhatWeDo.module.css'
import Image from 'next/image'
import image from '../../../../public/assets/tempImg.png'
import styled from 'styled-components'
import Link from 'next/link'

const Cards = styled.div`
    padding: 4% 0%;
    display: flex;display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1.5rem;
    margin-top: ${({condition}) => (condition ? '1rem':'3rem')};
    transition: all 1.5s ease-in-out;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Cards2 = styled.div`
    padding: 4% 0%;
    display: flex;display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap:1.5rem;
    margin-top: ${({condition}) => (condition ? '1rem':'3rem')};
    transition: all 1.5s ease-in-out;
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const Card1 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(-18deg)')};
    left: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Card2 = styled.div`
    position: relative;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    bottom: ${({condition}) => (condition ? '0%':'-10%')};
    transition: all 1.5s ease-in-out;
`

const Card3 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(18deg)')};;
    right: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Card4 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(-18deg)')};
    left: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Card5 = styled.div`
    position: relative;
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    bottom: ${({condition}) => (condition ? '0%':'-10%')};
    transition: all 1.5s ease-in-out;
`

const Card6 = styled.div`
    position: relative;
    height: ${({condition}) => (condition ? '475px':'400px')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    overflow: hidden;
    transform:${({condition}) => (condition ? 'rotate(0deg)':'rotate(18deg)')};;
    right: ${({condition}) => (condition ? '0%':'67%')};
    transition: all 1.5s ease-in-out;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: all 1.5s ease-in-out;
    ${Card1}:hover & {
        background-color: rgba(0,0,0,0.75); /* Adjust the opacity as needed */
    }
    ${Card2}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
    ${Card3}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
    ${Card4}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
    ${Card5}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
    ${Card6}:hover & {
        background-color: rgba(0,0,0,0.6); /* Adjust the opacity as needed */
    }
`

const Content = styled.p`
    z-index: 11;
    margin: 10% 10%;
    font-size: 17px;
    font-weight: 400;
    opacity: 0;
    padding-top: 30%;
    transition: all 0.9s ease-in-out;
    color : #fff;
    ${Card1}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card2}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card3}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card4}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card5}:hover & {
        opacity: 1;
        scale: 1.15;
    }
    ${Card6}:hover & {
        opacity: 1;
        scale: 1.15;
    }
`
const CardImg = styled.img`
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: scale(1.02);    
    border-radius: 20px;
    z-index: ${({condition}) => (condition ? '5':'7')};
    transition: all 1s ease-in-out;
`

const CardBtn = styled.button`
    z-index: 10;
    margin: 7% 5%;
    outline: none;
    border: 1.45px solid #ffffff;
    border-radius: 5px;
    background: transparent;
    color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0%;
    opacity:  ${({condition}) => (condition ? '1':'0')};
    transition : all 3s ease-in-out;
    cursor: pointer;
`

const WhatWeDo = () => {
    const SMMData = [
        {
            key: 1,
            image:'/assets/SMM/SMMImg1.png',
            btnText:'Branding Strategy',
            desc:'Develop  brand identity to resonate with your audience, leveraging digital channels to amplify awareness and establish a strong presence.',
        },
        {
            key: 2,
            image:'/assets/SMM/SMMImg2.png',
            btnText:'Print-to-Digital Integration',
            desc:' Integrate print materials with digital strategies, using technologies like QR codes and PURLs to enhance customer experiences and drive results.',
        },
        {
            key: 3,
            image:'/assets/SMM/SMMImg3.png',
            btnText:'Print Collateral',
            desc:'Create visually stunning print materials—brochures, business cards, flyers, signage—to reinforce your brand identity, communicate key messages, and make a lasting impression',
        },
    ]

      const [scrollY, setScrollY] = useState(false);
      const [scrollY2, setScrollY2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 525){
            setScrollY(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 750){
            setScrollY2(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <div className={styles.WhatWeDoWrap}>
            <h3>How do we build your <span className={styles.WhatDoWrapSpan}>online community</span></h3>  
            <Cards condition={scrollY}>
                <Card1 condition={scrollY}>
                <Overlay></Overlay>
                    <Content>{SMMData[0].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[0].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[0].btnText}
                    </CardBtn>    
                </Card1>
                <Card2 condition={scrollY}>
                <Overlay></Overlay>
                    <Content>{SMMData[1].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[1].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[1].btnText}
                    </CardBtn>    
                </Card2>
                <Card3 condition={scrollY}>
                    <Overlay></Overlay>
                    <Content>{SMMData[2].desc}</Content>
                    <CardImg condition={scrollY} src={SMMData[2].image}/>
                    <CardBtn condition={scrollY}>
                        {SMMData[2].btnText}
                    </CardBtn>    
                </Card3>
            </Cards>
            <div className={styles.PhoneCards}>
            {SMMData.map((item,key) => (
                <div className={styles.PhoneCard}  key={key}>
                    <h2>{item.btnText}</h2>
                    <div className={styles.PhoneCardImageContent}>
                        <div className={styles.PhoneCardImageContainer}>
                            <Image src={item.image} width={500} height={500} className={styles.PhoneCardImage}/>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default WhatWeDo