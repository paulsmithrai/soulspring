import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  { author: "A.S.", text: "SoulSpring gave me more than clarity — it gave me hope." },
  { author: "J.R.", text: "I never felt judged. Just deeply understood." },
  { author: "M.L.", text: "The blend of therapy and coaching was exactly what I needed." },
  { author: "S.K.", text: "I feel lighter, calmer, and more confident after every session." },
];

export default function Testimonials() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} author={t.author} text={t.text} />
        ))}
      </div>
    </div>
  );
} 