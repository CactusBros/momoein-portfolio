"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";
import TechStack from "./TechStack";

const HeroSection = () => {
  const router = useRouter();

  // Animation variants for the container to orchestrate the children's animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Time delay between each character animating in
        delayChildren: 0.2,
      },
    },
  };

  // Animation variants for each individual character
  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // The text part of the title, without the emoji
  const titleText = "Hi, I'm Momoein";

  return (
    <section className="bg-transparent h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center z-10">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-neutral-900 dark:text-neutral-100 leading-tight"
        >
          {/* Animate the text part */}
          {titleText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={charVariants}
              className="inline-block" // Necessary for transforms
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          {/* Animate the emoji separately after the text */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="inline-block ml-4"
          >
            👋
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-300"
        >
          I'm a passionate developer who enjoys building creative, efficient,
          and scalable solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="mt-8 flex justify-center items-center gap-4"
        >
          <ShinyButton
            text="Contact Me"
            onClick={() => router.push("#contact")}
          />
          <ShinyButton
            text="View My Projects"
            onClick={() => router.push("#projects")}
            variant="secondary"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
