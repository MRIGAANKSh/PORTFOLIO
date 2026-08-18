"use client";

import { LayoutGroup } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Preloader } from "@/components/preloader";
import WorkingExperience from "@/components/working";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LayoutGroup>
      <Preloader />
      <main className="min-h-screen pt-0 sm:pt-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto sm:rounded-t-3xl! sm:border border-b-0! sm:overflow-hidden">
          <Header />
          <Hero />
          <WorkingExperience />
          <Projects />
          <Footer />
        </div>
      </main>
    </LayoutGroup>
  );
}
