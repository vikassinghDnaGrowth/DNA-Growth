import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Stepper = () => {
  // Memoize the data array so it doesn't get recreated on every render
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

  useEffect(() => {
    // Set up ScrollTrigger animation for each step
    const stepElements = data.map((_, index) => `.service-item-${index}`);

    // Animate each step on scroll using ScrollTrigger
    stepElements.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: step,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
          duration: 1,
          ease: "power3.out",
        }
      );
    });

    // Sticky scroll effect (optional)
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

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [data]); // Dependency on data to ensure animations are set up only when necessary

  return (
    <div
      className="bg-customBlue text-white w-full  py-10 px-28 mb-28"
      ref={containerRef}
    >
      <div className="ml-32 pb-12">
        <h1 className="font-roboto-slab text-5xl pb-4">Let's Help You</h1>
        <span className="font-roboto-slab text-5xl">Focus On Your Mission</span>
      </div>

      <div className="relative">
        {data.map((item, index) => (
          <div
            key={item.title} // Unique key using item title
            className={`flex items-start mb-16 service-item service-item-${index}`} // Increased gap between items
          >
            {/* Circle with the step number */}
            <div className="flex items-center justify-center w-10 h-10 border-2 border-yellow-500 text-white bg-blue-950 rounded-full transform translate-x-[-36%]">
              {index + 1}
            </div>

            {/* Step content */}
            <div className="ml-6">
              <p className="text-yellow-300 text-2xl">{item.title}</p>
              <p className="text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Contact Button */}
      <button className="border-2 bg-customBlue w-48 py-2 text-white text-xl rounded-3xl mt-6">
        Contact
      </button>
    </div>
  );
};

export default Stepper;
