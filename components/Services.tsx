import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <div id="services" className='w-full px-5 sm:px-[8%] lg:px-[12%] py-10 scroll-mt-20 '>
        <h4 className="text-center mb-2 text-lg font-ovo">What i offer</h4>
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-ovo">
          My Services
        </h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-sm sm:text-base'>
            I am a Developer from Delhi,India , with hands on experience on various technologies such as nextjs,linux and on various other frameworks...
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
          {serviceData.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className='
                border border-gray-300 
                rounded-lg 
                px-6 sm:px-8 
                py-10 sm:py-12 
                cursor-pointer 
                bg-white
                shadow-md 
                hover:shadow-2xl 
                hover:bg-pink-50 
                hover:-translate-y-1 
                transition-all 
                duration-300 
                ease-in-out
              '
            >
              <Image src={icon} alt='image' />
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5'>
                {description}
              </p>
              <a className='flex items-center gap-2 text-sm mt-5' href={link}>
                Read more 
                <Image src={assets.right_arrow} alt='' className='w-4' />
              </a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Services
