'use client';
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      className="w-full py-4 bg-white/80 backdrop-blur border-b border-[#ece7df] sticky top-0 z-30 shadow-sm"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-accent">
          SoulSpring
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Nav Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          <FaBars />
        </button>
      </div>
      {/* Mobile Nav Drawer */}
      {open && (
        <motion.nav
          className="md:hidden bg-white border-t border-[#ece7df] px-4 py-2 flex flex-col gap-3 shadow"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="py-2 text-lg hover:text-accent" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
} 