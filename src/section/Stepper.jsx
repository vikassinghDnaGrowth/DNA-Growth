import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Stepper = () => {
  const data = [
    {
      title: "Too Much Admin Work, Not Enough Strategy",
      description:
        "You didn’t become a CFO to spend your day updating spreadsheets or reconciling invoices. Let us automate, streamline, and simplify finance for you.",
    },
    {
      title: "Scaling Practice Fast has become challenging",
      description:
        "Got clients but need help managing time and manpower to deliver results faster while catering to new ones? We offer different engagement models (FTE/Hourly/Project-Wise). Now, offer more services under your branding - faster & more confidently. ",
    },
    {
      title: "Tech Stack Overload",
      description:
        "Is managing ten different platforms, systems, and software that never seem to sync draining your productivity & resources? Our tech-savvy financial experts are here to the rescue.",
    },
    {
      title: "The growth fomo",
      description:
        "Spending all day in the books means you don’t have time to make strategic decisions, onboard more clients, scale your practice, and boost your revenue. Let’s flip the script.",
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
      className="bg-[#D9E4F5]  text-white w-full md:py-10 md:px-28  py-8"
      ref={containerRef}
    >
      <div className="md:-ml-10 pb-12 p-2 ">
        <h1 className="font-roboto-slab text-2xl sm:text-3xl md:text-5xl md:pb-4 pb-2  text-customBlue font-semibold text-nowrap">Let's Help You</h1>
        <h1 className="font-roboto-slab text-2xl sm:text-3xl md:text-5xl text-customBlue font-semibold text-nowrap">Focus On Your Mission</h1>
      </div>

      {/* vikas element with border (it needs to be visible for ScrollTrigger to affect it) */}
      <div className="relative flex ">
        <div className="border-[1px] border-gray-400 border-opacity-20 hidden md:block"></div>
        <div className="w-full  md:9/12 flex flex-col md:pl-10 pl-6 md:transform md:-translate-x-[3.7%]  ">
          {data.map((item, index) => (
            <div
              key={index}
              className={`border-l-2 md:pb-8 border-customBlue  flex service-item service-item-${index}`}
            >
              {/* Circle with the step number */}
              <div className="flex items-center justify-center w-10 h-10 p-4 border-2 border-white text-white bg-blue-950 rounded-full transform -translate-x-[55%]">
                {index + 1}
              </div>

              {/* Step content */}
              <div className="md:ml-6  p-2">
                <p className="text-customBlue text-lg md:text-2xl font-semibold">{item.title}</p>
                <p className="text-sm text-black ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Contact Button */}
      <button className="border-2 ml-2 bg-customBlue md:w-48 w-5/12 py-2 text-white md:text-xl text-md rounded-3xl md:transform md:-translate-x-[45%] ">
        Contact
      </button>
    </div>
  );
};

export default Stepper;
