// src/components/Experience.jsx
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motionPresets";

import ccsLogo from "../../assets/company_logo/ccs_logo.png";
import saicLogo from "../../assets/company_logo/saic_logo.jpg";
import threatPrismLogo from "../../assets/company_logo/threatPrism_logo.jpg";

export default function Experience() {
  const experiences = [
    {
      id: 0,
      img: ccsLogo,
      role: "Student-Mentor",
      company: "Creative Computing Society",
      date: "April 2023 - June 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDB",
        "Redux",
        "Next JS",
      ],
    },
    {
      id: 1,
      img: saicLogo,
      role: "Student-Mentor",
      company: "Student Alumni Interactive Cells",
      date: "July 2023 - March 2024",
      desc: "Honored to be among the 800 individuals selected as executive members of the student chapter of the world's largest SAIC organization. Contributed meaningfully to its vision and objectives through mentorship and collaborative leadership.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: threatPrismLogo,
      role: "Cyber-Security Intern",
      company: "Threat Prism",
      date: "September 2021 - August 2022",
      desc: "Completed an internship under the Cyber Security & Ethical Hacking Industrial Program. Developed an Information Gathering Tool - Network and Port Scanner. Gained practical exposure in network analysis, OSINT, and penetration testing techniques under professional mentorship.",
      skills: ["Python", "Kali Linux", "OSINT"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          My <span className="text-primary">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              {...fadeUp}
              className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-glow transition-all duration-300"
            >
              {/* Logo */}
              <div className="absolute -top-8 left-8 bg-white dark:bg-gray-900 rounded-full p-2 shadow-glowSm">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-14 h-14 object-contain rounded-full"
                />
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-primary font-medium mb-4">
                  {exp.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {exp.desc}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
