import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <div className="bg-white/90 dark:bg-[#3B2B36]/90 backdrop-blur px-6 py-3 rounded-full flex space-x-6 items-center">
        {[
          { href: '#hero', text: 'About' },
          { href: '#projects', text: 'Projects' },
          { href: '#services', text: 'Services' },
          { href: '#contact', text: 'Contact' },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#5C3B4E] dark:text-[#F0E6EB] hover:text-[#F8B0C8] dark:hover:text-[#C980A0] transition font-medium"
          >
            {link.text}
          </a>
        ))}

        <ThemeToggle />
      </div>
    </nav>
  );
}
