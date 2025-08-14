"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStackData } from "../data/techData"; // Adjust the import path as needed

const TechStack = () => {
  // Animation variants for the container of the pills
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Time delay between each pill animating in
      },
    },
  };

  // Animation variants for each individual pill
  const pillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
  };

  return (
    <section
      id="tech-stack"
      className="bg-transparent py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-12">
          My Tech Stack
        </h2>
        <div className="space-y-10">
          {techStackData.map(({ category, icon: CategoryIcon, items }) => (
            <div key={category}>
              <h3 className="flex items-center font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-5">
                <CategoryIcon className="w-7 h-7 mr-4 text-neutral-500" />
                {category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }} // Animate once when 20% of the element is in view
              >
                {items.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    variants={pillVariants}
                    className="flex items-center bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-neutral-300 dark:hover:border-neutral-600"
                  >
                    {React.cloneElement(icon, {
                      className: `${icon.props.className} w-6 h-6 mr-3`,
                    })}
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
