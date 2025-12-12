import PageLoader from "@/components/PageLoader";
import Home from "@/pages/Home";

export default function Page() {
  return (
    <main className="relative bg-black">
      <PageLoader />

      {/* After loader, render the full Home layout */}
      <Home />
    </main>
  );
}
