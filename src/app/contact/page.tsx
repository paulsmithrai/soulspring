import { FaInstagram, FaEnvelope, FaYoutube, FaBlog } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact</h1>
      <form className="space-y-4 mb-8">
        <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border" />
        <textarea placeholder="Message" className="w-full p-3 rounded-lg border min-h-[120px]" />
        <button type="submit" className="btn-soulspring w-full">Send Message</button>
      </form>
      <div className="flex justify-center gap-6 text-2xl text-accent">
        <Link href="https://instagram.com" aria-label="Instagram"><FaInstagram /></Link>
        <Link href="mailto:hello@soulspring.com" aria-label="Email"><FaEnvelope /></Link>
        <Link href="https://youtube.com" aria-label="YouTube"><FaYoutube /></Link>
        <Link href="/blog" aria-label="Blog"><FaBlog /></Link>
      </div>
    </div>
  );
} 