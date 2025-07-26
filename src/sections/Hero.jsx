import React, { Suspense, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { useMediaQuery } from 'react-responsive';
import { Float, OrbitControls } from '@react-three/drei';
import { Walle } from '../components/Walle';
import Loader from '../components/Loader';



function Hero() {
  const isMobile=useMediaQuery({maxWidth:853});

  return (
    <section className='flex items-start justify-center md:items-start
    md:justify-start min-h-screen overflow-hidden c-space'>
        <HeroText/>
        <ParallaxBackground/>
        <figure className='absolute inset-0'
        style={{width:'60vw',height:"80vh" ,marginLeft:"20vw",marginRight:"40vw"}}>
        
        
        <Canvas camera={{position:[-0.7,1,2]}}>
          <Suspense fallback={<Loader/>}>
          <ambientLight intensity={2.5} />
           <directionalLight position={[5, 5, 5]} intensity={1} />
           <OrbitControls
  enablePan={false}
  minDistance={4}
  maxDistance={2}
  
/>
       
          <Float>
            <Walle 
              scale={isMobile && 0.33}
              position={isMobile && [0,-2.5,0]}
        
            />
          </Float>
        </Suspense>
        </Canvas>
        
        </figure>

        
    </section>
  )
}



export default Hero;
