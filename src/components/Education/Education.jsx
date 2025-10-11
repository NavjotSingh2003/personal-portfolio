// src/components/Education.jsx
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motionPresets";
import thaparLogo from "../../assets/education_logo/tiet_logo.png"; // ✅ update path to your actual logo
import schoolLogo from "../../assets/education_logo/aps_logo.jpg"; // ✅ optional second logo

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "B.E. in Computer Science Engineering",
      institution: "Thapar Institute of Engineering & Technology, Patiala",
      year: "2022 – 2026",
      description:
        "Pursuing a comprehensive program in Computer Science with focus on AI, Data Science, and Full Stack Development. Engaged in multiple real-world projects integrating AI, Web, and Cloud technologies.",
      logo: thaparLogo,
    },
    {
      id: 2,
      title: "Senior Secondary Education",
      institution: "Army Public School, Ferozepur",
      year: "2021 – 2022",
      description:
        "Completed higher secondary education in Science stream with distinction, developing strong foundations in Physics, Chemistry, and Mathematics.",
      logo: schoolLogo,
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My <span className="text-primary">Education</span>
        </motion.h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              {...fadeUp}
              className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-glow transition-all duration-300"
            >
              {/* Logo */}
              <div className="absolute -top-8 left-8 bg-white dark:bg-gray-900 rounded-full p-2 shadow-glowSm">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {edu.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {edu.institution}
                </p>
                <p className="text-sm text-primary font-medium mb-4">
                  {edu.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
