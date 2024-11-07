import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const GsapTest = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 600,
      yoyo: true,
      repeat: -1, // Repeat indefinitely
      duration: 2,
      ease: "power1.inOut",
      backgroundColor: "red",
      borderRadius: "50%",
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });
  });

  return (
    <div className="w-full h-screen  border-2 border-black flex justify-center items-center">
      <div className="box bg-green-400 w-36 h-36 border-2 border-black"></div>
    </div>
  );
};

export default GsapTest;
