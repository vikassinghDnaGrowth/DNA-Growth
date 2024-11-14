import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Ensure ScrollTrigger is imported here
import { useGSAP } from "@gsap/react";
import { GiCheckMark } from "react-icons/gi";

import image from "../assets/image.png";
// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useGSAP(() => {
    // Animating the span elements first (fade-in)
    gsap.from(".checkmark", {
      opacity: 0, // Start with opacity 0
      x: -20, // Start with a slight upward offset
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.3, // Stagger the animation for each <span> element
      scrollTrigger: {
        trigger: ".checkmark",
        start: "top 90%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Animating the h1 elements after the span elements (fade-in with a delay)
    gsap.from(".h1", {
      opacity: 0,
      x: -30, // Start with horizontal offset
      duration: 1,
      ease: "sine.in",
      stagger: 0.5, // Stagger the animation for each <h1> element
      delay: 1, // Delay the h1 animation to start after the span animation
      scrollTrigger: {
        trigger: ".h1",
        start: "top 80%",
        end: "top 80%",
        scrub: true,
      },
    });

    // Animating the description with opacity fade-in and movement
    gsap.from(".discription", {
      y: -50,
      opacity: 0, // Start with opacity 0
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".discription",
        start: "top 150%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Animating the image with scaling effect on scroll
    gsap.fromTo(
      ".image",
      {
        scale: 0.8, // Initial scale (smaller size)
        opacity: 0, // Initially invisible
      },
      {
        scale: 1, // Target scale (full size)
        opacity: 1, // Make it fully visible
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".image",
          start: "top 85%", // Start the animation when the image reaches 75% from top of the viewport
          end: "top 35%", // End when the bottom of the image reaches the top of the viewport
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="w-full flex md:h-auto h-auto pb-24 pt-8 md:pb-6   justify-center items-center p-4 bg-customBlue ">
      <div className="w-full lg:w-11/12 flex  md:flex-row flex-col justify-between gap-4">
        <div className="flex flex-col justify-center p-4 md:w-6/12  w-full ">
          <div className="flex flex-col lg:relative right-[3.7rem]  font-montserrat text-xl md:4xl font-bold text-white  capitalize gap-4 lg:text-nowrap ">
            <div className="flex gap-6">
              <span className="checkmark text-2xl md:text-4xl font-bold text-green-600">
                <GiCheckMark />
              </span>
              <h1 className="h1">Double your clientele</h1>
            </div>
            <div className="flex gap-6">
              <span className="checkmark text-2xl md:text-4xl font-bold  text-green-600">
                <GiCheckMark />
              </span>
              <h1 className="h1">Deliver more value to your clients</h1>
            </div>
            <div className="flex gap-6">
              <span className="checkmark text-2xl md:text-4xl font-bold  text-green-600">
                <GiCheckMark />
              </span>
              <h1 className="h1">Free up your time for strategic work</h1>
            </div>
          </div>
          <p className="py-8 text-lg md:text-md text-white discription">
            <span className="pr-2 text-green-400 md:font-medium ">
              DNA Growth
            </span>
            is a leader in Accounting, Finance, and Automation Solutions for the
            CFO Office. We offer tailored solutions to passionate fractional
            CFOs who want to build value for their clients without compromising
            success or their valuable hours spent on mundane tasks.
          </p>
          <button className="md:w-1/2  w-full rounded-xl mt-2 p-2 bg-white text-black border-2 border-black text-md font-semibold  text-nowrap">
            Explore Our Services
          </button>
          {/* rounded-xl block px-[8px] py-[6px] mt-4 text-white text-md
          font-semibold */}
        </div>
        <div className="flex w-full justify-center items-center md:w-6/12 ">
          <div className="flex w-[80%] justify-center items-center rounded-3xl bg-gray-300 p-4 ">
            <img
              src={image}
              alt="HeaderImg"
              className=" image w-[100%] h-auto  shadow-2xl shadow-black object-cover rounded-3xl  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
