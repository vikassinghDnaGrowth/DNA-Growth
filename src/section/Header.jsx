import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Ensure ScrollTrigger is imported here
import { useGSAP } from "@gsap/react";
import { FcCheckmark } from "react-icons/fc";

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
      ease: "power1.inOut",
      stagger: 0.5, // Stagger the animation for each <h1> element
      delay: 0.3, // Delay the h1 animation to start after the span animation
      scrollTrigger: {
        trigger: ".h1",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    // Animating the description with opacity fade-in and movement
    gsap.from(".discription", {
      y: 110,
      opacity: 0, // Start with opacity 0
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".discription",
        start: "top 200%",
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
          start: "top 75%", // Start the animation when the image reaches 75% from top of the viewport
          end: "top 25%", // End when the bottom of the image reaches the top of the viewport
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="w-full h-screen flex justify-center items-center p-4 bg-customBlue">
      <div className="w-10/12 flex justify-between gap-16">
        <div className="flex flex-col justify-center p-4 w-8/12">
          <div className="flex flex-col font-montserrat font-bold text-white text-3xl capitalize gap-4 ">
            <div className="flex gap-2">
              <span className="checkmark text-4xl font-bold">
                <FcCheckmark />
              </span>
              <h1 className="h1">Double your clientele</h1>
            </div>
            <div className="flex gap-2">
              <span className="checkmark text-4xl font-bold">
                <FcCheckmark />
              </span>
              <h1 className="h1">Deliver more value to your clients</h1>
            </div>
            <div className="flex gap-2">
              <span className="checkmark text-4xl font-bold">
                <FcCheckmark />
              </span>
              <h1 className="h1">Free up your time for strategic work</h1>
            </div>
          </div>

          <p className="py-8 text-md text-white discription">
            <span className="pr-2 text-green-400 font-medium">DNA Growth</span>
            is a leader in Accounting, Finance, and Automation Solutions for the
            CFO Office. We offer tailored solutions to passionate fractional
            CFOs who want to build value for their clients without compromising
            success or their valuable hours spent on mundane tasks.
          </p>

          <button className="w-1/2 mt-2 p-2 bg-white text-black border-2 border-black rounded font-semibold">
            Explore Our Services
          </button>
        </div>
        <div className="flex justify-center items-center rounded-3xl bg-white p-4 ">
          <img
            src="src/assets/Hero-Wrapper__image.png"
            alt="HeaderImg"
            className="image w-[97%] h-[97%] shadow-2xl shadow-black object-cover bg-gradient-to-t from-[#5ee7df] to-[#b490ca] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
