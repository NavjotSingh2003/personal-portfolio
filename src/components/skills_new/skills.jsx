// src/components/Skills.jsx
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/motionPresets";

// ---- Import logos ----
import angularLogo from "../../assets/tech_logo/angular.png";
import bootstrapLogo from "../../assets/tech_logo/bootstrap.png";
import cLogo from "../../assets/tech_logo/c.png";
import cppLogo from "../../assets/tech_logo/cpp.png";
import csharpLogo from "../../assets/tech_logo/csharp.png";
import cssLogo from "../../assets/tech_logo/css.png";
import expressLogo from "../../assets/tech_logo/express.png";
import figmaLogo from "../../assets/tech_logo/figma.png";
import firebaseLogo from "../../assets/tech_logo/firebase.png";
import gitLogo from "../../assets/tech_logo/git.png";
import githubLogo from "../../assets/tech_logo/github.png";
import gsapLogo from "../../assets/tech_logo/gsap.png";
import htmlLogo from "../../assets/tech_logo/html.png";
import javaLogo from "../../assets/tech_logo/java.png";
import javascriptLogo from "../../assets/tech_logo/javascript.png";
import materialuiLogo from "../../assets/tech_logo/materialui.png";
import mcLogo from "../../assets/tech_logo/mc.png";
import mongodbLogo from "../../assets/tech_logo/mongodb.png";
import mysqlLogo from "../../assets/tech_logo/mysql.png";
import netlifyLogo from "../../assets/tech_logo/netlify.png";
import nextjsLogo from "../../assets/tech_logo/nextjs.png";
import nodejsLogo from "../../assets/tech_logo/nodejs.png";
import postgreLogo from "../../assets/tech_logo/postgre.png";
import postmanLogo from "../../assets/tech_logo/postman.png";
import pythonLogo from "../../assets/tech_logo/python.png";
import reactjsLogo from "../../assets/tech_logo/reactjs.png";
import reduxLogo from "../../assets/tech_logo/redux.png";
import sassLogo from "../../assets/tech_logo/sass.png";
import springbootLogo from "../../assets/tech_logo/springboot.png";
import tailwindcssLogo from "../../assets/tech_logo/tailwindcss.png";
import typescriptLogo from "../../assets/tech_logo/typescript.png";
import vercelLogo from "../../assets/tech_logo/vercel.png";
import vscodeLogo from "../../assets/tech_logo/vscode.png";

// ---- Component ----
export default function Skills() {
  const SkillsInfo = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "SASS", logo: sassLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "React JS", logo: reactjsLogo },
        { name: "Angular", logo: angularLogo },
        { name: "Redux", logo: reduxLogo },
        { name: "Next JS", logo: nextjsLogo },
        { name: "Tailwind CSS", logo: tailwindcssLogo },
        { name: "GSAP", logo: gsapLogo },
        { name: "Material UI", logo: materialuiLogo },
        { name: "Bootstrap", logo: bootstrapLogo },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", logo: springbootLogo },
        { name: "Node JS", logo: nodejsLogo },
        { name: "Express JS", logo: expressLogo },
        { name: "MySQL", logo: mysqlLogo },
        { name: "MongoDB", logo: mongodbLogo },
        { name: "Firebase", logo: firebaseLogo },
        { name: "PostgreSQL", logo: postgreLogo },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "C", logo: cLogo },
        { name: "C++", logo: cppLogo },
        { name: "Java", logo: javaLogo },
        { name: "Python", logo: pythonLogo },
        { name: "C#", logo: csharpLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "TypeScript", logo: typescriptLogo },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", logo: gitLogo },
        { name: "GitHub", logo: githubLogo },
        { name: "VS Code", logo: vscodeLogo },
        { name: "Postman", logo: postmanLogo },
        { name: "Compass", logo: mcLogo },
        { name: "Vercel", logo: vercelLogo },
        { name: "Netlify", logo: netlifyLogo },
        { name: "Figma", logo: figmaLogo },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          {...fadeUp}
          className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Grid */}
        <div className="space-y-16">
          {SkillsInfo.map((category, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              className="flex flex-col gap-8 items-center"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-primary tracking-wide mb-4">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.07 }}
                    className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-glow transition-all duration-300 w-36 h-36"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-3"
                      loading="lazy"
                    />
                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
