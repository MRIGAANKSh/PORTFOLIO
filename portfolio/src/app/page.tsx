import PageLoader from "@/components/PageLoader";
import HeroSection from "@/components/HeroSection";

export default function Page() {
  return (
    <main className="relative bg-black">   {/* <<< FIX HERE */}
      <PageLoader />

      {/* Hero Section will appear after the loader */}
      <HeroSection />
    </main>
  );
}
