const LandingpageShimmer = () => {
  return (
    <div className="w-full h-screen bg-gray-300 animate-pulse">
      <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
        <div className="md:w-11/12 sm:w-10/12 w-full px-2 sm:px-0 flex flex-col items-center justify-center space-y-4">
          <div className="w-full animate-pulse">
            <div className="bg-gray-400 h-8 rounded-md w-3/4 mx-auto mb-4"></div>
            <div className="bg-gray-400 h-6 rounded-md w-2/3 mx-auto mb-6"></div>
          </div>

          <div className="w-full animate-pulse">
            <div className="bg-gray-400 h-10 rounded-md w-3/4 mx-auto"></div>
            <div className="bg-gray-400 h-4 rounded-md w-2/3 mx-auto mt-2"></div>
          </div>

          <div className="w-full animate-pulse">
            <div className="bg-gray-400 h-12 rounded-md w-1/3 mx-auto mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingpageShimmer;
