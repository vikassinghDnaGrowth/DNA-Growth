// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Carousels = () => {
//   const data = [
//     {
//       title: "Tech tranformation",
//       description:
//         "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
//       titleColor: "text-white",
//       descriptionColor: "white",
//     },
//     {
//       title: "Saas supremacy",
//       description:
//         "A Frac. SaaS CFO shaved >100 hours a month off his workload, letting him focus on raising $20M in Series B funding for his client.",
//       titleColor: "text-white",
//       descriptionColor: "white",
//     },
//     {
//       title: "Professional services Success",
//       description:
//         "After automating their financial processes with us, a Fractional CFO saved $500K annually for their e-commerce client, boosting retention and profitability.",
//       titleColor: "text-white",
//       descriptionColor: "white",
//     },
//   ];

//   return (
//     <>
//       <div className="text-xl md:text-4xl font-roboto-slab leading-normal font-bold  flex justify-center bg-[#3c005a] py-10 px-2">
//         <h1 className="  font-roboto-slab text-center capitalize  text-white">
//           How We’ve Helped Fractional CFOs Across Industrial & geographical
//           boundaries Succeed?
//         </h1>
//       </div>
//       <Carousel
//         className="w-full bg-[#3c005a] h-auto "
//         showStatus={false}
//         showThumbs={false}
//         showArrows={true}
//         infiniteLoop={true}
//         autoPlay={true}
//         stopOnHover={true}
//         swipeable={true}
//         dynamicHeight={true}
//         interval={5000} // Set interval for autoplay
//       >
//         {data.map((item, index) => (
//           <div key={index} className="w-full flex justify-center pb-12">
//             <div className="flex flex-col w-full max-w-lg px-4 ">
//               <h1
//                 className={`text-2xl font-bold ${item.titleColor}  text-center capitalize`}
//               >
//                 {item.title}
//               </h1>
//               <p
//                 className={`mt-2 text-lg text-${item.descriptionColor} text-center `}
//               >
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </>
//   );
// };

// export default Carousels;

import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      title: "Tech Transformation",
      description:
        "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
      titleColor: "text-yellow-400",
      descriptionColor: "gray-100",
    },
    {
      title: "SaaS Supremacy",
      description:
        "A Frac. SaaS CFO shaved >100 hours a month off his workload, letting him focus on raising $20M in Series B funding for his client.",
      titleColor: "text-yellow-400",
      descriptionColor: "gray-100",
    },
    {
      title: "Professional Services Success",
      description:
        "After automating financial processes, a Fractional CFO saved $500K annually for an e-commerce client, boosting retention and profitability.",
      titleColor: "text-yellow-400",
      descriptionColor: "gray-100",
    },
  ];

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [data.length]);

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  return (
    <div className="bg-customBlue py-10 px-20">
      <div className="flex flex-col text-lg md:text-3xl lg:text-4xl font-roboto-slab leading-normal font-bold text-center text-white ">
        <h1 className="capitalize leading-snug pb-2 lg:hidden">
          How We’ve Helped Fractional CFOs Across Industrial & Geographical
          Boundaries Succeed?
        </h1>
        <h1 className="capitalize leading-snug hidden lg:block">
          Industrial & Geographical Boundaries Succeed?
        </h1>
        <h1 className="capitalize leading-snug hidden lg:block">
          How We’ve Helped Fractional CFOs Across
        </h1>
      </div>

      <div className="relative flex justify-center items-center w-full min-h-[23vh] sm:min-h-[25vh] mt-4">
        <div className="flex justify-center items-center ">
          <div className="flex flex-col sm:w-8/12 w-10/12 px-4 text-center   mx-4  ">
            <h1
              className={`text-lg sm:text-2xl font-bold ${data[currentIndex].titleColor} capitalize mb-4 h-8 leading-[20px] `}
            >
              {data[currentIndex].title}
            </h1>
            <p
              className={`text-sm sm:text-lg text-${data[currentIndex].descriptionColor}`}
            >
              {data[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2   text-white p-3 rounded-full text-2xl hover:bg-opacity-75"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white p-3 rounded-full text-2xl hover:bg-opacity-75"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
