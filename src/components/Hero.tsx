"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4">
            Hello, I&apos;m
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            {portfolioData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            {portfolioData.role} specializing in building exceptional digital experiences.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 hover:border-gray-800 dark:hover:border-gray-300 rounded-full font-medium transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
