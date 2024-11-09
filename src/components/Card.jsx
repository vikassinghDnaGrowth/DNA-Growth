import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FcPhone } from "react-icons/fc";
// import { FaRegFlag } from "react-icons/fa";
import { PiCity } from "react-icons/pi";
const Card = ({ city, address, phone, email, flag, bgColor }) => {
  return (
    <div
      className="border border-black rounded-lg shadow-2xl p-4 min-h-[32vh] hover:scale-105 transform duration-300 group" // Add 'group' class
      style={{ backgroundColor: bgColor }} // Apply dynamic background color here
    >
      <div className="flex gap-4 py-2">
        <img src={flag} alt={`${city} flag`} className="w-8 h-auto" />
        <h2 className="text-xl font-bold"> {city}</h2>
      </div>
      <div className="flex gap-4">
        <span>
          <PiCity className="text-2xl text-red-500" />
        </span>
        <p>{address}</p>
      </div>
      <div className="flex gap-4">
        <span>
          <FcPhone className="text-2xl text-red-500" />
        </span>
        <p>{phone}</p>
      </div>
      <div className="flex gap-4">
        <span>
          <MdOutlineEmail className="text-2xl text-red-500" />
        </span>
        <p>{email}</p>
      </div>

      {/* Apply the hover effect */}
      <style jsx>{`
        .group:hover {
          background-color: white !important; /* Override dynamic bgColor */
        }
      `}</style>
    </div>
  );
};

export default Card;
