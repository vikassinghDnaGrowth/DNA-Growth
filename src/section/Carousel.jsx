import { useState, useEffect, useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import img1 from "../assets/carousel/1.svg";
import img2 from "../assets/carousel/2.svg";
import img3 from "../assets/carousel/3.svg";

const Carousel = () => {
  console.log("Carousel rendered");
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [img1, img2, img3];
  const intervalRef = useRef(null); // Ref to store the interval ID

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

  // Automatic slide change every 3 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Clear existing interval

    // Set up the new interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Cleanup on component unmount
    return () => clearInterval(intervalRef.current);
  }, []); // Empty dependency array, only runs once when component mounts

  return (
    <div className="relative bg-[rgb(249,251,253)] overflow-hidden">
      {/* Carousel Slide Container */}
      <div className="w-full flex justify-center items-center relative">
        <div
          className="w-full h-full flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {data.map((image, index) => (
            <img
              key={index}
              className="w-full flex-shrink-0"
              src={image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-black z-20 sm:p-4"
      >
        <FiArrowLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-black z-20 sm:p-4"
      >
        <FiArrowRight size={40} />
      </button>
    </div>
  );
};

export default Carousel;
