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
          duration: 2,
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
      className="bg-[#D9E4F5]  text-white w-full py-10 md:px-24   px-6 "
      ref={containerRef}
    >
      <div className="md:-ml-10 pb-12 md:pl-0 sm:pl-12 pl-4">
        <h1 className="font-roboto-slab text-2xl  md:text-4xl md:pb-4 pb-2  text-customBlue font-semibold  ">
          We Get It—It’s
        </h1>
        <h1 className="font-roboto-slab text-2xl  md:text-4xl text-customBlue font-semibold ">
          Tough Out There
        </h1>
      </div>
      {/* vikas element with border (it needs to be visible for ScrollTrigger to affect it) */}
      <div className=" flex sm:pl-14 md:pl-0  pl-6">
        <div className="w-full border-l-2 border-gray-300  ">
          <div className="w-full  md:9/12 flex flex-col transform -translate-x-[0.4%] sm:-translate-x-[0.3%]">
            {data.map((item, index) => (
              <div
                key={index}
                className={`border-l-2 md:pb-8 border-customBlue  flex service-item service-item-${index}`}
              >
                {/* Circle with the step number */}
                <div className="flex items-center justify-center w-10 h-10 p-4 border-2 border-white text-white bg-blue-950 rounded-full  transform -translate-x-[55%]">
                  {index + 1}
                </div>

                {/* Step content */}
                <div className="md:ml-6    md:p-2 pb-6">
                  <p className="text-customBlue text-lg md:text-2xl font-semibold capitalize">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-lg text-black  ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Optional Contact Button */}
      <button className="border-2 capitalize ml-2 bg-customBlue sm:w-40 w-24 py-2  text-white md:text-xl text-sm rounded-3xl transform md:-translate-x-[55%]  -translate-x-[28%] sm:-translate-x-[16%] ">
        Contact us
      </button>
    </div>
  );
};

export default Stepper;
