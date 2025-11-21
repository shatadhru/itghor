'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: undefined },
        { name: 'Our Story', href: '/story', icon: undefined },
        { name: 'Careers', href: '/careers', icon: undefined },
        { name: 'Press', href: '/press', icon: undefined },
        { name: 'Blog', href: '/blog', icon: undefined },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { name: 'Premium Homes', href: '/premium-homes', icon: undefined },
        { name: 'Luxury Apartments', href: '/luxury-apartments', icon: undefined },
        { name: 'Commercial Spaces', href: '/commercial', icon: undefined },
        { name: 'Property Management', href: '/management', icon: undefined },
        { name: 'Consultation', href: '/consultation', icon: undefined },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help', icon: undefined },
        { name: 'Contact Us', href: '/contact', icon: undefined },
        { name: 'FAQs', href: '/faqs', icon: undefined },
        { name: 'Terms of Service', href: '/terms', icon: undefined },
        { name: 'Privacy Policy', href: '/privacy', icon: undefined },
      ],
    },
    connect: {
      title: 'Connect',
      links: [
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
        { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
        { name: 'Instagram', href: 'https://instagram.com', icon: '📷' },
        { name: 'Facebook', href: 'https://facebook.com', icon: '👥' },
      ],
    },
  };

  const toggleSection = (section :any) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer
      className={`bg-[#020202] text-white transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Branding Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <Image
                src="/itghor.png"
                alt="Model"
                width={350}
                height={350}
                style={{
                  objectFit: "contain",
                }}
                priority
                className="z-20"
              />{" "}
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              It Ghor .com
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Redefining luxury living through innovative design and exceptional
            service.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="font-semibold text-white text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center space-x-2 text-gray-400 hover:text-[#006FEE] transition-all duration-300 text-sm"
                      >
                        {link.icon && <span>{link.icon}</span>}
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#006FEE] transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="border-b border-gray-800">
              <button
                onClick={() => toggleSection(key)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-white">
                  {section.title}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openSection === key ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openSection === key && (
                <div className="pb-4 animate-fadeIn">
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block py-2 text-gray-400 hover:text-[#006FEE] transition-colors duration-300 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-semibold text-white mb-3 text-lg">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#006FEE] transition-colors duration-300 text-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#006FEE] to-[#006FEE] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#006FEE]/25 transition-all duration-300 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} It Ghor .com. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-[#006FEE] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-[#006FEE] transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-[#006FEE] transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;