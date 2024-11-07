import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Stepper = () => {
  const data = useMemo(
    () => [
      {
        title: "Higher Unit Economics",
        description:
          "Regulated prices often result in higher margins in Canada.",
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
    ],
    []
  );

  const containerRef = useRef(null);

  // Memoize the ScrollTrigger setup to prevent unnecessary re-creations
  const setupScrollTrigger = useCallback(() => {
    const stepElements = data.map((_, index) => `.service-item-${index}`);

    // Animate each step on scroll using ScrollTrigger
    stepElements.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    // Sticky scroll effect for the container
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    // Update opacity of the `.vikas` element on scroll
    gsap.fromTo(
      ".vikas",
      { opacity: 0 },
      {
        opacity: 1,
        borderColor: "white",
        scrollTrigger: {
          trigger: ".vikas",
          start: "top 70%",
          end: "top 80%",
          scrub: 3,
        },
        duration: 8,
      }
    );
  }, [data]);

  // Setup ScrollTrigger when component is mounted
  useEffect(() => {
    setupScrollTrigger();

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [setupScrollTrigger]); // Only trigger effect when setupScrollTrigger changes

  return (
    <div
      className="bg-customBlue text-white w-full py-10 px-28 mb-28"
      ref={containerRef}
    >
      <div className="-ml-10 pb-12">
        <h1 className="font-roboto-slab text-5xl pb-4">Let's Help You</h1>
        <span className="font-roboto-slab text-5xl">Focus On Your Mission</span>
      </div>

      {/* vikas element with border (it needs to be visible for ScrollTrigger to affect it) */}
      <div className="relative border-l-2 border-gray-200 vikas">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex items-start service-item service-item-${index}`}
          >
            {/* Circle with the step number */}
            <div className="flex items-center justify-center w-10 h-10 border-2 border-white text-white bg-blue-950 rounded-full transform -translate-x-[55%]">
              {index + 1}
            </div>

            {/* Step content */}
            <div className="ml-6 mb-16">
              <p className="text-yellow-300 text-2xl">{item.title}</p>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Contact Button */}
      <button className="border-2 bg-customBlue w-48 py-2 text-white text-xl rounded-3xl transform -translate-x-[50%]">
        Contact
      </button>
    </div>
  );
};

export default Stepper;
