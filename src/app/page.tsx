"use client";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
// import BlogPreviewCard from "@/components/BlogPreviewCard"; // Not used on homepage preview
import NewsletterSignup from "@/components/NewsletterSignup";
// import Link from "next/link"; // Not used directly in this page component
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Intro/About Preview */}
      <motion.section
        className="my-12 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold mb-2">Meet Your Guide</h2>
        <p className="text-lg text-gray-700">
          Hi, I&apos;m Paul, a trauma-informed coach and emotional wellness guide. I help individuals rediscover clarity, calm, and purpose through SoulSpring.
        </p>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        className="my-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard title="Therapy Sessions" description="Gentle, trauma-informed support for emotional healing." />
          <ServiceCard title="Life Coaching" description="Goal-driven coaching for confidence and clarity." />
          <ServiceCard title="Emotional Growth Packages" description="Bundles for deep, ongoing transformation." />
        </div>
      </motion.section>

      {/* Testimonials Preview */}
      <motion.section
        className="my-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-center mb-8">What Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <TestimonialCard author="A.S." text="SoulSpring gave me more than clarity — it gave me hope." />
          <TestimonialCard author="J.R." text="I never felt judged. Just deeply understood." />
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        className="my-16 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <NewsletterSignup />
      </motion.section>
    </>
  );
}
