"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  // This function now safely renders the theme toggle button only on the client.
  const renderThemeChanger = () => {
    // While not mounted, render a placeholder or null to avoid the mismatch.
    if (!mounted) {
      return <div className="w-6 h-6" />;
    }

    if (theme === 'dark') {
      return (
        <Sun
          className="w-6 h-6 text-yellow-400 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <Moon
          className="w-6 h-6 text-gray-700 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return (
    <nav className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm w-full fixed top-0 left-0 z-50 border-b border-gray-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-4">{renderThemeChanger()}</div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {renderThemeChanger()}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-neutral-700 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
