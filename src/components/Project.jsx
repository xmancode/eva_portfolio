import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

function Project({title,description,subDescription,tags,image,href}) {
    const [isHidden, setIsHidden] = useState(false);
  return (
    <>
    <div className='flex-wrap items-center py-10 justify-between space-y-14
    sm:flex sm:space-y-0'>
       <div>
        <p className='text-2xl'>{title}</p>
        <div className='flex mt-2 gap-5 text-sand'>
        {tags.map((tag)=>(
            <span key={tag.id}>{tag.name}</span>
        ))}
        </div>
       </div>
        <button onClick={()=>setIsHidden(true)}className='flex gap-1 items-center cursor-pointer
        hover-animation'>
            Read More
         <img src='assets/arrow-right.svg' className='w-5'/>
        </button>
    </div>
    <div className='bg-gradient-to-r from-transparent
         via-neutral-700 to-transparent mt-12 h-[1px] w-full'/>
         {isHidden && <ProjectDetails title={title} description={description}
         image={image} 
         href={href} 
         subDescription={subDescription}
          tags={tags}
          closeModal={()=>setIsHidden(false)}
          />}
    </>
  )
}

export default Project
