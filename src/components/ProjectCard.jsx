import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, img, index, isDarkMode }) {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    // <div>project card</div>
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${isDarkMode
            ? "bg-gray-900 border-gray-800 hover:border-gray-700 hover:shadow-2xl"
            : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-100 border"
          } backdrop-blur-sm`}
      >
        {/* Project image */}
        <div className="realtive overflow-hidden">
          <img
            src={img}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-4 right-4 ">
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
                } backdrop-blur-sm`}
            >
              {project.category}
            </span>
          </div>

          {/* hover overlay with CTA buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
          >
            <motion.a
              href={project.liveUrl}
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className={`border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all`}
            >
              <FiGithub size={16} />
              <span>github</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Project content */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            {project.description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`text-xs px-3 py-2 rounded-full ${isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                  }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
