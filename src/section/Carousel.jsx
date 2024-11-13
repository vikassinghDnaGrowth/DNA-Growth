import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousels = () => {
  const data = [
    {
      title: "Tech tranformation",
      description:
        "A tech-focused fractional CFO tripled his client base in 8 months after offloading bookkeeping and FP&A to our team.",
      titleColor: "text-white",
      descriptionColor: "white",
    },
    {
      title: "Saas supremacy",
      description:
        "A Frac. SaaS CFO shaved >100 hours a month off his workload, letting him focus on raising $20M in Series B funding for his client.",
      titleColor: "text-white",
      descriptionColor: "white",
    },
    {
      title: "Professional services Success",
      description:
        "After automating their financial processes with us, a Fractional CFO saved $500K annually for their e-commerce client, boosting retention and profitability.",
      titleColor: "text-white",
      descriptionColor: "white",
    },
  ];

  return (
    <>
      <div className="text-xl md:text-4xl font-roboto-slab leading-normal font-bold  flex justify-center bg-[#3c005a] py-4">
        <h1 className="  font-roboto-slab text-center capitalize  text-white">
          How We’ve Helped Fractional CFOs Across Industrial & geographical
          boundaries Succeed?
        </h1>
      </div>
      <Carousel
        className="w-full bg-[#3c005a]"
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={true}
        swipeable={true}
        dynamicHeight={true}
        interval={5000} // Set interval for autoplay
      >
        {data.map((item, index) => (
          <div key={index} className="w-full flex justify-center min-h-[25vh]">
            <div className="flex flex-col w-full max-w-lg px-4 ">
              <h1
                className={`text-2xl font-bold ${item.titleColor}  text-center capitalize`}
              >
                {item.title}
              </h1>
              <p
                className={`mt-2 text-lg text-${item.descriptionColor} text-center capitalize`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Carousels;
