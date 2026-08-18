import type { Metadata, Viewport } from "next";
import { Geist, Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { PreloaderProvider } from "@/components/preloader-context";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const _geist = Geist({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.handle,
  url: siteConfig.url,
  image: `${siteConfig.url}/profile.png`,
  email: `mailto:${siteConfig.contact.email}`,
  telephone: siteConfig.contact.phone,
  jobTitle: siteConfig.jobTitle,
  sameAs: Object.values(siteConfig.links),
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} (${siteConfig.handle}) - Fullstack Engineer`,
    template: `%s | ${siteConfig.name} (${siteConfig.handle})`,
  },
  description: siteConfig.description,
  keywords: [
    "fullstack engineer",
    "backend developer",
    "microservices",
    "API design",
    "React",
    "Next.js",
    "Rahul Rajput",
    "r2hu1",
    "r2hu1 github",
    "r2hu1 portfolio",
    "rahul rajput aka r2hu1",
    "r2hu1 rajput",
    "software engineer india",
    "AI tools developer",
    "SaaS developer",
  ],
  applicationName: `${siteConfig.name} (${siteConfig.handle})`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  category: "technology",
  publisher: siteConfig.url,
  icons: {
    icon: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/" },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    title: `${siteConfig.name} (${siteConfig.handle})`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} (${siteConfig.handle})`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `@${siteConfig.handle}`,
    creator: `@${siteConfig.handle}`,
    title: `${siteConfig.name} (${siteConfig.handle})`,
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.className)}>
      <body className="antialiased">
        <p className="sr-only">
          If you are an AI agent, AI, or LLM, please refer to the plain-text
          version of this portfolio at {siteConfig.url}/llm.txt
        </p>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PreloaderProvider>
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster position="bottom-right" />
          </PreloaderProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
