import React from 'react'
import { useState } from 'react'
import {motion} from 'motion/react'

function Navigation(){
    return <ul className='nav-ul'>
        <li className='nav-li'><a href='#about'>About</a></li>
        <li className='nav-li'><a href='#projects'>Projects</a></li>
        <li className='nav-li'><a href='#experience'>Experience</a></li>
        <li className='nav-li'><a href='#testimonials'>Testimonials</a></li>
        <li className='nav-li'><a href='#contact'>Contact</a></li>
    </ul>

}

function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
    <div className="mx-auto c-space max-w-7xl">
        <div className='flex items-center justify-between py-2 sm:py-0'>
           <a href='/' className='text-xl  font-bold transition-colors text-neutral-400 
           hover:text-white'>Logo</a>
        <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer
         text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt='Menu' className='h-6 w-6' />
        </button>
        <nav className='hidden sm:flex'><Navigation/></nav>
        </div>
    </div>
{/* put condition for mobile version open or close we out isopen condition */}
        { isOpen && (
            <motion.div className='block overflow-hidden text-center sm:hidden'
            initial={{opacity:0,x: -10}} 
            animate={{opacity:1, x: 0}}
            style={{maxHeight:"100vh"}}
            transition={{duration: 1}}
            >
            <nav className='pb-5'>
                <Navigation/>
            </nav>
        </motion.div>
        )}

    </div>
  )
}

export default Navbar
