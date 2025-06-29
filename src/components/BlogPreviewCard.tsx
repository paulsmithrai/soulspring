'use client';
import Link from "next/link";
import { motion } from "framer-motion";

type BlogPreviewCardProps = {
  title: string;
  excerpt: string;
  slug: string;
};

export default function BlogPreviewCard({ title, excerpt, slug }: BlogPreviewCardProps) {
  return (
    <motion.div
      className="card-soulspring flex flex-col gap-3 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-accent mb-1">{title}</h3>
      <p className="text-gray-700 flex-1">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-accent font-semibold hover:underline mt-2">Read More →</Link>
    </motion.div>
  );
} 