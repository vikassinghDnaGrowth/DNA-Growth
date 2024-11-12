import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { PiCity } from "react-icons/pi";

const Card = ({ city, address, phone, email, flag, bgColor }) => {
  return (
    <div
      className="shadow-lg shadow-gray-800 text-black min-h-56 rounded-lg p-4 flex flex-col justify-between group" // group to enable group-hover
      style={{ backgroundColor: bgColor }} // Set the background color initially
    >
      <div className="flex gap-4 py-2">
        <img src={flag} alt={`${city} flag`} className="w-8 h-auto" />
        <h2 className="text-xl font-bold"> {city}</h2>
      </div>
      <div className="flex gap-4 pb-2">
        <span>
          <PiCity className="text-2xl text-black" />
        </span>
        <p>{address}</p>
      </div>
      <div className="flex gap-4 pb-2">
        <span>
          <MdPhoneIphone className="text-2xl text-green-600" />
        </span>
        <p>{phone}</p>
      </div>
      <div className="flex gap-4 pb-2 flex-wrap ">
        <span>
          <MdOutlineEmail className="text-2xl text-red-500" />
        </span>
        <p className="flex">{email}</p>
      </div>

      {/* Tailwind CSS hover effect: Change bg color when hovered */}
      <style jsx>{`
        .group:hover {
          background-color: red !important; /* Override the initial bgColor */
        }
      `}</style>
    </div>
  );
};

export default Card;
