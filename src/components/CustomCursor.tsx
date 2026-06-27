"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth movement
  const dotSpringConfig = { damping: 40, stiffness: 800, mass: 0.2 };
  const ringSpringConfig = { damping: 30, stiffness: 150, mass: 0.8 };

  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("interactive")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    // Hide standard cursor on screens wider than mobile
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      document.body.style.cursor = "none";
    }

    const handleResize = () => {
      if (mediaQuery.matches) {
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-pastel-lavender rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0.6 : 1,
          backgroundColor: hovered ? "#FFB6C1" : "#E6E6FA", // Pink on hover, Lavender default
        }}
      />
      {/* Outer Lagging Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-pastel-lavender/50 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.6 : 1,
          borderColor: hovered ? "#FFB6C1" : "rgba(230, 230, 250, 0.5)",
          borderWidth: hovered ? "1.5px" : "1px",
        }}
      />
    </>
  );
}
