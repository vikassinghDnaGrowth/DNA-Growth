import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tech from "../assets/tech.jpg";
import Reducecost from "../assets/Reducecost.jpg";
import focusOnStrategy from "../assets/focusOnStrategy.jpg";
import DataClarity from "../assets/DataClarity.jpg";

const dummyData = [
  {
    title: "Tech Transformation",
    description:
      "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
    image: tech,
  },
  {
    title: "Digital Innovation",
    description:
      "Implementing digital solutions can enhance productivity and streamline operations.",
    image: Reducecost,
  },
  {
    title: "Financial Strategies",
    description:
      "Optimize your financial strategy with expert guidance and tailored solutions.",
    image: focusOnStrategy,
  },
  {
    title: "Data Clarity",
    description: "Gain insights and clarity through effective data management.",
    image: DataClarity,
  },
];

const Help = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33); // default for larger screens

  const handleResize = () => {
    if (window.innerWidth <= 640) {
      setCenterSlidePercentage(100); // 100% for screens smaller than 640px
    } else if (window.innerWidth <= 1040) {
      setCenterSlidePercentage(50); // 50% for intermediate screen sizes
    } else {
      setCenterSlidePercentage(33.33); // 33.33% for larger screens
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-6">
      <h1 className="text-lg md:text-3xl font-bold text-customBlue md:mb-8 text-center">
        How We’ve Helped Fractional CFOs Across Industrial & Geographical
        Boundaries Succeed ?
      </h1>

      <Carousel
        showIndicators={false}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        className="w-full"
        centerMode
        centerSlidePercentage={centerSlidePercentage} // use dynamic value
      >
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg p-6 m-4 bg-green-300 transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            <div className="w-full mb-4">
              <img
                src={item.image}
                alt={`Image for ${item.title}`}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <h2 className="text-2xl font-bold text-customBlue mb-2 text-center">
              {item.title}
            </h2>
            <p className="text-base text-black text-center">
              {item.description}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Help;
