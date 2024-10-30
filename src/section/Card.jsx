import React from "react";
import bgImage from "../assets/flags/image.jpg";

const Card = () => {
  return (
    <div
      className="w-full flex flex-col gap-8 items-center justify-center pb-[10vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center p-6">
        <h1 className="text-5xl font-bold text-white text-center font-roboto-slab py-2">
          DNA Growth Has Your Back (and Your Brand’s)
        </h1>
        <p className="text-lg text-yellow-300  pt-2">
          <span className="text-xl text-slate-100">
            Our White-Label CFO Support Has One Goal: {" "}
          </span>
          To make You one-stop support for Your Clients & Build Better Business
          for you.
          <br />
          When you have DNA Growth in your team, you’re not just outsourcing
          finance tasks—you’re gaining a full team of 150+ experts (including
          ex-Big 4, CPAs, CFAs, Stanford Seed alumni, and engineers) who work
          seamlessly under your brand. From advanced FP&A and CFO tech to
          investor business plans and pitchdecks, we handle it all so you focus
          on the big picture.
        </p>
      </div>
      <div className="w-[65vw] h-[55vh] sticky top-10 aspect-w-16 aspect-h-9 flex justify-center">
        <div className="bg-green-500 rounded-3xl w-9/12 flex flex-col justify-center items-center p-4 gap-6">
          <h1 className="text-5xl font-semibold text-white font-roboto-slab text-center">
            We do the ‘grunt’ work
          </h1>
          <p className="text-center text-xl">
            Get daily bookkeeping, financial reporting, and cash flow management
            for all clients without you needing to micromanage.
          </p>
        </div>
      </div>
      <div className="w-[65vw] h-[55vh] sticky top-10 aspect-w-16 aspect-h-9 flex justify-center">
        <div className="bg-yellow-400 rounded-3xl w-9/12 flex flex-col justify-center items-center p-4 gap-6">
          <h1 className="text-5xl font-semibold font-roboto-slab text-center text-white">
            We work Along your practice, but under your name
          </h1>
          <p className="text-center text-xl">
            Our white-label services mean we’re invisible to your clients (as
            long as you wish), but the impact we make? That’s loud & clear.
          </p>
        </div>
      </div>
      <div className="w-[65vw] h-[55vh] sticky top-10 aspect-w-16 aspect-h-9 flex justify-center">
        <div className="bg-red-500 rounded-3xl w-9/12 flex flex-col justify-center items-center p-4 gap-6">
          <h1 className="text-5xl font-semibold font-roboto-slab text-center text-white">
            We plug into your tech stack
          </h1>
          <p className="text-center text-xl">
            Whether it’s Sage Intacct, NetSuite, PowerBI, QBO, or a custom-built
            system—we integrate with what you’re already using.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
