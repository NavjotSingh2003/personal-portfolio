import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motionPresets";
import dp from "../../assets/profile.jpeg"; // your image path

export default function About() {
  return (
    <section
      id="about"
      className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <motion.div
          {...fadeUp}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Hello! 👋 I’m{" "}
            <span className="font-semibold text-primary">Navjot Singh</span>, a
            passionate Full-Stack Developer and Ethical Hacker dedicated to crafting
            intuitive, scalable, and visually engaging digital experiences. I enjoy
            transforming ideas into functional solutions that merge clean
            aesthetics with efficient code.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            I specialize in <b>ReactJS</b>, <b>NextJS</b>, <b>NodeJS</b>, and
            modern design systems like <b>Tailwind CSS</b> and <b>Kali Linux</b>.
            I also explore backend development, AI-driven integrations, and
            performance optimization.
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-4">
            {/* ✅ Download CV Button */}
            <a
  href="/Navjot_non_tech.pdf"
  download="Navjot_Singh_CV.pdf"
  className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-all duration-300"
>
  Download CV
</a>


            <a
              href="#contact"
              className="border border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          {...fadeUp}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur opacity-70 group-hover:opacity-100 transition duration-700"></div>
            <img
              src={dp}
              alt="Navjot Singh"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
