"use client"; // Add this because useRouter is a client hook

import { useRouter } from "next/navigation";
import ShinyButton from "./ShinyButton"; // Import the button component
import TechStack from "./TechStack";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="bg-transparent h-[75vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center z-10">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-neutral-900 dark:text-neutral-100 leading-tight">
          Hi, I'm Momoein 👋
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-300">
          I'm a passionate developer who enjoys building creative, efficient,
          and scalable solutions
        </p>

        {/* Buttons Container */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <ShinyButton
            text="Contact Me"
            onClick={() => router.push("#contact")}
          />
          <ShinyButton
            text="View My Projects"
            onClick={() => router.push("#projects")}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
