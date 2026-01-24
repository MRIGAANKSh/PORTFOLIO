"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";

function Navbar() {

  // ✅ FIX 1: properly typed ref
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  // ✅ FIX 2: safe DOM access
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  const [scroll,setScoll]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY>50){
        setScoll(true)
      }else{
        setScoll(false)
      }
    })
  },[])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="gradient" className="w-full" />
      </div>

     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
${scroll ? "bg-white/30 backdrop-blur-xl shadow-sm" : ""} `}>

        {/* Logo */}
        <a href="#top" className="font-outfit">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-28 cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${scroll?"":"bg-white shadow-sm bg-opacity-50 "}`}>
          <li>
            <a href="#top" className="font-ovo hover:text-purple-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo hover:text-purple-600 transition">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo hover:text-purple-600 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo hover:text-purple-600 transition">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo hover:text-purple-600 transition">
              Contact me
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="darkmode" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 ml-4
                       border border-gray-500 rounded-full
                       font-outfit hover:bg-lightHover dark:hover:bg-darkHover transition"
          >
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
<ul
  ref={sideMenuRef}
  className="flex md:hidden flex-col gap-2 py-20 px-6 fixed -right-64 top-0 bottom-0
             w-64 h-screen z-50 bg-rose-50 transition duration-500"
>
  <div className="absolute right-6 top-6" onClick={closeMenu}>
    <Image src={assets.close_black} alt="" className="w-5 cursor-pointer" />
  </div>

  <li>
    <a
      href="#top"
      onClick={closeMenu}
      className="block w-full py-3 px-4 rounded-lg font-ovo
                 hover:bg-rose-100 hover:text-purple-600 transition"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      onClick={closeMenu}
      className="block w-full py-3 px-4 rounded-lg font-ovo
                 hover:bg-rose-100 hover:text-purple-600 transition"
    >
      About me
    </a>
  </li>

  <li>
    <a
      href="#services"
      onClick={closeMenu}
      className="block w-full py-3 px-4 rounded-lg font-ovo
                 hover:bg-rose-100 hover:text-purple-600 transition"
    >
      Services
    </a>
  </li>

  <li>
    <a
      href="#work"
      onClick={closeMenu}
      className="block w-full py-3 px-4 rounded-lg font-ovo
                 hover:bg-rose-100 hover:text-purple-600 transition"
    >
      My Work
    </a>
  </li>

  <li>
    <a
      href="#contact"
      onClick={closeMenu}
      className="block w-full py-3 px-4 rounded-lg font-ovo
                 hover:bg-rose-100 hover:text-purple-600 transition"
    >
      Contact me
    </a>
  </li>
</ul>

      </nav>
    </>
  );
}

export default Navbar;
