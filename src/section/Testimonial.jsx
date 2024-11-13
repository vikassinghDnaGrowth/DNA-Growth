import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const dummyData = [
  {
    title:
      "Inspiring Testimonial: How Aura Albaladejo Transformed Their Business with DNA Growth",
    videoUrl: "https://www.youtube.com/embed/Y1o2l-ASz1g?si=zQzwRHHsCVSLXQyJ",
  },
  {
    title:
      "Customer Success Story: Vanessa Firth Shares Their Experience with DNA Growth",
    videoUrl: "https://www.youtube.com/embed/Me4unvsjm-c?si=vIinyPBlZe-aLJz_",
  },
  {
    title: "Client Testimonial - Michael Calderone - Summer Atlantic Capital",
    videoUrl: "https://www.youtube.com/embed/ilIta3qkoqY?si=_rHxDUQHbl0XQCkk",
  },
  {
    title:
      "DNA Growth Client Testimonial: Michael Marziano Shares Their Journey to Success",
    videoUrl: "https://www.youtube.com/embed/FbYd78gDdEw?si=f9k-QSqJF7_9nT44",
  },
];

const arrowStyles = "absolute top-1/2 transform -translate-y-1/2 text-customBlue z-10 md:text-8xl text-7xl";

const Testimonial = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33); // default for larger screens

  const handleResize = () => {
    if (window.innerWidth <= 640) {
      setCenterSlidePercentage(100); // 100% for screens smaller than 640px
    } else if (window.innerWidth <= 1040) {
      setCenterSlidePercentage(50); // 50% for intermediate screen sizes
    } else {
      setCenterSlidePercentage(33.33); // 33.33% for larger screens
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full flex md:flex-row flex-col py-6 bg-[#3c005a] ">
      {/* Carousel on the left */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <Carousel
          showIndicators={false}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          className="w-full"
          centerMode={false}
          dynamicHeight={true}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`${arrowStyles} left-10 md:left-8 sm:top-[40%] top-[30%] `}
              >
                &#8249; {/* Left arrow */}
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`${arrowStyles} right-10 md:right-8 sm:top-[40%] top-[30%] `}
              >
                &#8250; {/* Right arrow */}
              </button>
            )
          }
        >
          {dummyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-4 m-4 border-2 border-gray-500 shadow-md bg-white transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="w-full ">
                <iframe
                  width="100%"
                  src={item.videoUrl}
                  title={`Video for ${item.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-64 object-cover rounded-md"
                ></iframe>
              </div>
              <h2 className="text-2xl font-bold text-customBlue mb-2 text-center">
                {item.title}
              </h2>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Text on the right */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 capitalize text-white">
        <div>
          <p className="italic text-yellow-400">YOUR SUCCESS IS OUR PRIDE</p>
          <h1 className="text-lg md:text-3xl font-bold text-white mb-8 text-left">
            HEAR FROM OUR HAPPY fRAC. cfo FAMILY
          </h1>
          <p className="text-white text-lg mb-2">
            A COMPLIMENTARY CALL WITH OUR SUBJECT MATTER EXPERTS TO SEE IF WE
            ARE THE RIGHT FIT.
          </p>
        </div>
        <div className="gap-4 flex flex-col">
          <div>
            <h1 className="text-lg font-semibold text-yellow-400">
              COMMUNICATION.
            </h1>
            <p className="text-sm">
              We promise a response within 24 hours on a working day. We love
              what we do & we’re all ears to your concerns and ideas.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-yellow-400">
              CUSTOMIZATION.
            </h1>
            <p className="text-sm">
              You can build a service package which suits you and scales up or
              down at your call. Our priority is to solve your problem, not sell
              an offer.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-yellow-400">
              GUARANTEE.
            </h1>
            <p className="text-sm">
              Your money, your control. Notify us within the initial two weeks &
              we will MAKE SURE you’re happy with the results. We stand behind
              our work quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
