import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'

function Hero() {
  return (
    <section className='flex items-center justify-center md:items-start
    md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText/>
        <ParallaxBackground/>

        
    </section>
  )
}

export default Hero
