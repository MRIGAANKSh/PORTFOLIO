"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CustomCursor from "@/components/CustomCursor";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Custom Cursor */}
      <CustomCursor />
    </div>
  );
};

export default Home;
