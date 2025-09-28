import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = ["Home", "Skills", "Work", "About", "Contact"]
  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0  w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 size={24} className="text-blue-500" />{" "}
          <span className={`text-lg ml-1 ${isDarkMode ? "text-white" : ""}`}>Time to Progress</span>
        </motion.div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm uppercase tracking-wide transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex item-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "tetx-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile View */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              isDarkMode ? "bg-gray-900" : "bg-gray-50"
            } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            {menuItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wide transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.nav>
  );
}
