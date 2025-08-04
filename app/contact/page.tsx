"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Music, ShoppingBag, Youtube, Send } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this to an API endpoint
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-[calc(100vh-160px)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-contact.jpg"
          alt="Contact background"
          fill
          className="object-cover opacity-20"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-accent-gold mb-12 text-center">
            Get In Touch
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dark-gray/80 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-soft-white mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-soft-white/80 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-medium-gray rounded-lg text-soft-white placeholder-soft-white/40 focus-outline"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-soft-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 bg-medium-gray rounded-lg text-soft-white placeholder-soft-white/40 focus-outline resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-gold text-off-black font-semibold py-3 rounded-lg hover:bg-soft-white transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-8">
              <div className="bg-dark-gray/80 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-soft-white mb-6">
                  Connect With Me
                </h2>
                <div className="space-y-4">
                  <Link
                    href="https://instagram.com/thepoetmalik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-soft-white/80 hover:text-accent-gold transition-colors duration-300"
                  >
                    <Instagram size={24} />
                    <span>@thepoetmalik</span>
                  </Link>
                  <Link
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-soft-white/80 hover:text-accent-gold transition-colors duration-300"
                  >
                    <Music size={24} />
                    <span>The Poet Malik on Spotify</span>
                  </Link>
                  <Link
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-soft-white/80 hover:text-accent-gold transition-colors duration-300"
                  >
                    <ShoppingBag size={24} />
                    <span>Books on Amazon</span>
                  </Link>
                  <Link
                    href="https://youtube.com/@thepoetmalik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-soft-white/80 hover:text-accent-gold transition-colors duration-300"
                  >
                    <Youtube size={24} />
                    <span>YouTube Channel</span>
                  </Link>
                </div>
              </div>

              <div className="bg-dark-gray/80 backdrop-blur-sm rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-soft-white mb-4">
                  Booking & Inquiries
                </h2>
                <p className="text-soft-white/80 leading-relaxed">
                  For booking requests, collaborations, or press inquiries,
                  please use the contact form or reach out via social media.
                  I&apos;m always open to new creative projects and
                  performances.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
