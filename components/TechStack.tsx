"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { techStackData } from "../data/techData";

const TechStack = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const pillVariants: Variants = {
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
        {/* 1. Stacks vertically on mobile, becomes a grid on large screens */}
        <div className="space-y-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {techStackData.map(({ category, icon: CategoryIcon, items }) => (
            <div key={category}>
              <h3 className="flex items-center font-semibold text-xl text-neutral-700 dark:text-neutral-300 mb-5">
                <CategoryIcon className="w-7 h-7 mr-4 text-neutral-500" />
                {category}
              </h3>
              {/* 2. A wrapping row on mobile, becomes a vertical column on large screens */}
              <motion.div
                className="flex flex-wrap gap-3 lg:flex-col lg:gap-0 lg:space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                {items.map(({ name, icon }) => (
                  <motion.div
                    key={name}
                    variants={pillVariants}
                    className="flex items-center bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 px-4 py-2 rounded-lg shadow-sm"
                  >
                    {React.cloneElement(icon, {
                      className: [icon.props.className, "w-6 h-6 mr-3"]
                        .filter(Boolean)
                        .join(" "),
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
