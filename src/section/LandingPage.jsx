import { useEffect, useRef } from "react";
import video from "../assets/videos/Video (1).mp4";
const LandingPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleVideoError = () => {
    console.error("Video failed to load.");
  };

  return (
    <div className="w-full bg-white lg:h-screen min-h-screen md:pb-10 text-white relative overflow-hidden h-[80vh]">
      {/* Background Video */}
      <video
        autoPlay
        ref={videoRef}
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover blur-[4px]"
        onError={handleVideoError}
      >
        <source src={video} type="video/mp4" loading="Lazy" />
      </video>

      {/* Content */}
      <div className="w-full flex flex-col  justify-center items-center h-full  relative z-10">
        <div className="md:w-11/12 sm:w-10/12 w-full px-2 sm:px-0 flex flex-col items-center justify-center ">
          <div className="md:w-11/12  ">
            <header className="text-md md:text-2xl">
              <div className="text-xl sm:text-2xl font-montserrat font-bold animate-fadeInUp text-center md:text-start">
                <span className=" text-[rgb(185,22,128)] ">SPEED.</span>{" "}
                <span className="text-[rgb(22,103,161)]">SUCCESS.</span>{" "}
                <span className="text-[rgb(101,1,119)]">SCALE.</span>
              </div>
              <h1 className="md:text-[2rem] xl:text-[3rem]  text-lg font-semibold font-montserrat pt-4 leading-tight pb-4 animate-scaleUp2 text-center md:text-start">
                Supercharge Your CFO Practice by{" "}
                <span className="text-[rgb(22,103,161)]">2X</span> with
                <span className="block text-center md:text-start">
                  White-Label Finance & Accounting Solutions
                </span>
              </h1>
            </header>
            <div className="text-white">
              <p className="py-2 sm:text-md xl:text-lg text-sm font-montserrat capitalize animate-scaleUp text-center md:text-start">
                Drowning in financial reports and spreadsheets? Imagine
                offloading accounting, bookkeeping, modeling, and daily
                operations without a big team. DNA Growth helps fractional CFOs
                scale faster by handling the behind-the-scenes work that boosts
                client satisfaction—all under your brand.
              </p>
            </div>
            <div className="flex  justify-center items-center">
              <button className="border-2 text-center bg-[rgb(22,103,161)] hover:rounded-xl block sm:px-[12px] sm:py-[11px]  px-[5px] py-[6px] text-white text-lg sm:text-xl text-nowrap font-semibold mt-4 capitalize hover:bg-white hover:text-[rgb(22,103,161)] transition-all duration-700  ">
                Explore Partnership Benefits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
