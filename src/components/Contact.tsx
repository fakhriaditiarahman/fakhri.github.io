"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-blue-50 dark:bg-blue-950/20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            <Mail size={20} />
            Say Hello
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
