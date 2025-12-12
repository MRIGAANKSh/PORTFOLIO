"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const HeroSection = () => {
  const changingTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const leftSectionRef = useRef<HTMLDivElement>(null);

  // Words to type
  const typingWords = [
    "Freelance UX/UI Designer",
    "Frontend Developer",
    "Creative Technologist",
    "Next.js Expert",
    "GSAP Animator",
  ];

  // Project images
  const projectImages = [
    "/project1.png",
    "/project2.png",
    "/project3.png",
    "/project4.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Typing effect
  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    const textEl = changingTextRef.current;
    if (!textEl) return;

    const type = () => {
      const currentWord = typingWords[wordIndex];
      if (!deleting) {
        textEl.textContent = currentWord.slice(0, charIndex + 1);
        gsap.to(textEl, { opacity: 1, duration: 0.2 });
        charIndex++;
        if (charIndex === currentWord.length) {
          deleting = true;
          setTimeout(type, 1200);
          return;
        }
      } else {
        textEl.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        gsap.to(textEl, { opacity: 0.6, duration: 0.1 });
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % typingWords.length;
        }
      }
      setTimeout(type, deleting ? 80 : 120);
    };

    type();
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;
    const blink = () => {
      cursorEl.style.opacity = cursorEl.style.opacity === "0" ? "1" : "0";
    };
    const interval = setInterval(blink, 500);
    return () => clearInterval(interval);
  }, []);

  // Rotate project images
  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projectImages.length);
    }, 1000);
    return () => clearInterval(imgInterval);
  }, []);

  // Animate left section entrance
  useEffect(() => {
    if (leftSectionRef.current) {
      gsap.from(leftSectionRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  // GSAP hover animation for button
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseEnter = () => {
      gsap.to(btn, {
        backgroundColor: "#000000",
        color: "#ffffff",
        scale: 1.05,
        duration: 0.3,
        borderRadius: "2.5rem",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        backgroundColor: "#ffffff",
        color: "#000000",
        scale: 1,
        duration: 0.3,
        borderRadius: "3rem",
      });
    };

    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-black text-white px-6 md:px-16 pt-[70vh] md:pt-[75vh] grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      style={{ fontFamily: "'Funnel Display', 'Outfit', sans-serif" }}
    >
      {/* LEFT SECTION */}
      <div ref={leftSectionRef} className="flex flex-col justify-start md:justify-center space-y-6">
        <span className="text-yellow-400 text-xl md:text-2xl font-semibold">Hi, I'm Mrigaank Sharma</span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="flex items-center">
            <span ref={changingTextRef}></span>
            <span ref={cursorRef} className="ml-2 text-yellow-400 font-bold">|</span>
          </span>
          <span className="text-yellow-400 block mt-4">from sunny Lisbon.</span>
        </h1>

        <p className="text-lg md:text-xl opacity-80 max-w-xl">
          I craft digital experiences with motion, design & minimalism.
        </p>

        {/* BUTTON */}
        <a
          href="#contact"
          ref={buttonRef}
          id="hero-btn"
          className="
            inline-block mt-8 
            px-6 py-4 
            text-black font-bold 
            bg-white rounded-[3rem] 
            text-2xl
            border border-white
          "
        >
          Get in touch
        </a>
      </div>

      {/* RIGHT SECTION — Rotating Project Images */}
      <div className="flex items-center justify-center">
        <div className="w-72 h-72 md:w-[380px] md:h-[380px] relative rounded-3xl shadow-xl overflow-hidden">
          <Image
            src={projectImages[currentImage]}
            alt={`Project ${currentImage + 1}`}
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
