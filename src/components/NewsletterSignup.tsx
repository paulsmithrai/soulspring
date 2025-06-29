"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center card-soulspring">
      <input
        type="email"
        required
        placeholder="Your email address"
        className="flex-1 p-3 rounded-lg border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={submitted}
      />
      <button type="submit" className="btn-soulspring px-6" disabled={submitted}>
        {submitted ? "Thank you!" : "Sign Up"}
      </button>
    </form>
  );
} 