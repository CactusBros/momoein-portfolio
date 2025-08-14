"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectData"; // Adjust the import path as needed

const ProjectsSection = () => {
  // Animation variants for the container to orchestrate the children's animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each card animating in
      },
    },
  };

  // Animation variants for each individual project card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="projects"
      className="bg-transparent py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-bold text-neutral-800 dark:text-neutral-200 mb-12">
          Featured Projects
        </h2>
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projectsData.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
