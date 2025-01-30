import { useEffect, useRef } from "react";

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
        <source
          src="https://azuresqldb.blob.core.windows.net/website-data/Video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center h-full gap-4 relative z-10">
        <div className="md:w-11/12 w-10/12 flex flex-col items-center justify-center h-full ">
          <div className="md:w-11/12">
            <header className="text-md md:text-2xl">
              <div className="text-2xl font-montserrat font-bold animate-fadeInUp">
                <span className=" text-[rgb(185,22,128)]">SPEED.</span>{" "}
                <span className="text-[rgb(22,103,161)]">SUCCESS.</span>{" "}
                <span className="text-[rgb(101,1,119)]">SCALE.</span>
              </div>
              <h1 className="md:text-[3rem] text-2xl font-semibold font-montserrat pt-4 leading-tight pb-4 animate-scaleUp2">
                Supercharge Your CFO Practice by{" "}
                <span className="text-[rgb(22,103,161)]">2X</span> with
                <span className="block">
                  White-Label Finance & Accounting Solutions
                </span>
              </h1>
            </header>
            <div className="text-white">
              <p className="py-2 md:text-lg text-md font-montserrat capitalize animate-scaleUp">
                Drowning in financial reports and spreadsheets? Imagine
                offloading accounting, bookkeeping, modeling, and daily
                operations without a big team. DNA Growth helps fractional CFOs
                scale faster by handling the behind-the-scenes work that boosts
                client satisfaction—all under your brand.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="border-2 bg-[rgb(22,103,161)] hover:rounded-xl block px-[12px] py-[11px] text-white text-xl font-semibold mt-4 capitalize hover:bg-white hover:text-[rgb(22,103,161)] hover:scale-105 hover:transform duration-300">
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
