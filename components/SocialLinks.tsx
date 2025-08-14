import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

// Data for social links for easier mapping
const socialLinks = [
  {
    href: 'https://github.com/your-username', // Replace with your GitHub URL
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://linkedin.com/in/your-profile', // Replace with your LinkedIn URL
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:your-email@example.com', // Replace with your email
    label: 'Email',
    icon: Mail,
  },
  {
    href: 'tel:+1234567890', // Replace with your phone number
    label: 'Phone',
    icon: Phone,
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col space-y-4 z-50">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-transform duration-300 hover:scale-110"
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
