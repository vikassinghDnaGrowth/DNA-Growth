import React from "react";

const WhyUs = () => {
  // Static data as an array of objects
  const Data = [
    {
      title: "Cut Your Costs by ∼50%",
      description:
        "You don’t need to spend on a full in-house team. We give you the power of 150+ finance and tech experts, and you only pay for what you need. Scale up or down at your will.",
    },
    {
      title: "2X Clients (& Growth)",
      description:
        "Fractional CFOs see their practice scale by 2x within 6-8 months. Imagine being free and confident to bring on more clients, knowing everything is handled.",
    },
    {
      title: "Focus on Strategy, Not Grind",
      description:
        "Free up your (& your team’s) time to help your clients grow. We’ll handle everything from basic bookkeeping to complex financial analysis & planning.",
    },
    {
      title: "Custom Tech Integration",
      description:
        "From Sage Intacct, Python, FathomHQ to QBO, NetSuite, we streamline and upgrade your existing tech stack so it works for you—not the other way around.",
    },
    {
      title: "No More Fire Drill, Only Clarity",
      description:
        "With our proactive financial reporting and automated workflows, you’ll always have the right data, right when you need it. No scrambling.",
    },
  ];

  return (
    <div className="w-full  bg-customBlue p-4 ">
      <div className="w-full flex justify-between my-2">
        <h3 className="text-3xl font-bold text-white w-3/12">
          Why Fractional CFOs Love Working with Us
        </h3>
        <div className="flex flex-col w-3/12 items-center text-white ">
          <p className="text-sm font-bold border-2 border-white text-white text-center p-2 rounded-lg">
            Save Up To 100 Hrs/Month
          </p>
          <p className="my-4">
            <span className="font-bold text-red-600">Warning:</span> This will
            make your life a lot easier
          </p>
        </div>
      </div>

      <div className="flex   gap-4 my-6 p-6 rounded-xl justify-around border-2 border-white shadow-2xl">
        {Data.map((item, index) => (
          <div key={index} className="text-white w-2/12">
            <h4 className="pb-4 text-md font-roboto-slab text-yellow-300  h-14">
              {item.title}
            </h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
