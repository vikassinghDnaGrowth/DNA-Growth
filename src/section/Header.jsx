import React from "react";

const Header = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4 bg-gray-400 ">
      <div className="w-10/12 flex justify-between">
        <div className="flex flex-col justify-center   p-4 w-4/12">
          <h3 className="font-roboto-slab font-bold text-black text-3xl">
            Double your clientele, deliver more value to your clients, and free
            up your time for strategic work
          </h3>
          <p className="py-8 text-lg text-black">
            <span className="pr-2 text- text-customBlue font-medium"> DNA Growth</span>
            is a leader in Accounting, Finance, and Automation Solutions for the
            CFO Office. We offer tailored solutions to passionate fractional
            CFOs who want to build value for their clients without compromising
            success or their valuable hours spent on mundane tasks.
          </p>

          <button className="mt-2 p-2  bg-customBlue  text-white rounded font-semibold">
            Explore Our Services
          </button>
        </div>
        <div className=" aspect-aspect-auto  ">
          <img
            src="src/assets/Hero-Wrapper__image.png"
            alt="HeaderImg"
            className=" w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
