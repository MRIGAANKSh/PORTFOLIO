"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-white bg-black px-6">
      
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-5xl md:text-7xl font-extrabold text-center"
      >
        Hi, I'm <span className="text-[#00E5FF]">Mrigaank</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="mt-4 text-lg md:text-2xl text-gray-300 text-center max-w-2xl"
      >
        A Developer who builds smooth UIs, AI-powered experiences, 
        and beautiful digital products.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-8"
      >
        <a
          href="#projects"
          className="px-8 py-3 text-lg font-semibold bg-[#00E5FF] text-black rounded-xl hover:bg-white transition"
        >
          View My Work
        </a>
      </motion.div>

    </section>
  );
}
