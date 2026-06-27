"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
  { href: "https://github.com/chandana2624", label: "GitHub" },
  { href: "https://www.linkedin.com/in/chandana-pottipally/", label: "LinkedIn" },
];

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [shrink, setShrink] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariant = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  } as const;

  return (
    <motion.nav
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm glass ${
        shrink ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Chandana
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <FiMoon className="h-5 w-5 text-gray-700" />
            ) : (
              <FiSun className="h-5 w-5 text-yellow-500" />
            )}
          </button>
        </div>
        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 mr-2"
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? (
              <FiMoon className="h-5 w-5 text-gray-700" />
            ) : (
              <FiSun className="h-5 w-5 text-yellow-500" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md hover:bg-gray-200"
            aria-label="Menu"
          >
            {mobileOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-sm glass"
          >
            <div className="flex flex-col space-y-2 py-4 px-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
