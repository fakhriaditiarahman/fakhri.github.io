"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {portfolioData.about}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
