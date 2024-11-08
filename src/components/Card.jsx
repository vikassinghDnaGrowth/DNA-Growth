import React from "react";

const Card = ({ city, address, phone, email, flag, bgColor }) => {
  return (
    <div
      className="border border-black rounded-lg shadow-2xl p-4 min-h-[32vh] hover:scale-105 transform duration-300 "
      style={{ backgroundColor: bgColor }} // Apply dynamic background color here
    >
      <div className="flex gap-4 py-2">
        <img src={flag} alt={`${city} flag`} className="w-8 h-auto" />
        <h2 className="text-xl font-bold">{city}</h2>
      </div>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
