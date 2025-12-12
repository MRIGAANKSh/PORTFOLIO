"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    if (!cursor || !text) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const activateCursor = (label: string) => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    if (!cursor || !text) return;

    text.textContent = label;

    gsap.to(cursor, {
      width: 120,
      height: 120,
      backgroundColor: "#facc15", // 🌟 stays SOLID yellow
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(text, {
      opacity: 1,
      scale: 1,
      duration: 0.25,
    });
  };

  const deactivateCursor = () => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    if (!cursor || !text) return;

    gsap.to(cursor, {
      width: 10,
      height: 10,
      backgroundColor: "#facc15", // 🌟 stays yellow
      duration: 0.3,
    });

    gsap.to(text, {
      opacity: 0,
      scale: 0.5,
      duration: 0.2,
    });
  };

  useEffect(() => {
    const nameElement = document.getElementById("big-name");
    const menuElement = document.getElementById("menu-btn");

    if (nameElement) {
      nameElement.addEventListener("mouseenter", () =>
        activateCursor("THAT'S ME")
      );
      nameElement.addEventListener("mouseleave", deactivateCursor);
    }

    if (menuElement) {
      menuElement.addEventListener("mouseenter", () =>
        activateCursor("CLICK ME")
      );
      menuElement.addEventListener("mouseleave", deactivateCursor);
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 
        w-[10px] h-[10px]
        rounded-full bg-yellow-400
        pointer-events-none 
        z-[9999]
        flex items-center justify-center
      "
      style={{
        transform: "translate(-50%, -50%)",
        mixBlendMode: "normal", // ✅ SOLID — no weird background blend
      }}
    >
      <span
        ref={textRef}
        className="text-black font-bold text-sm opacity-0 scale-50"
      ></span>
    </div>
  );
};

export default CustomCursor;
