import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousels = () => {
  const data = [
    {
      title: "We Bring Everything to Your CFO Office",
      description:
        "You don’t need to spend on a full in-house team. We give you the power of 150+ finance and tech experts, and you only pay for what you need. Scale up or down at your will.",
      titleColor: "text-blue-600",
      descriptionColor: "white",
    },
    {
      title: "2X Clients (& Growth)",
      description:
        "Fractional CFOs see their practice scale by 2x within 6-8 months. Imagine being free and confident to bring on more clients, knowing everything is handled.",
      titleColor: "text-green-600",
      descriptionColor: "white",
    },
    {
      title: "Focus on Strategy, Not Grind",
      description:
        "Free up your (& your team’s) time to help your clients grow. We’ll handle everything from basic bookkeeping to complex financial analysis & planning.",
      titleColor: "text-red-600",
      descriptionColor: "white",
    },
    {
      title: "Custom Tech Integration",
      description:
        "From Sage Intacct, Python, FathomHQ to QBO, NetSuite, we streamline and upgrade your existing tech stack so it works for you—not the other way around.",
      titleColor: "text-purple-600",
      descriptionColor: "white",
    },
    {
      title: "No More Fire Drill, Only Clarity",
      description:
        "With our proactive financial reporting and automated workflows, you’ll always have the right data, right when you need it. No scrambling.",
      titleColor: "text-orange-600",
      descriptionColor: "white",
    },
  ];

  return (
    <>
      <div className="text-3xl font-bold text-white flex justify-center bg-black py-4">
        <h1 className="  font-roboto-slab">Why Fractional CFOs Love Working with Us</h1>
      </div>
      <Carousel
        className="w-full bg-black p-4"
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={true}
        interval={5000} // Set interval for autoplay
      >
        {data.map((item, index) => (
          <div key={index} className="w-full flex justify-center min-h-[25vh]">
            <div className="flex flex-col w-full max-w-lg px-4">
              <h1
                className={`text-2xl font-bold ${item.titleColor} text-center`}
              >
                {item.title}
              </h1>
              <p
                className={`mt-2 text-lg text-${item.descriptionColor} text-center`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
