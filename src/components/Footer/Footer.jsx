// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  // scroll back to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center space-y-6">
        {/* Animated brand text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          <span className="text-primary">Navjot</span> Singh
        </motion.h2>

        {/* Social links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/NavjotSingh2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/navjot-singh-a68a4a243/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:navjotsingh2003@gmail.com"
            className="hover:text-primary transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Scroll to top button */}
        {/* Scroll to top button */}
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onClick={scrollToTop}
  className="p-3 bg-white dark:bg-primary text-primary dark:text-white rounded-full shadow-lg hover:shadow-primary/40 border border-gray-200 dark:border-primary/40 transition-all duration-300"
  aria-label="Scroll to top"
>
  <FaArrowUp className="text-lg" />
</motion.button>


        {/* Divider */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-800 my-4"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Navjot Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
