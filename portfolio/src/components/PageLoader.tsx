"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PageLoader() {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    gsap.to(loaderRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.3,
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black z-[9999] translate-y-0 flex items-center justify-center"
    >
      <h1
        className="
          text-white 
          font-extrabold 
          tracking-tight 
          text-[14vw]
          leading-none
          uppercase
        "
      >
        HI,What's up.. 👋
      </h1>
    </div>
  );
}
