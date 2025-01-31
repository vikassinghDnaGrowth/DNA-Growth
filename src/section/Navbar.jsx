import { useState } from "react";

const Navbar = ({
  scrollToSection,
  homeRef,
  aboutRef,
  servicesRef,
  contactRef,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b-2 border-gray-200 shadow-lg px-6 py-2 flex justify-between items-center fixed top-0 z-50 bg-white ">
      {/* Logo */}
      <div className="flex items-center">
        <img
          width="140"
          src="https://azuresqldb.blob.core.windows.net/website-data/cfo-website/DNA-Logos/DNAGrowth.png"
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex gap-10 text-xl">
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(homeRef)}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(servicesRef)}
          >
            Services
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(contactRef)}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-4 text-xl">
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(homeRef);
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(aboutRef);
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(servicesRef);
              setIsMobileMenuOpen(false);
            }}
          >
            Services
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              scrollToSection(contactRef);
              setIsMobileMenuOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
