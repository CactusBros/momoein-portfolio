"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import ShinyButton from "./ShinyButton";

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
};

const ProjectCard = ({
  imageUrl,
  title,
  description,
  techStack,
  liveUrl,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-neutral-300 dark:hover:border-neutral-700">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={`${title} preview`}
          width={400}
          height={225}
          className="rounded-lg object-cover w-full h-auto"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x225/e2e8f0/e2e8f0?text=Image";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between h-full w-full md:w-2/3">
        <div>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            {title}
          </h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>

          {/* Tech Stack Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <ShinyButton
            text="Visit Page"
            variant="secondary"
            size="sm"
            onClick={() => router.push(liveUrl)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
