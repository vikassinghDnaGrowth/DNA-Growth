import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const dummyData = [
  {
    title: "Tech Transformation",
    description:
      "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
    videoUrl: "https://www.youtube.com/embed/Y1o2l-ASz1g?si=zQzwRHHsCVSLXQyJ", // Replace with actual video URLs
  },
  {
    title: "Digital Innovation",
    description:
      "Implementing digital solutions can enhance productivity and streamline operations.",
    videoUrl: "https://www.youtube.com/embed/Me4unvsjm-c?si=vIinyPBlZe-aLJz_", // Replace with actual video URLs
  },
  {
    title: "Financial Strategies",
    description:
      "Optimize your financial strategy with expert guidance and tailored solutions.",
    videoUrl: "https://www.youtube.com/embed/ilIta3qkoqY?si=_rHxDUQHbl0XQCkk", // Replace with actual video URLs
  },
  {
    title: "Data Clarity",
    description: "Gain insights and clarity through effective data management.",
    videoUrl: "https://www.youtube.com/embed/FbYd78gDdEw?si=f9k-QSqJF7_9nT44", // Replace with actual video URLs
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
    <div className="w-full flex flex-col justify-center items-center py-6 bg-[#000000]">
      <h1 className="text-lg md:text-3xl font-bold text-white md:mb-8 text-center p-2">
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
            className=" flex flex-col items-center rounded-lg p-4 m-4   border-2 border-gray-500     transition-transform duration-300 ease-in-out transform hover:scale-105  "
          >
            <div className="w-full mb-4 ">
              {/* Render video iframe instead of image */}
              <iframe
                width="100%"
                src={item.videoUrl}
                title={`Video for ${item.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-64 object-cover rounded-md"
              ></iframe>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              {item.title}
            </h2>
            <p className="text-base text-white text-center">
              {item.description}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Help;
