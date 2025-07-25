import React from 'react'
import { FlipWords } from './FlipWords' 
import {motion} from 'motion/react'



function HeroText() {
    const words= ['Modern', 'Secure','Innovative'];
    const variants={
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
  return (
    <div className='z-10 mt-20 text-center md:mt-40
    md:text-left rounded-3xl bg-clip-text'>
    
    {/* desktop view */}
    <div className='flex-col hidden md:flex c-space'>
        {/* repeatation is occuring so we initialise variable for animation motion property */}
     <motion.h1 className='text-4xl font-medium'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
     >Hi , I'm sarath gk</motion.h1>
     <div className='flex flex-col items-start'>
        <motion.p className='text-5xl font-medium text-neutral-300'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        >
            A developer <br/>who loves to create <br/> awesome web & mobile apps
        </motion.p>
        <motion.div 
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5}}
        ><FlipWords words={words}
        className={"text-8xl font-medium text-neutral-300"} /></motion.div>
        {/* flip word */}
        <motion.p className='text-4xl font-medium text-neutral-300'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8 }}
        >Web Solutions</motion.p>

     </div>
    </div>
    {/* mobile view */}
     <div className='flex- flex-col md:hidden space-y-6'>
        <motion.p className='text-4xl font-medium'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
       >
            I'm sarath gk
        </motion.p>
        <motion.div className='text-5xl font-black text-neutral-500'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        >
            Building
        </motion.div>
        <motion.div className='text-7xl font-bold'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
        >
            <FlipWords words={words} />
        </motion.div>
        <motion.p className='text-4xl font-black text-neutral-300'
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8 }}
        >
            Web & Mobile<br/>Applications
        </motion.p>

     </div>
    </div>
  )
}

export default HeroText
