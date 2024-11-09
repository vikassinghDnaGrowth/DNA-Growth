import React from "react";
import contactUs from "../assets/unnamed.jpg";

const LandingPage = () => {
  return (
    <div className="w-full bg-[#3c005a] h-screen">
      <div className="w-full flex h-full gap-4">
        <div className="w-9/12 flex gap-4 flex-col items-center justify-center h-full ">
          <div className="w-8/12">
            <header>
              <span className=" text-white text-2xl font-roboto-slab italic ">
                SPEED. SCALE. SUCCESS.
              </span>
              <h1 className="text-4xl font-semibold font-roboto-slab pt-4 leading-tight pb-4 uppercase text-white">
                Supercharge Your CFO Practice by 2x with White-Label Finance &
                Accounting Solutions
              </h1>
            </header>
            <div>
              <p className="py-2 text-md font-montserrat text-white">
                Drowning in financial reports and spreadsheets? Imagine
                offloading accounting, bookkeeping, modeling, and daily
                operations without a big team. DNA Growth helps fractional CFOs
                scale faster by handling the behind-the-scenes work that boosts
                client satisfaction—all under your brand.
              </p>
            </div>

            <button className="border-2 bg-[rgb(207,77,113)]  rounded-xl block px-[8px] py-[6px] mt-4  text-white text-md font-semibold">
              Let’s Level Up Your Practice
            </button>
          </div>
        </div>
        <div className="w-4/12 h-full flex items-center justify-center p-4  ">
          <img
            src={contactUs}
            alt="Contact Us"
            className=" h-[77%] border-2 object-cover  border-white rounded-full  p-6 shadow-2xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
