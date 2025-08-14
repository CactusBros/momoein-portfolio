"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion"; // 1. Import Variants type
import ShinyButton from "./ShinyButton";
import dynamic from "next/dynamic";

// Disable SSR for Arcaptcha widget
const ArcaptchaWidget = dynamic(
  () => import("arcaptcha-react").then((mod) => mod.ArcaptchaWidget),
  { ssr: false }
);

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);
  const [siteKey, setSiteKey] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
    fetch("/api/captcha/sitekey", { method: "GET"})
      .then((res) => res.json())
      .then((data) => {
        setSiteKey(data.siteKey);
        console.log("captcha sitekey: ", data.siteKey);
      }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (siteKey && !captchaToken) {
      setStatus("Please complete the captcha.");
      return;
    }

    setStatus("Sending...");

    try {
      if (siteKey) {
        const res = await fetch("/api/captcha", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
            "arcaptcha-token": captchaToken, // send token to server
          }),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Something went wrong");
      }
    
      setStatus("Form submitted successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaToken(undefined);
    } catch (err: any) {
      setStatus(err.message);
    }
  };

  // 2. Apply the Variants type
  const formVariants: Variants = {
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
          I&apos;m always open to new ideas and collaborations. I would love to
          hear from you!
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

          {/* Captcha */}
          {isClient && siteKey ? (
            <ArcaptchaWidget
              site-key={siteKey}
              callback={(token?: string) => setCaptchaToken(token)}
              theme="dark"
              lang="en"
            />
          ) : null}

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
