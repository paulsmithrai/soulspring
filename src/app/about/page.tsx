import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">About SoulSpring</h1>
      {/* Profile Photo Placeholder */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center overflow-hidden">
          <Image 
            src="/profile-placeholder.png" 
            alt="Profile"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* My Story */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Story</h2>
        <p>
          I&apos;m Paul, founder of SoulSpring. I&apos;ve created this space for anyone who feels lost, overwhelmed, or emotionally stuck. My style is intuitive, nonjudgmental, and results-focused. I blend coaching with trauma-informed listening to help you reconnect with the strongest parts of yourself.
        </p>
      </section>
      {/* Philosophy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Healing & Coaching Philosophy</h2>
        <p>
          Healing is a journey, not a destination. I believe in meeting you where you are, honoring your story, and empowering you to grow at your own pace.
        </p>
      </section>
      {/* What SoulSpring Represents */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">What SoulSpring Represents</h2>
        <p>
          SoulSpring is a safe, nurturing space for emotional renewal and self-discovery. Here, you are seen, heard, and supported.
        </p>
      </section>
      {/* Credentials */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Credentials & Experience</h2>
        <ul className="list-disc ml-6">
          <li>Certified Trauma-Informed Coach</li>
          <li>5+ years experience in emotional wellness</li>
          <li>Ongoing training in somatic and mindfulness practices</li>
        </ul>
      </section>
    </div>
  );
} 