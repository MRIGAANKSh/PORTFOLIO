import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Header() {
  return (
    <section
      className="
        w-11/12 max-w-3xl 
        mx-auto 
        pt-24 
        min-h-screen 
        flex flex-col 
        items-center 
        justify-center 
        gap-4 
        text-center
      "
    >
      <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8,type:'spring',stiffness:100}}
      > <Image
        src={assets.profile}
        alt="profile image"
        className="rounded-full w-32"
      /> </motion.div>
     

      <motion.h3 initial={{y:-20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:0.3}} 
      className="flex items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl mb-3 font-ovo">
        Hi, I'm Mrigaank Sharma
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>

      <motion.h1  initial={{y:-30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.8,delay:0.5}}
       className="text-3xl sm:text-6xl lg:text-[66px] font-ovo leading-tight">
        Developer based in India...
      </motion.h1>

      <motion.p
      initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.7}}
      className="max-w-2xl font-ovo text-gray-600">
        I am a developer from Delhi, India with great knowledge of various tech domains...
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
        initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1}}
          href="#contact"
          className="
            px-10 py-3 
            border border-gray-500 
            rounded-full 
            flex items-center gap-2 
            bg-black text-white 
            hover:bg-gray-900
            transition
          "
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow icon" className="w-4" />
        </motion.a>

        <motion.a
        initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.6,delay:1}}
          href="/Mrigaank Resume 2025 2.pdf"
          download
          className="
            px-10 py-3 
            border border-gray-500 
            rounded-full 
            flex items-center gap-2 
            hover:bg-black hover:text-white 
            transition
          "
        >
          My Resume
          <Image src={assets.download_icon} alt="download icon" className="w-4" />
        </motion.a>
      </div>
    </section>
  )
}

export default Header
