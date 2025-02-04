import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

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

const Testimonial = () => {
  console.log("Testimonial rendered");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dummyData.length) % dummyData.length
    );
  };


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".text1",
        start: "bottom 95%",
        end: "top 40%",
        scrub: true,
        deley: .5,
        // markers: true,
        
      },
    });
    tl.fromTo(
      ".text1",

      {
        opacity: 0,
        y: 100,

      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
      
    );
  });

 

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[rgb(251,253,255)] pb-12 pt-8  ">
      {/* Left Side: Carousel */}
      <div className="w-full md:w-5/12 mb-8 md:mb-0  rounded-lg  bg-black  p-4 m-4">
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {dummyData.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-full ">
                  <iframe
                    src={item.videoUrl}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-64 md:h-80"
                  ></iframe>
                  <div className="mt-4 text-center font-semibold text-lg px-4 text-yellow-400">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-yellow-500 p-2 rounded-full focus:outline-none text-6xl"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2  text-yellow-500 p-2 rounded-full focus:outline-none text-6xl"
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 capitalize text-black">
        <div>
          <p className="text1 italic text-yellow-500 font-montserrat font-bold">
            YOUR SUCCESS IS OUR PRIDE
          </p>
          <h1 className="text1 text-lg md:text-3xl font-bold text-[rgb(22,103,161)] mb-6 text-left">
            HEAR FROM OUR HAPPY fRAC. CFO FAMILY
          </h1>
          <p className="text1 text-black text-lg mb-2 font-arimo">
            A COMPLIMENTARY CALL WITH OUR SUBJECT MATTER EXPERTS TO SEE IF WE
            ARE THE RIGHT FIT.
          </p>
        </div>
        <div className="gap-4 flex flex-col">
          <div className="text1">
            <h1 className="text-lg font-semibold text-[rgb(185,22,128)]">
              COMMUNICATION.
            </h1>
            <p className="text-sm">
              We promise a response within 24 hours on a working day. We love
              what we do & we’re all ears to your concerns and ideas.
            </p>
          </div>
          <div className="text1">
            <h1 className="text-lg font-semibold text-[rgb(22,103,161)]">
              CUSTOMIZATION.
            </h1>
            <p className="text-sm">
              You can build a service package which suits you and scales up or
              down at your call. Our priority is to solve your problem, not sell
              an offer.
            </p>
          </div>
          <div className="text1">
            <h1 className="text-lg font-semibold text-[rgb(101,1,119)]">
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
