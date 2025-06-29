import BlogPreviewCard from "@/components/BlogPreviewCard";

const articles = [
  {
    title: "Why You Feel Stuck — And How to Start Moving Again",
    excerpt: "Explore the roots of feeling stuck and discover gentle ways to move forward.",
    slug: "why-you-feel-stuck",
  },
  {
    title: "5 Grounding Tools for Anxiety Relief",
    excerpt: "Simple, effective practices to calm your mind and body in anxious moments.",
    slug: "5-grounding-tools-anxiety",
  },
  {
    title: "Creating Boundaries with Love",
    excerpt: "Learn how to set healthy boundaries without guilt or fear.",
    slug: "creating-boundaries-love",
  },
];

export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">SoulSpring Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((a) => (
          <BlogPreviewCard key={a.slug} title={a.title} excerpt={a.excerpt} slug={a.slug} />
        ))}
      </div>
    </div>
  );
} 