// import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-gray-200 shadow-lg px-6 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img width="140" src="src/assets/DNAGrowth.png" alt="logo" />
      </div>
      <div>
        <ul className="flex justify-center gap-10 text-xl ">
          <li >Home</li>
          <li >About</li>
          <li >Services</li>
          <li >Contact</li>
        </ul>
      </div>
      <button className="border-2 bg-custom-gradient px-6 py-2  text-white text-xl rounded-lg">
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
