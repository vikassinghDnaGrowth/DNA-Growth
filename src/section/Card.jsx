import image1 from "../assets/Card/1_technology-min.jpg";
import image2 from "../assets/Card/new_ui_design_51-min.jpg";
import image3 from "../assets/Card/ui_icon_634-min.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  console.log("Card rendered");
  useGSAP(() => {
    gsap.from(".heading", {
      scrollTrigger: {
        trigger: ".heading",
        duration: 1,
        start: "top 90%",
        end: "top center",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 2,
    });
  });

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-10 ">
      <div className="flex flex-col justify-start sm:justify-center items-center text-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pb-2 font-bold text-[#C93F6C] font-roboto-slab capitalize heading">
          DNA Growth Has Your Back (and Your Brand’s)
        </h1>
        <p className="text-base sm:text-lg lg:text-xl   text-black pt-2 sm:px-10">
          <span className="text-lg sm:text-xl text-black sm:font-bold font-semibold ">
            Our White-Label CFO Support Has One Goal:{" "}
          </span>
          To make you one-stop support for your clients & build better business
          for you. <br />
          When you have DNA Growth in your team, you’re not just outsourcing
          finance tasks—you’re gaining a full team of 150+ experts (including
          ex-Big 4, CPAs, CFAs, Stanford Seed alumni, and engineers) who work
          seamlessly under your brand. From advanced FP&A and CFO tech to
          investor business plans and pitch decks, we handle it all so you focus
          on the big picture.
        </p>
      </div>

      {/* Card Section 1 */}
      <div className="bg-[rgb(201,63,108)] rounded-lg p-6 w-[90vw] lg:w-[65vw] max-h-[80vh] sm:max-h-[60vh] sticky top-10 flex flex-col sm:flex-row justify-center  ">
        <div className="flex-1 flex flex-col justify-center sm:items-start items-center p-4 gap-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white font-roboto-slab text-center sm:text-left capitalize">
            We do the ‘grunt’ work
          </h1>
          <p className="text-center sm:text-left text-sm sm:text-lg lg:text-xl capitalize text-white">
            Get daily bookkeeping, financial reporting, and cash flow management
            for all clients without you needing to micromanage.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image1}
            alt="Image 1"
            className="md:w-full md:h-full aspect-[6/4] sm:aspect-auto  object-cover rounded-lg" // Ensures the image fills the container while maintaining aspect ratio
          />
        </div>
      </div>

      <div className="bg-[rgb(239,197,0)] rounded-lg p-6 w-[90vw] lg:w-[65vw] max-h-[80vh] sm:max-h-[60vh] sticky top-10 flex flex-col sm:flex-row justify-center ">
        <div className="flex-1 flex flex-col justify-center sm:items-start items-center p-4 gap-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold font-roboto-slab text-center sm:text-left text-white capitalize">
            We work under your brand name
          </h1>
          <p className="text-center sm:text-left text-sm sm:text-lg lg:text-xl capitalize text-white">
            Our white-label services mean we’re invisible to your clients (as
            long as you wish), but the impact we make? That’s loud & clear.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image2}
            alt="Image 3"
            className="md:w-full md:h-full aspect-[6/4] sm:aspect-auto object-cover rounded-lg" // Ensures the image fills the container while maintaining aspect ratio
          />
        </div>
      </div>

      {/* Card Section 3 */}
      <div className="bg-[rgb(61,145,207)] rounded-lg p-6 w-[90vw] lg:w-[65vw] max-h-[80vh] sm:max-h-[60vh] sticky top-10 flex flex-col sm:flex-row justify-center ">
        <div className="flex-1 flex flex-col justify-center sm:items-start items-center p-4 gap-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold font-roboto-slab text-center sm:text-left text-white capitalize">
            We plug into your tech stack
          </h1>
          <p className="text-center sm:text-left text-sm sm:text-lg lg:text-xl capitalize text-white">
            Whether it’s Sage Intacct, NetSuite, PowerBI, QBO, or a custom-built
            system—we integrate with what you’re already using.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image3}
            alt="Image 3"
            className="md:w-full md:h-full aspect-[6/4] sm:aspect-auto object-cover rounded-lg" // Ensures the image fills the container while maintaining aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
