import React from "react";
import contactUs from "../assets/unnamed-removebg-preview.png";
import bgImage from "../assets/images.png";
const LandingPage = () => {
  return (
    <div className="w-full bg-[#3c005a] md:h-screen h-auto">
      <div className="w-full flex flex-col md:flex-row justify-center items-center h-full gap-4 ">
        <div className="md:w-9/12 w-10/12   flex gap-4 flex-col items-center justify-center h-full  ">
          <div className="md:w-8/12 mt-6 ">
            <header>
              <span className=" text-white text-2xl font-roboto-slab italic ">
                SPEED. SCALE. SUCCESS.
              </span>
              <h1 className="md:text-4xl text-2xl font-semibold font-roboto-slab pt-4 leading-tight pb-4 uppercase text-white">
                Supercharge Your CFO Practice by 2x with White-Label Finance &
                Accounting Solutions
              </h1>
            </header>
            <div>
              <p className="py-2 md:text-md text-sm font-montserrat text-white">
                Drowning in financial reports and spreadsheets? Imagine
                offloading accounting, bookkeeping, modeling, and daily
                operations without a big team. DNA Growth helps fractional CFOs
                scale faster by handling the behind-the-scenes work that boosts
                client satisfaction—all under your brand.
              </p>
            </div>

            
              <button className="border-2 bg-[rgb(207,77,113)]  rounded-xl block px-[8px] py-[6px]   text-white text-md font-semibold mt-4">
                Let’s Level Up Your Practice
              </button>
           
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="md:w-4/12 w-10/12 h-full flex items-center justify-center p-4 "
        >
          <img
            src={contactUs}
            alt="Contact Us"
            className="md:h-[80%]  w-[80%]  object-cover   "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
