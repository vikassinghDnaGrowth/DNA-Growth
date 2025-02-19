import { useState, useCallback, useMemo } from "react";
import avatar from "../assets/avtar.avif";
import anuj from "../assets/team/anuj bhushan.jpg";
import gurvinder from "../assets/team/Gurvinder Singh-2024.jpg";
import ip from "../assets/team/IP Image.png";
import React from "react";

// Data for team members
const teamMembers = [
  {
    name: "Akshay Jain",
    title: "Managing Director & Founder, DNA Growth",
    description: `Akshay Jain is the Founder and Managing Director of DNA Growth, a
pioneering Business and Financial Planning Organization operational in the
US, Canada, Dubai, and India (30+ countries). With a cross-functional team
of 150+ experts made up of highly experienced CFOs, controllers, FP&A
specialists, and financial consultants, Jain is able to streamline and deliver a
finance & analytics capability that propels organizations to achieve their
goals and beyond.
He holds a postgraduate degree in Finance and Financial Management
Services from The Institute of Chartered Accountants of India. With 12+ years
of experience in business and financial consulting, his vision is to be clients’ 
trusted partners in sustainable long-term growth. Jain is further associated
with The Seed Transformation Program (STP) by Stanford’s Graduate School
of Business.`,
    image: "https://www.dnagrowth.com/wp-content/uploads/2020/07/dsfsdfs.gif",
  },
  {
    name: "Ishpreet Kaur Khanuja",
    title: "VP of Finance",
    description: `Ishpreet brings over 10 years of progressive experience in financial planning & analysis (FP&A), operations, and product management across diverse industries. As Head of FP&A at DNA Growth, she has a proven track record of driving significant improvements in financial performance and operational efficiency for global clients, especially D2C.

Her expertise lies in Financial Data Management, Strategic Budgeting & Forecasting, and Analytics to guide business decisions and ensure financial well-being. Previously, she worked for Deloitte and Thomson Reuters, specializing in revenue and pipeline analysis, performance management reporting, and sales review analysis for the Middle East.`,
    image: ip,
  },
  {
    name: "Gurvinder Singh",
    title: "FP&A Head",
    description: `Gurvinder Singh has over 9 years of experience in financial planning, analysis, sales, and e-commerce. He started as an Equity Research Analyst and later co-founded and scaled an e-commerce venture, achieving a profitable exit. As Sales Head of a D2C startup, he expanded operations and significantly grew the business. At DNA Growth, he specializes in FP&A and business consultancy for e-commerce and SaaS industries, optimizing financial metrics and strategic planning. Gurvinder's technical expertise includes financial modelling, budgeting, forecasting, and valuation across various sectors, including technology and service companies. He holds an MBA in Finance from IBS Business School, Mumbai, bringing a blend of strategic insight and operational expertise to his role.`,
    image: gurvinder,
  },
  {
    name: "Anuj Bhushan",
    title: "Head of Finance",
    description: `Anuj Bhushan is a seasoned finance professional with 11 years of experience in financial modeling, corporate strategy, and project management. As Manager of Finance at DNA Growth, he leads a team that delivers financial due diligence, models, and budgets for clients across various industries, including tech, pharma, and manufacturing.

Anuj's previous roles included strategic advisory and financial management at PricewaterhouseCoopers and ICRA Analytics, where he provided regulatory and policy advisory to state utilities and public sector units. He holds an MBA in Finance from Xavier Institute of Management Bhubaneswar and a B.Tech in Electrical & Electronics Engineering from Kalinga Institute of Industrial Technology. Anuj combines technical expertise with solid business acumen to drive well-planned and strategic initiatives.`,
    image: anuj,
  },
];

const TeamCard = React.memo(({ member }) => {
  const { name, title, description, image } = member;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const shortDescription = useMemo(
    () => description.substring(0, 100) + "...",
    [description]
  );

  return (
    <div className="border-2 border-gray-700 sm:rounded-full rounded-3xl hover:text-white text-black flex flex-col items-center py-10 w-10/12 lg:w-10/12 md:w-8/12 hover:bg-[rgb(22,103,161)] transition-all duration-700 relative">
      <div className="flex justify-center mb-4 absolute sm:static -top-[16%] sm:-top-0">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full" // Set both width and height to the same value
        />
      </div>

      <div className="flex flex-col items-center mb-2 text-center px-2 pt-10 sm:pt-0">
        <h1 className="text-lg mb-2 font-semibold">{name}</h1>
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="flex justify-center p-4 w-full">
        <p className="text-sm">{shortDescription}</p>
      </div>
      <button
        onClick={openModal}
        className="mt-2 underline text-xs md:text-sm text-customBlue"
      >
        Read More
      </button>

      {/* Modal for full description */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg w-10/12 md:w-1/3 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-customBlue">{name}</h2>
              <button
                onClick={closeModal}
                className="text-lg font-bold text-white"
                aria-label="Close modal"
              >
                X
              </button>
            </div>
            <p className="mt-4 text-gray-700 font-semibold">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
});
TeamCard.displayName = "TeamCard";

const Team = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      <div className="w-full flex sm:flex-row flex-col gap-2 justify-around">
        <div className="w-full sm:w-2/12 lg:w-1/12 flex justify-center items-center">
          <h1 className="sm:-rotate-90 pb-16 sm:pb-0 text-4xl sm:text-5xl md:text-6xl font-semibold text-[rgb(22,103,161)] font-roboto-slab text-nowrap mb-6 sm:mb-0">
            Meet Our Team
          </h1>
        </div>
        <div className="w-full sm:w-8/12 gap-20 sm:gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-transparent justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
