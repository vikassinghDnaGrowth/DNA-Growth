import React from "react";

const Card = ({ address, phone, email, city }) => {
  return (
    <div className="w-[300px] border-2 border-slate-900 rounded-xl flex flex-col p-4 ">
      <p className="font-bold">{city}</p>
      <ul className="text-sm list-disc pl-5">
        <li>{address}</li>
        <li>Phone: {phone}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
};

export default Card;
