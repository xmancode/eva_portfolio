import React from 'react'
import HeroText from '../components/HeroText'

function Hero() {
  return (
    <section className='flex items-center justify-center md:items-start
    md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText/>
    </section>
  )
}

export default Hero
