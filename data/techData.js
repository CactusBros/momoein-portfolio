import React from "react";
import { FaTerminal, FaGitAlt, FaCloud } from "react-icons/fa";
import {
  SiGo,
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiPytorch,
  SiHuggingface,
} from "react-icons/si";
import { Code2, Wrench, CloudCog, BrainCircuit } from "lucide-react";

export const techStackData = [
  {
    category: "Languages",
    icon: Code2,
    items: [
      { name: "Go", icon: <SiGo className="text-cyan-400" /> },
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Shell", icon: <FaTerminal className="text-gray-400" /> },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-indigo-400" />,
      },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: CloudCog,
    items: [
      {
        name: "GitHub Actions",
        icon: <SiGithubactions className="text-sky-400" />,
      },
      { name: "CI/CD", icon: <FaCloud className="text-green-400" /> },
    ],
  },
  {
    category: "AI Tools",
    icon: BrainCircuit,
    items: [
      { name: "PyTorch", icon: <SiPytorch className="text-orange-400" /> },
      {
        name: "Hugging Face",
        icon: <SiHuggingface className="text-yellow-300" />,
      },
    ],
  },
];
