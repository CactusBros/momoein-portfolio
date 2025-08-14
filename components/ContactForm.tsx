"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ShinyButton from "./ShinyButton";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    // In a real application, you would send this data to an API endpoint.
    console.log({ name, email, message });

    // Simulate an API call
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus(""), 3000); // Clear status after 3 seconds
    }, 1000);
  };

  // Animation variants for the form elements
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-16"
    >
      {/* Left Column: Title and Description */}
      <div className="w-full md:w-1/2 text-center md:text-left md:pt-6">
        <motion.h2
          variants={formVariants}
          className="text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-200 leading-tight"
        >
          Come Say Hello
        </motion.h2>
        <motion.p
          variants={formVariants}
          className="mt-4 text-lg text-neutral-600 dark:text-neutral-400"
        >
          I'm always open to new ideas and collaborations. I would love to hear
          from you!
        </motion.p>
      </div>

      {/* Right Column: Form */}
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div variants={formVariants}>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </motion.div>
          <motion.div variants={formVariants}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </motion.div>
          <motion.div variants={formVariants}>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md shadow-sm focus:outline-none focus:ring-neutral-500 focus:border-neutral-500"
            />
          </motion.div>
          <motion.div
            variants={formVariants}
            className="text-center md:text-left pt-2"
          >
            <ShinyButton type="submit" text="Send Message" variant="primary" />
          </motion.div>
          {status && (
            <p className="text-center md:text-left text-sm text-neutral-600 dark:text-neutral-400 mt-4">
              {status}
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
