import React from "react";
import contactUs from "../assets/contactUs.png";

const LandingPage = () => {
  return (
    <div className="w-full bg-slate-200 h-screen">
      <div className="w-full flex h-full gap-4">
        <div className="w-9/12 flex gap-4 flex-col items-center justify-center h-full">
          <div className="w-8/12">
            <header>
              <h1 className="text-4xl font-semibold font-roboto-slab leading-tight pb-4">
                Supercharge Your CFO Practice by 2x with White-Label Finance &
                Accounting Solutions
              </h1>
            </header>
            <div>
              <p className="py-2 text-lg font-montserrat">
                Drowning in financial reports and spreadsheets? Imagine
                offloading accounting, bookkeeping, modeling, and daily
                operations without a big team. DNA Growth helps fractional CFOs
                scale faster by handling the behind-the-scenes work that boosts
                client satisfaction—all under your brand.
              </p>
            </div>
            <span className="text-blue-900">SPEED. SCALE. SUCCESS.</span>
            <button className="border-2 border-blue-500 rounded-xl block px-4 py-2 mt-2 shadow-xl text-black">
              Let’s Level Up Your Practice
            </button>
          </div>
        </div>
        <div className="w-6/12 h-full flex items-center justify-center p-4 ">
          <img
            src={contactUs}
            alt="Contact Us"
            className="max-w-full h-auto border-2 border-white rounded-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
