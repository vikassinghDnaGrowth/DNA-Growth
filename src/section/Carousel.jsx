// import { useState } from "react";
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Import arrow icons

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const data = [
//     {
//       title: "Tech Transformation",
//       description:
//         "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
//       titleColor: "text-white",
//       descriptionColor: "text-yellow-400",
//       bgGradient: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700", // Gradient blue
//     },
//     {
//       title: "SaaS Supremacy",
//       description:
//         "A Frac. SaaS CFO shaved >100 hours a month off his workload, letting him focus on raising $20M in Series B funding for his client.",
//       titleColor: "text-white",
//       descriptionColor: "text-yellow-400",
//       bgGradient: "bg-gradient-to-r from-pink-500 via-pink-600 to-red-700", // Gradient red
//     },
//     {
//       title: "Professional Services Success",
//       description:
//         "After automating financial processes, a Fractional CFO saved $500K annually for an e-commerce client, boosting retention and profitability.",
//       titleColor: "text-white",
//       descriptionColor: "text-yellow-400",
//       bgGradient:
//         "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600", // Gradient yellow
//     },
//   ];

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === data.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative bg-[rgb(249,251,253)] py-6 overflow-hidden">
//       <div className="flex flex-col text-lg md:text-3xl lg:text-4xl py-2 font-roboto-slab leading-normal font-bold text-center text-[#C93F6C]">
//         <h1 className="capitalize leading-snug pb-2 lg:hidden">
//           How We’ve Helped Fractional CFOs Across Industrial & Geographical
//           Boundaries Succeed?
//         </h1>
//         <h1 className="capitalize leading-snug hidden lg:block">
//           How We’ve Helped Fractional CFOs Across
//         </h1>
//         <h1 className="capitalize leading-snug hidden lg:block">
//           Industrial & Geographical Boundaries Succeed?
//         </h1>
//       </div>

//       {/* Carousel Slide Container */}
//       <div
//         className={`w-full md:min-h-[23vh] min-h-[40vh] flex justify-center items-center  relative ${data[currentIndex].bgGradient}`}
//       >
//         <div className="text-center text-white z-10 w-10/12">
//           <h2 className="md:text-3xl text-xl font-bold ">
//             {data[currentIndex].title}
//           </h2>
//           <p className="mt-2 text-lg text-md text-yellow-400">
//             {data[currentIndex].description}
//           </p>
//         </div>
//       </div>

//       {/* Arrow Buttons */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-2 top-1/2 transform -translate-y-[-50%] p-2 text-white z-20"
//       >
//         <FiArrowLeft size={30} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-2 top-1/2 transform -translate-y-[-50%] p-2 text-white z-20"
//       >
//         <FiArrowRight size={30} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import img1 from "../assets/carousel/1.jpg";
import img2 from "../assets/carousel/2.jpg";
import img3 from "../assets/carousel/3.jpg";

const Carousel = () => {
  console.log("Carousel rendered");
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [img1, img2, img3];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-[rgb(249,251,253)] py-6 overflow-hidden">
      {/* Carousel Slide Container */}
      <div className="w-full  flex justify-center items-center relative ">
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {data.map((image, index) => (
            <img
              key={index}
              className="object-cover w-full min-h-full flex-shrink-0"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-white z-20  sm:p-4"
      >
        <FiArrowLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white z-20   sm:p-4"
      >
        <FiArrowRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;


