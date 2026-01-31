import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-8">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
