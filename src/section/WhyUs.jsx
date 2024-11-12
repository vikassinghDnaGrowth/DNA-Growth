import React from "react";
import tech from "../assets/tech.jpg";
import Reducecost from "../assets/Reducecost.jpg";
import focusOnStrategy from "../assets/focusOnStrategy.jpg";
import doubleCients from "../assets/doubleCients.jpg";
import DataClarity from "../assets/DataClarity.jpg";

const WhyUs = () => {
  const Data = [
    {
      image: tech,
      title: "Cut Your Costs by ∼50%",
      description:
        "You don’t need to spend on a full in-house team. We give you the power of 150+ finance and tech experts, and you only pay for what you need. Scale up or down at your will.",
    },
    {
      image: Reducecost,
      title: "2X Clients (& Growth)",
      description:
        "Fractional CFOs see their practice scale by 2x within 6-8 months. Imagine being free and confident to bring on more clients, knowing everything is handled.",
    },
    {
      image: focusOnStrategy,
      title: "Focus on Strategy, Not Grind",
      description:
        "Free up your (& your team’s) time to help your clients grow. We’ll handle everything from basic bookkeeping to complex financial analysis & planning.",
    },
    {
      image: doubleCients,
      title: "Custom Tech Integration",
      description:
        "From Sage Intacct, Python, FathomHQ to QBO, NetSuite, we streamline and upgrade your existing tech stack so it works for you—not the other way around.",
    },
    {
      image: DataClarity,
      title: "No More Fire Drill, Only Clarity",
      description:
        "With our proactive financial reporting and automated workflows, you’ll always have the right data, right when you need it. No scrambling.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100">
      <div className="w-full mb-2 md:mb-8 text-center">
        <h3 className="text-lg md:text-3xl font-bold md:p-4">
          Why Fractional CFOs Love Working with Us ?
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          {Data.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 shadow-xl rounded-lg p-4 h-full flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center Card */}
        <div className="border-2 border-gray-200 shadow-xl rounded-lg p-4 h-full flex flex-col items-center justify-center">
          <img
            src={Data[2].image}
            alt={Data[2].title}
            className="h-64 w-full object-cover mb-4"
          />
          <h4 className="text-lg font-semibold">{Data[2].title}</h4>
          <p className="text-gray-600">{Data[2].description}</p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          {Data.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 shadow-xl rounded-lg p-4 h-full flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
