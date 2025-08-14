// src/components/SocialLinks.tsx
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const socialLinks = [
  { href: "https://github.com/yourusername", icon: Github },
  { href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { href: "https://twitter.com/yourusername", icon: Twitter },
];

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: FC<SocialLinksProps> = ({ className }) => {
  return (
    <nav className={`fixed top-5 left-4 ${className}`}>
      <div className="flex flex-row gap-4 md:flex-col">
        {socialLinks.map((link, index) => (
          <Link href={link.href} key={index} target="_blank">
            <link.icon className="w-6 h-6 text-neutral-500 hover:text-black dark:hover:text-white transition-colors" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SocialLinks;
