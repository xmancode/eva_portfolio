import React, { use } from 'react'
import { useScroll, useTransform,motion, useSpring } from 'motion/react'

function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const x= useSpring( scrollYProgress,{damping:50}) 
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className='absolute inset-0 bg-black/50 '> 
      <div className='relative h-screen overflow-y-hidden'>
        {/* Background image with parallax effect */}
         <video
    className="absolute inset-0 w-full h-full object-cover -z-40"
    src="/assets/galaxy2.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
        {/* mountain3 */}
        <motion.div  className='absolute inset-0 -z-40'
        style={{
          backgroundImage: 'url(/assets/mountain-3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          y: mountain3Y
        }}
        />
        {/* planets */}
        <motion.div className='absolute inset-0 -z-30'
        style={{
          backgroundImage: 'url(/assets/planets.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          x: planetsX
        }}
        />
        {/* mountain2 */}
        <motion.div className='absolute inset-0 -z-20'
        style={{
          backgroundImage: 'url(/assets/mountain-2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          y: mountain2Y
        }}
        />
        {/* mountain1 */}
        <motion.div className='absolute inset-0 -z-10'
        style={{
          backgroundImage: 'url(/assets/mountain-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          y: mountain1Y
        }}
        />
      </div>
    </section>
  )
}

export default ParallaxBackground
