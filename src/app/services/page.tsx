import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      {/* Mental Health Therapy Sessions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🧠 Mental Health Therapy Sessions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="1:1 Emotional Clarity Session" price="$65" duration="60 min" description="A guided space to explore thoughts, emotions, and inner blocks." />
          <ServiceCard title="Anxiety & Stress Relief Package" price="$180" duration="3 sessions" description="Tools for nervous system calm, reframing, and emotional resilience." />
          <ServiceCard title="Trauma-Informed Healing Sessions" description="Safe space to process life experiences with grounded support." />
        </div>
      </section>
      {/* Life Coaching / Self-Development */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🌱 Life Coaching / Self-Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard title="Confidence & Purpose Coaching" price="$70" duration="60 min" description="Discover your authentic goals and release inner resistance." />
          <ServiceCard title="Mindset Reset Package" price="$200" duration="3 sessions" description="Reframe limiting beliefs, gain self-trust, and learn boundary skills." />
          <ServiceCard title="SoulSpring Blend Coaching" description="Fully personalized sessions combining therapy-style reflection and goal-driven coaching." />
        </div>
      </section>
    </div>
  );
} 