import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Stepper = () => {
  const data = [
    {
      title: "Higher Unit Economics",
      description: "Regulated prices often result in higher margins in Canada.",
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Implementing best practices in cloud resource management can significantly reduce expenses.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Leveraging analytics enhances strategic planning and operational efficiency.",
    },
    {
      title: "Cybersecurity Investments",
      description:
        "Investing in robust security measures protects sensitive business data from breaches.",
    },
  ];

  const containerRef = useRef(null);

  // Memoized ScrollTrigger setup to prevent unnecessary re-creations
  const setupScrollTrigger = useCallback(() => {
    const stepElements = data.map((_, index) => `.service-item-${index}`);

    // Animate each step on scroll using ScrollTrigger
    stepElements.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
           
            toggleActions: "play none none reverse",
          },
          duration:2,
          ease: "sine.in",
        }
      );
    });

   
  }, [data]);

  // Setup ScrollTrigger when component is mounted
  useEffect(() => {
    setupScrollTrigger();

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setupScrollTrigger]);

  return (
    <div
      className="bg-[#D9E4F5]  text-white w-full py-10 px-28 "
      ref={containerRef}
    >
      <div className="-ml-10 pb-12">
        <h1 className="font-roboto-slab text-5xl pb-4 text-customBlue font-semibold">Let's Help You</h1>
        <span className="font-roboto-slab text-5xl text-customBlue font-semibold">Focus On Your Mission</span>
      </div>

      {/* vikas element with border (it needs to be visible for ScrollTrigger to affect it) */}
      <div className="relative flex">
        <div className="border-[1px] border-gray-400 border-opacity-20"></div>
        <div className="flex flex-col pl-10 transform -translate-x-[3.8%]">
          {data.map((item, index) => (
            <div
              key={index}
              className={`border-l-2 border-customBlue pb-12 flex service-item service-item-${index}`}
            >
              {/* Circle with the step number */}
              <div className="flex items-center justify-center w-10 h-10 border-2 border-white text-white bg-blue-950 rounded-full transform -translate-x-[55%]">
                {index + 1}
              </div>

              {/* Step content */}
              <div className="ml-6">
                <p className="text-customBlue text-2xl font-semibold">{item.title}</p>
                <p className="text-2xl text-black ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Contact Button */}
      <button className="border-2 bg-customBlue w-48 py-2 text-white text-xl rounded-3xl transform -translate-x-[45%]">
        Contact
      </button>
    </div>
  );
};

export default Stepper;
