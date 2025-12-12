"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    const ctx = gsap.context(() => {
      gsap.to(nameRef.current, {
        fontSize: "2.2rem",
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=220",
          scrub: true,
        },
      });

      gsap.to(navRef.current, {
        paddingTop: "0.4rem",
        paddingBottom: "0.4rem",
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=220",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-black px-1 md:px-4 py-4"
      style={{ fontFamily: "'Funnel Display', 'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LEFT — HUGE NAME */}
        <h1
          id="big-name"   // 👈 ADDED
          ref={nameRef}
          className="text-[22vh] md:text-[30vh] font-bold text-white leading-none select-none tracking-tight ml-0 md:ml-0"
        >
          MRIGAANK
        </h1>

        {/* RIGHT — MENU */}
        <div
          id="menu-btn"   // 👈 ADDED
          className="text-white text-2xl cursor-pointer select-none hover:text-yellow-400 transition"
        >
          Menu
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
