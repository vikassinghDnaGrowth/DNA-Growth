import React, { useState } from "react";
// You can import the Link component from "react-router-dom" to enable routing if necessary.

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b-2 border-gray-200 shadow-lg px-6 py-2 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img width="140" src="src/assets/DNAGrowth.png" alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex gap-10 text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <span>&times;</span> // Close icon (X)
        ) : (
          <span>&#9776;</span> // Hamburger icon
        )}
      </button>

      {/* Mobile Menu (hidden by default) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-xl">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>

     
    </nav>
  );
};

export default Navbar;
