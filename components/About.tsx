import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function About() {
  return (
    <motion.div
    
    initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:1}}
    className="w-full px-[12%] py-10 scroll-mt-20 " id="about">
      <h4 className="text-center mb-2 text-lg font-ovo  ">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none '>
          <Image src={assets.profile} alt='image' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1 '>
          <p className='mb-10 max-2-2xl font-ovo'>
            I am a experienced Developer wuth hands on experience on various technologies in the field. throughout my tech career and have participated and won various hackathons and prizes throughout my tech journey...and got opportunity to collaborrate and grow with various organisations...
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className='
      
        border-[0.5px] border-gray-400
        rounded-xl p-6 cursor-pointer
        shadow-sm hover:shadow-xl
        duration-500
        hover:-translate-y-1
        hover:bg-lighthover
      '
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700 font-ovo'>Tools I Use</h4>
          <ul className='flex items-center gap-3 sm:gap-5 '>
            {toolsData.map((tool, index) => (
              <li className='flex items-center justify-center w-10 sm:w-14 aspect-square border border-gray-400  rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}><Image src={tool} alt='tool' className='w-5 sm:w-7' /></li>
            ))}
          </ul>

        </div>
      </div>
    </motion.div>
  )
}

export default About