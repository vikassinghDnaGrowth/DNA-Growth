import React from "react";
import bgImage from "../assets/flags/image.jpg";
import image1 from "../assets/web-design-vector.png";
import image2 from "../assets/cash-flow-management-for-businesses.png";
import image3 from "../assets/download-removebg-preview.png";

const Card = () => {
  return (
    <div
      className="w-full flex flex-col gap-8 items-center justify-center py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-start sm:justify-center items-center text-center px-4 sm:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl pb-2 font-bold text-white font-roboto-slab capitalize">
          DNA Growth Has Your Back (and Your Brand’s)
        </h1>
        <p className="text-base sm:text-lg lg:text-xl md:text-yellow-300 text-white pt-2 sm:px-10">
          <span className="text-lg sm:text-xl text-slate-100">
            Our White-Label CFO Support Has One Goal:{" "}
          </span>
          To make You one-stop support for Your Clients & Build Better Business
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
      <div className="bg-[#3c005a] rounded-lg p-6 w-[90vw] lg:w-[65vw] h-[80vh] sm:h-[60vh] sticky top-10 flex flex-col sm:flex-row justify-center  ">
        <div className="flex-1 flex flex-col justify-center items-start p-4 gap-6">
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
            className="w-full h-full object-cover rounded-lg" // Ensures the image fills the container while maintaining aspect ratio
          />
        </div>
      </div>

      {/* Card Section 2 */}
      <div className="bg-white rounded-lg p-6 w-[90vw] lg:w-[65vw] h-[80vh] sm:h-[60vh]  sticky top-10 flex flex-col sm:flex-row justify-center">
        <div className="flex-1 flex flex-col justify-center items-start p-4 gap-6">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold font-roboto-slab text-center sm:text-left text-black capitalize">
            We work Along your practice, but under your name
          </h1>
          <p className="text-center sm:text-left text-sm sm:text-lg lg:text-xl capitalize text-black">
            Our white-label services mean we’re invisible to your clients (as
            long as you wish), but the impact we make? That’s loud & clear.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={image2}
            alt="Image 2"
            className="w-[90vw] h-[90vh] object-cover rounded-lg" // Ensures the image fills the container while maintaining aspect ratio
          />
        </div>
      </div>

      {/* Card Section 3 */}
      <div className="bg-customBlue rounded-lg p-6 w-[90vw] lg:w-[65vw] h-[80vh] sm:h-[60vh]  sticky top-10 flex flex-col sm:flex-row justify-center">
        <div className="flex-1 flex flex-col justify-center items-start p-4 gap-6">
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
            className="w-full h-full object-cover rounded-lg" // Ensures the image fills the container while maintaining aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
