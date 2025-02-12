import { useState, useCallback } from "react";

const Navbar = ({ homeRef, aboutRef, servicesRef, contactRef }) => {
  console.log("Navbar rendered");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useCallback to memoize the scrollToSection function to avoid unnecessary re-renders
  const memoizedScrollToSection = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  return (
    <nav className="w-full border-b-2 border-gray-200 shadow-lg px-6 py-2 flex justify-between items-center sticky top-1 z-50  bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-[70%] h-[50%] aspect-auto"
          src="https://azuresqldb.blob.core.windows.net/dna-website/dna-logos/DNAGrowth-min.png "
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-grow items-center justify-center">
        <ul className="flex gap-10 text-xl">
          <li
            className="cursor-pointer"
            onClick={() => memoizedScrollToSection(homeRef)}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => memoizedScrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => memoizedScrollToSection(servicesRef)}
          >
            Services
          </li>
          <li
            className="cursor-pointer"
            onClick={() => memoizedScrollToSection(contactRef)}
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
              memoizedScrollToSection(homeRef);
              setIsMobileMenuOpen(false);
            }}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              memoizedScrollToSection(aboutRef);
              setIsMobileMenuOpen(false);
            }}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              memoizedScrollToSection(servicesRef);
              setIsMobileMenuOpen(false);
            }}
          >
            Services
          </li>
          <li
            className="cursor-pointer"
            onClick={() => {
              memoizedScrollToSection(contactRef);
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
