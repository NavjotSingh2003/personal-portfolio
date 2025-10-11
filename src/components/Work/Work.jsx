// src/components/Projects.jsx
import { motion } from "framer-motion";

// ✅ Import images from your assets/work_logo folder
import githubdetLogo from "../../assets/work_logo/bookzone.jpg";
import csprepLogo from "../../assets/work_logo/recipe.jpg";
import movierecLogo from "../../assets/work_logo/eduapp.jpg";

export default function Projects() {
  // ✅ Your real project data
  const projects = [
    {
      id: 0,
      title: "Book-Zone",
      description:
        "The Book Selling Website is a fully functional e-commerce platform designed to connect book enthusiasts with a vast collection of books. It offers easy browsing, purchasing, and reviewing experiences, catering to both casual readers and avid bibliophiles.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/NavjotSingh2003/Book-Zone",
      webapp: "https://kissan-a96e9.web.app/",
    },
    {
      id: 1,
      title: "Recipe Website",
      description:
        "The Recipe Sharing Website is an interactive platform for food lovers to explore, create, and share recipes. It promotes community engagement through cooking tips, user-generated content, and easy recipe discovery.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NavjotSingh2003/Recipe-website2",
      webapp: "",
    },
    {
      id: 2,
      title: "Endless Learning Website",
      description:
        "An E-Learning platform designed to help college students access educational resources, collaborate, and improve learning outcomes with interactive tools and centralized content.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NavjotSingh2003/hackthon2",
      webapp: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[330px]">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                    {proj.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    GitHub →
                  </a>
                  {proj.webapp && (
                    <a
                      href={proj.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
