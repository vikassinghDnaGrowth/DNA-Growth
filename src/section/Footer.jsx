import { memo } from "react";
import logo from "../assets/DNA Logo (White).png";
const Footer = memo(() => {
  console.log("Footer rendered");
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-10" loading="lazy"/>
          </div>

          {/* Links */}
          <div className=" flex w-full justify-around md:flex md:justify-end md:gap-6">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-400">
          &copy; 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

export default Footer;
