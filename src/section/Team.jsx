import React, { useState } from "react";
import avatar from "../assets/avtar.avif";

const teamMembers = [
  {
    name: "Akshay Jain",
    title: "Managing Director, DNA Growth",
    description: `Akshay Jain is the Founder and Managing Director of DNA Growth, a pioneering Business and Financial Planning Organization operational in the US, Canada, Dubai, and India (30+ countries). With a cross-functional team of 150+ experts made up of highly experienced CFOs, controllers, FP&A specialists, and financial consultants, Jain is able to streamline and deliver a finance & analytics capability that propels organizations to achieve their goals and beyond. He holds a postgraduate degree in Finance and Financial Management Services from The Institute of Chartered Accountants of India. With 12+ years of experience in business and financial consulting, his vision is to be clients’ trusted partners in sustainable long-term growth. Jain is further associated with The Seed Transformation Program (STP) by Stanford’s Graduate School of Business.`,
  },
  {
    name: "Ishpreet Kaur Khanuja",
    title: "FP&A Head",
    description: `Ishpreet brings over 10 years of progressive experience in financial planning & analysis (FP&A), operations, and product management across diverse industries. As Head of FP&A at DNA Growth, she has a proven track record of driving significant improvements in financial performance and operational efficiency for global clients, especially D2C. Her expertise lies in Financial Data Management, Strategic Budgeting & Forecasting, and Analytics to guide business decisions and ensure financial well-being. Previously, she worked for Deloitte and Thomson Reuters, specializing in revenue and pipeline analysis, performance management reporting, and sales review analysis for the Middle East.`,
  },
  {
    name: "Gurvinder Singh",
    title: "FP&A Head",
    description: `Gurvinder Singh has over 9 years of experience in financial planning, analysis, sales, and e-commerce. He started as an Equity Research Analyst and later co-founded and scaled an e-commerce venture, achieving a profitable exit. As Sales Head of a D2C startup, he expanded operations and significantly grew the business. At DNA Growth, he specializes in FP&A and business consultancy for e-commerce and SaaS industries, optimizing financial metrics and strategic planning. Gurvinder's technical expertise includes financial modelling, budgeting, forecasting, and valuation across various sectors, including technology and service companies. He holds an MBA in Finance from IBS Business School, Mumbai, bringing a blend of strategic insight and operational expertise to his role.`,
  },
  {
    name: "Anuj",
    title: "Head of Finance",
    description: `Anuj Bhushan is a seasoned finance professional with 11 years of experience in financial modeling, corporate strategy, and project management. As Manager of Finance at DNA Growth, he leads a team that delivers financial due diligence, models, and budgets for clients across various industries, including tech, pharma, and manufacturing. Anuj's previous roles included strategic advisory and financial management at PricewaterhouseCoopers and ICRA Analytics, where he provided regulatory and policy advisory to state utilities and public sector units. He holds an MBA in Finance from Xavier Institute of Management Bhubaneswar and a B.Tech in Electrical & Electronics Engineering from Kalinga Institute of Industrial Technology. Anuj combines technical expertise with solid business acumen to drive well-planned and strategic initiatives.`,
  },
];

const TeamCard = ({ member }) => {
  const { name, title, description } = member; // Destructure for better readability
  const [isExpanded, setIsExpanded] = useState(false); // State to manage description visibility

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-2 border-gray-500 w-full md:w-5/12 flex flex-col items-center rounded-lg p-4 relative mb-8">
      <div className="flex justify-center mb-4 absolute -top-10">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-1/4 md:w-3/12 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center mb-2 text-center pt-14">
        <h1 className="text-xl md:text-2xl">{name}</h1>
        <p className="text-sm md:text-lg">({title})</p>
      </div>
      <div className="flex justify-between w-full">
        <p className="text-xs md:text-sm">
          {isExpanded ? description : `${description.substring(0, 100)}...`}{" "}
          {/* Show truncated description */}
        </p>
      </div>
      <button
        onClick={toggleDescription}
        className="mt-2 text-blue-600 underline text-xs md:text-sm"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex gap-2 justify-center">
        <div className="w-2/12 bg-green-300 flex justify-center items-center">
          <h1 className="-rotate-90 text-4xl md:text-7xl font-semibold text-customBlue font-roboto-slab text-nowrap">
            Meet Our Team
          </h1>
        </div>
        <div className="w-10/12 pt-12 flex justify-center flex-wrap p-4 gap-4 bg-green-400">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
