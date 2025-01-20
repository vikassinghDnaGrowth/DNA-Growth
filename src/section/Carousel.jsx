import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      title: "Tech Transformation",
      description:
        "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
      titleColor: "text-white",
      descriptionColor: "text-yellow-400",
      bgColor: "rgb(22,103,163)", // Blue
    },
    {
      title: "SaaS Supremacy",
      description:
        "A Frac. SaaS CFO shaved >100 hours a month off his workload, letting him focus on raising $20M in Series B funding for his client.",
      titleColor: "text-white",
      descriptionColor: "text-yellow-400",
      bgColor: "rgb(201,63,108)", // Red
    },
    {
      title: "Professional Services Success",
      description:
        "After automating financial processes, a Fractional CFO saved $500K annually for an e-commerce client, boosting retention and profitability.",
      titleColor: "text-white",
      descriptionColor: "text-yellow-400",
      bgColor: "rgb(239,197,9)", // Yellow
    },
  ];

  // Change slide every 5 seconds (right to left direction)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Move to the next slide
    }, 5000);
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [data.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1) // Loop back to the last slide
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1) // Loop back to the first slide
    );
  };

  return (
    <div className="bg-[rgb(249,251,253)] py-6">
      <div className="flex flex-col text-lg md:text-3xl lg:text-4xl font-roboto-slab leading-normal font-bold text-center text-[#C93F6C]">
        <h1 className="capitalize leading-snug pb-2 lg:hidden">
          How We’ve Helped Fractional CFOs Across Industrial & Geographical
          Boundaries Succeed?
        </h1>
        <h1 className="capitalize leading-snug hidden lg:block">
          How We’ve Helped Fractional CFOs Across
        </h1>
        <h1 className="capitalize leading-snug hidden lg:block">
          Industrial & Geographical Boundaries Succeed?
        </h1>
      </div>

      <div
        className="relative flex justify-center items-center w-full min-h-[23vh] sm:min-h-[25vh] md:min-h-[30vh] lg:min-h-[35vh] mt-4 transition-all duration-1000 ease-in-out overflow-hidden" // Adjusted min height for different screen sizes
        style={{
          backgroundColor: data[currentIndex].bgColor, // Smooth background color change
        }}
      >
        {/* Slide Content */}
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Horizontal slide effect
            width: `${data.length * 100}%`, // Ensure all slides are within the container width
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4 text-center mx-4 flex justify-center items-center"
            >
              <div className="text-center text-white p-6 bg-opacity-75 bg-transparent rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-lg md:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black p-3 text-3xl sm:text-4xl hover:bg-opacity-75"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black p-3 text-3xl sm:text-4xl hover:bg-opacity-75"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
