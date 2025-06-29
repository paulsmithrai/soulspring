import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SoulSpring – Therapy-Informed Coaching & Healing",
  description: "Online therapy and life coaching for clarity, confidence, and calm.",
  openGraph: {
    title: "SoulSpring – Therapy-Informed Coaching & Healing",
    description: "Online therapy and life coaching for clarity, confidence, and calm.",
    url: "https://soulspring.com", // Update with real domain
    siteName: "SoulSpring",
    images: [
      {
        url: "/og-image.png", // Placeholder, add real image later
        width: 1200,
        height: 630,
        alt: "SoulSpring – Therapy-Informed Coaching & Healing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#F9F6F1] text-[#333] min-h-screen flex flex-col font-sans">
        {/* Header with logo and navigation */}
        <Header />
        <main className="flex-1 w-full mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        {/* Footer with contact/social links */}
        <Footer />
      </body>
    </html>
  );
}
