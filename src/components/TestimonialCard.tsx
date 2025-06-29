'use client';
import { motion } from "framer-motion";

type TestimonialCardProps = {
  author: string;
  text: string;
};

export default function TestimonialCard({ author, text }: TestimonialCardProps) {
  return (
    <motion.div
      className="card-soulspring flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <blockquote className="italic text-lg text-gray-800">“{text}”</blockquote>
      <div className="text-accent font-semibold text-right">— {author}</div>
    </motion.div>
  );
} 