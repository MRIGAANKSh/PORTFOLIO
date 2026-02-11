import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Work() {
  return (
    <div id='work' className='w-full px-5 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20'>
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>

      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-ovo">
        My latest work
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-sm sm:text-base'>
        Welcome to my developer portfolio! Explore a collection of projects showcasing my expertise in various domains.
      </p> 

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-10'>
        {workData.map((project,index)=>(
          <Link href={project.link} key={index} target="_blank">
            <div
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer overflow-hidden group transition-transform duration-500 hover:scale-105'
              style={{backgroundImage:`url(${project.bgImage})`}}
            >

              <div className='absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500'></div>

              <div className='bg-white/95 backdrop-blur-sm w-11/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-2 px-3 flex items-center justify-between transition-all duration-500 group-hover:bottom-5 shadow-md'>

                <div className='text-xs'>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-[10px]'>{project.description}</p>
                </div>

                <div className='border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#000] cursor-pointer'>
                  <Image 
                    src={assets.send_icon} 
                    alt='send icon' 
                    width={16}
                    height={16}
                    className='pointer-events-none'
                  />
                </div>

              </div>
            </div>
          </Link>
        ))}
      </div>

      <a
        href="#"
        className="group w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-20 transition-all duration-300 hover:bg-gray-800 hover:text-white hover:-translate-y-1 hover:shadow-md"
      >
        Show more
        <Image
          className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          src={assets.right_arrow_bold}
          alt="right arrow"
          width={16}
          height={16}
        />
      </a>

    </div>
  )
}

export default Work
