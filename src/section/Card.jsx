import React from "react";
import bgImage from "../assets/flags/image.jpg";

const Card = () => {
  return (
    <div
      className="w-full flex flex-col gap-8 items-center justify-center py-10 "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center  ">
        <h1 className="text-3xl sm:text-4xl  font-bold text-white text-center font-roboto-slab  capitalize">
          DNA Growth Has Your Back (and Your Brand’s)
        </h1>
        <p className="text-base sm:text-lg lg:text-xl md:text-yellow-300 text-white pt-2 px-4 sm:px-14 ">
          <span className="text-lg sm:text-xl text-slate-100 ">
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
      <div className="w-[90vw] sm:w-[70vw] lg:w-[65vw] h-[40vh] sm:h-[50vh]  sticky top-10 flex justify-center">
        <div className="bg-[#3c005a] rounded-3xl w-full flex flex-col justify-center items-center p-4 gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-roboto-slab text-center capitalize">
            We do the ‘grunt’ work
          </h1>
          <p className="text-center text-base sm:text-lg lg:text-xl capitalize text-white">
            Get daily bookkeeping, financial reporting, and cash flow management
            for all clients without you needing to micromanage.
          </p>
        </div>
      </div>

      {/* Card Section 2 */}
      <div className="w-[90vw] sm:w-[70vw] lg:w-[65vw] h-[40vh] sm:h-[50vh] md:h-[50vh] sticky top-10 flex justify-center">
        <div className="bg-white rounded-3xl w-full flex flex-col justify-center items-center p-4 gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-roboto-slab text-center text-black capitalize ">
            We work Along your practice, but under your name
          </h1>
          <p className="text-center text-base sm:text-lg lg:text-xl capitalize text-black">
            Our white-label services mean we’re invisible to your clients (as
            long as you wish), but the impact we make? That’s loud & clear.
          </p>
        </div>
      </div>

      {/* Card Section 3 */}
      <div className="w-[90vw] sm:w-[70vw] lg:w-[65vw] h-[40vh] sm:h-[50vh] md:h-[50vh] sticky top-10 flex justify-center">
        <div className="bg-customBlue rounded-3xl w-full flex flex-col justify-center items-center p-4 gap-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold font-roboto-slab text-center text-white capitalize">
            We plug into your tech stack
          </h1>
          <p className="text-center text-base sm:text-lg lg:text-xl capitalize text-white">
            Whether it’s Sage Intacct, NetSuite, PowerBI, QBO, or a custom-built
            system—we integrate with what you’re already using.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
