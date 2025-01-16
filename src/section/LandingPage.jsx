// import contactUs from "../assets/unnamed-removebg-preview.png";
import langingPageImg from "../assets/langingPage.jpg";
// import landingPage from "../assets/output-onlinegiftools (1).gif";
// import bgImage from "../assets/images.png";
// import testImg from "../assets/test.jpg";
// import landingpage from "../assets/landingpage.gif";
const LandingPage = () => {
  return (
    <div className="w-full bg-white lg:h-screen h-auto md:pb-10  text-black">
      <div className="w-full flex flex-col md:flex-row justify-center items-center h-full gap-4 ">
        <div className="md:w-9/12 w-10/12   flex gap-4 flex-col items-center justify-center h-full  ">
          <div className="md:w-8/12 mt-6 ">
            <header className="text-md md:text-2xl   ">
              <div className="text-2xl font-montserrat font-bold">
                <span className=" text-[rgb(185,22,128)]  ">SPEED.</span>{" "}
                <span className="text-[rgb(22,103,161)]"> SUCCESS.</span>{" "}
                <span className="text-[rgb(101,1,119)]">SCALE.</span>
                {/* <img className="" src={landingPage} alt="" /> */}
              </div>
              <h1 className="md:text-4xl text-2xl font-semibold font-montserrat pt-4 leading-tight pb-4  ">
                Supercharge Your CFO Practice by{" "}
                <span className="text-[rgb(22,103,161)]">2x</span> with
                <span className="block">
                  White-Label Finance & Accounting Solutions
                </span>
              </h1>
            </header>
            <div className="text-black">
              <p className="py-2 md:text-md text-sm font-montserrat  capitalize">
                Drowning in financial reports and spreadsheets? Imagine
                offloading accounting, bookkeeping, modeling, and daily
                operations without a big team. DNA Growth helps fractional CFOs
                scale faster by handling the behind-the-scenes work that boosts
                client satisfaction—all under your brand.
              </p>
            </div>

            <button className="border-2 bg-[rgb(22,103,161)]  rounded-xl block px-[12px] py-[10px]   text-white text-md font-semibold mt-4 capitalize">
              Let’s Level Up Your practice
            </button>
          </div>
        </div>
        <div
          // style={{
          //   backgroundImage: `url(${bgImage})`,
          //   backgroundSize: "contain",
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          // }}
          className="md:w-6/12 lg:w-12/12 w-10/12 h-full flex items-center justify-center "
        >
          <img
            src={langingPageImg}
            alt="Contact Us"
            className="w-full object-cover     "
          />
        </div>
      </div>
    </div>
    // <div className="w-full  flex flex-col">
    //   {/* Top section with image */}
    //   <div className="w-full   flex items-center justify-center overflow-hidden">
    //     <img
    //       src={landingpage}
    //       alt="Landing Page Visual"
    //       className="object-cover w-full h-full   "
    //     />
    //   </div>
    // </div>
  );
};

export default LandingPage;
