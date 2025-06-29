import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="py-20 text-center flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#F9F6F1] to-[#eaf3ed]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-accent drop-shadow-sm">
        A Safe Space to Heal, Grow, and Transform.
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        At SoulSpring, we help you overcome anxiety, self-doubt, and emotional blocks through therapy-informed coaching.
      </p>
      <Link href="/booking" className="btn-soulspring text-lg px-8 py-3 shadow-lg">
        Book a Free Clarity Call
      </Link>
      {/* Decorative background shapes */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-56 h-56 bg-accent/10 rounded-full blur-3xl z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
    </motion.section>
  );
} 