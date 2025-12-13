"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const changingTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  const typingWords = [
    "UI / UX Design Services",
    "Frontend Development",
    "Next.js Web Applications",
    "GSAP & Motion Design",
    "Interactive Web Experiences",
  ];

  const project = {
    image: "/Screenshot (418).png",
    title: "Occhi Clone",
  };

  const [loaded, setLoaded] = useState(false);

  /* ---------------- TYPING ---------------- */
  useEffect(() => {
    let word = 0;
    let char = 0;
    let deleting = false;
    const el = changingTextRef.current;
    if (!el) return;

    const type = () => {
      const text = typingWords[word];
      el.textContent = deleting
        ? text.slice(0, char--)
        : text.slice(0, char++);

      if (!deleting && char === text.length + 1) {
        deleting = true;
        setTimeout(type, 1000);
        return;
      }

      if (deleting && char === 0) {
        deleting = false;
        word = (word + 1) % typingWords.length;
      }

      setTimeout(type, deleting ? 60 : 110);
    };

    type();
  }, []);

  /* ---------------- CURSOR ---------------- */
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const i = setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);

    return () => clearInterval(i);
  }, []);

  /* ---------------- HERO ENTER ---------------- */
  useEffect(() => {
    gsap.from(heroRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  /* ---------------- IMAGE SCROLL (FINAL STABLE VERSION) ---------------- */
  useEffect(() => {
    if (!thumbRef.current || !overlayRef.current || !spacerRef.current || !loaded)
      return;

    const thumb = thumbRef.current;
    const overlay = overlayRef.current;

    const setupAnimation = () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(overlay);

      const rect = thumb.getBoundingClientRect();
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      const startX = rect.left + rect.width / 2 - cx;
      const startY = rect.top + rect.height / 2 - cy;

      gsap.set(overlay, {
        position: "fixed",
        top: "50%",
        left: "50%",
        x: startX,
        y: startY,
        width: rect.width,
        height: rect.height,
        borderRadius: 16,
        autoAlpha: 0,
        transformOrigin: "center center",
        willChange: "transform",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spacerRef.current,
          start: "top bottom",
          end: "+=2400",
          scrub: 1.5,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          onEnter: () => {
            gsap.set(overlay, { autoAlpha: 1 });
            gsap.set(thumb, { autoAlpha: 0 });
          },
          onLeaveBack: () => {
            gsap.set(overlay, { autoAlpha: 0 });
            gsap.set(thumb, { autoAlpha: 1 });
          },
        },
      });

      tl.to(overlay, {
        x: 0,
        y: 0,
        ease: "none",
        duration: 1,
      });

      tl.to(overlay, {
        width: "80vw",
        height: "80vh",
        borderRadius: 24,
        ease: "none",
        duration: 2,
      });

      ScrollTrigger.refresh();
    };

    setupAnimation();
    window.addEventListener("resize", setupAnimation);

    return () => {
      window.removeEventListener("resize", setupAnimation);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [loaded]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen bg-black text-white px-6 md:px-16 pt-[65vh] grid md:grid-cols-2 gap-16"
      >
        <div className="space-y-6 z-10">
          <span className="text-yellow-400 text-xl font-semibold">
            Hi, I'm Mrigaank Sharma
          </span>

          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="flex items-center">
              <span ref={changingTextRef}></span>
              <span ref={cursorRef} className="ml-2 text-yellow-400">|</span>
            </span>
            <span className="block text-yellow-400 mt-4">
              helping brands build modern web experiences.
            </span>
          </h1>

          <p className="text-lg opacity-80 max-w-xl">
            I design and develop clean, high-performance digital products
            focused on motion, usability, and minimalism.
          </p>
        </div>

        <div
          ref={thumbRef}
          className="relative w-[480px] h-[300px] rounded-2xl overflow-hidden shadow-2xl will-change-transform"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            onLoadingComplete={() => setLoaded(true)}
            className="object-cover"
          />
        </div>
      </section>

      <div
        ref={overlayRef}
        className="fixed z-50 pointer-events-none overflow-hidden bg-black"
      >
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>

      <div ref={spacerRef} className="h-[220vh] bg-black" />
    </>
  );
};

export default HeroSection;
