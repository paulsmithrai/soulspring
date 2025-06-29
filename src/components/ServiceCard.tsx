'use client';
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  price?: string;
  duration?: string;
};

export default function ServiceCard({ title, description, price, duration }: ServiceCardProps) {
  return (
    <motion.div
      className="card-soulspring flex flex-col gap-2 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-accent mb-1">{title}</h3>
      <p className="text-gray-700 flex-1">{description}</p>
      {(price || duration) && (
        <div className="mt-2 text-sm text-gray-500">
          {duration && <span>{duration}</span>}
          {duration && price && <span className="mx-2">·</span>}
          {price && <span>{price}</span>}
        </div>
      )}
    </motion.div>
  );
} 