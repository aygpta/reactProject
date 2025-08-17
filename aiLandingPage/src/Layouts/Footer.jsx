"use client";

import * as React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#000000] border-t border-neutral-800 text-neutral-300">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo / About */}
      <div>
        <h2 className="text-xl font-semibold text-white">Ayush Gupta</h2>
        <p className="mt-3 text-sm text-neutral-400">
          Passionate about building smart web applications and scalable digital
          solutions. Always learning & experimenting with new technologies.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
          Quick Links
        </h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
          Contact
        </h3>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:ayushgupta.dev@gmail.com"
              className="hover:text-white transition-colors"
            >
              ayushgupta.dev@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a
              href="tel:+919999999999"
              className="hover:text-white transition-colors"
            >
              +91 99999 99999
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Lucknow, Uttar Pradesh, India</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-12 border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-neutral-500">
      <p>© {new Date().getFullYear()} Ayush Gupta. All rights reserved.</p>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <a href="/privacy" className="hover:text-white transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-white transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</footer>

  );
}
