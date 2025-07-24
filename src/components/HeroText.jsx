import React from 'react'
import { FlipWords } from './FlipWords'


const words= ['Modern', 'Secure','Innovative'];

function HeroText() {
  return (
    <div className='z-10 mt-20 text-center md:mt-40
    md:text-left rounded-3xl bg-clip-text'>
    
    {/* desktop view */}
    <div className='flex-col hidden md:flex c-space'>
     <h1 className='text-4xl font-medium'>Hi , I'm sarath gk</h1>
     <div className='flex flex-col items-start'>
        <p className='text-5xl font-medium text-neutral-300'>
            A developer <br/>who loves to create <br/> awesome web & mobile apps
        </p>
        <div><FlipWords words={words}
        className={"text-8xl font-medium text-neutral-300"} /></div>
        {/* flip word */}
        <p className='text-4xl font-medium text-neutral-300'>Web Solutions</p>

     </div>
    </div>
    {/* mobile view */}
     <div className='flex- flex-col md:hidden space-y-6'>
        <p className='text-4xl font-medium'>
            I'm sarath gk
        </p>
        <div className='text-5xl font-black text-neutral-500'>
            Building
        </div>
        <div className='text-7xl font-bold'>
            <FlipWords words={words} />
        </div>
        <p className='text-4xl font-black text-neutral-300'>
            Web Applications
        </p>

     </div>
    </div>
  )
}

export default HeroText
