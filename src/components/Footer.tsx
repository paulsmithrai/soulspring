'use client';
import Link from "next/link";
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="w-full py-8 bg-white/80 border-t border-[#ece7df] mt-12 shadow-inner"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <div className="text-accent font-bold text-lg">SoulSpring</div>
        <nav className="flex gap-4 text-sm">
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/booking" className="hover:text-accent">Booking</Link>
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </nav>
        <div className="flex gap-4 text-accent text-xl">
          <Link href="https://instagram.com" aria-label="Instagram"><FaInstagram /></Link>
          <Link href="mailto:hello@soulspring.com" aria-label="Email"><FaEnvelope /></Link>
          <Link href="https://youtube.com" aria-label="YouTube"><FaYoutube /></Link>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">&copy; {new Date().getFullYear()} SoulSpring. All rights reserved.</div>
    </motion.footer>
  );
} 