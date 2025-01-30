

const WhyUs = () => {
  const Data = [
    {
      image:
        "https://azuresqldb.blob.core.windows.net/website-data/cfo-website/whyus/Cut Your Costs by.jpg",
      title: "Cut Your Costs by ∼50%",
      description:
        "You don’t need to spend on a full in-house team. We give you the power of 150+ finance and tech experts, and you only pay for what you need. Scale up or down at your will.",
    },
    {
      image:
        "https://azuresqldb.blob.core.windows.net/website-data/cfo-website/whyus/Custom%20Tech%20Integration.jpg",
      title: "2X Clients (& Growth)",
      description:
        "Fractional CFOs see their practice scale by 2x within 6-8 months. Imagine being free and confident to bring on more clients, knowing everything is handled.",
    },
    {
      image:
        "https://azuresqldb.blob.core.windows.net/website-data/cfo-website/whyus/Focus on Strategy.jpg",
      title: "Focus on Strategy, Not Grind",
      description:
        "Free up your (& your team’s) time to help your clients grow. We’ll handle everything from basic bookkeeping to complex financial analysis & planning.",
    },
    {
      image:
        "https://azuresqldb.blob.core.windows.net/website-data/cfo-website/whyus/Custom Tech Integration.jpg",
      title: "Custom Tech Integration",
      description:
        "From Sage Intacct, Python, FathomHQ to QBO, NetSuite, we streamline and upgrade your existing tech stack so it works for you—not the other way around.",
    },
    {
      image:
        "https://azuresqldb.blob.core.windows.net/website-data/cfo-website/whyus/No more.jpg",
      title: "No More Fire Drill, Only Clarity",
      description:
        "With our proactive financial reporting and automated workflows, you’ll always have the right data, right when you need it. No scrambling.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-6 w-full  bg-white">
      <div className="w-full  text-center sm:pb-6 pb-4 flex flex-col">
        <h3 className="text-lg pb-3 text-[rgb(22,103,161)] md:text-4xl font-bold font-montserrat  capitalize px-2  hidden sm:block">
          Why Fractional CFOs Love Working with Us ?
        </h3>
        <span className="sm:hidden text-lg md:text-4xl font-bold  capitalize px-2">
          Why Fractional CFOs Love
        </span>
        <span className="sm:hidden text-lg md:text-4xl font-bold  capitalize px-2">
          Working with Us ?
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          {Data.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 shadow-xl rounded-lg p-4 min-h-96 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover mb-4 hover:scale-105 transform duration-300 cursor-pointer"
              />
              <h4 className="text-lg font-semibold capitalize">{item.title}</h4>
              <p className="text-gray-600 ">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Center Card */}
        <div className=" h-full flex justify-center items-center">
          <div className="border-2 border-gray-200 shadow-xl rounded-lg p-4  flex flex-col justify-center">
            <img
              src={Data[2].image}
              alt={Data[2].title}
              className="h-64 w-full object-cover mb-4 hover:scale-105 transform duration-300 cursor-pointer"
            />
            <h4 className="text-lg font-semibold ">{Data[2].title}</h4>
            <p className="text-gray-600">{Data[2].description}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          {Data.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-200 shadow-xl rounded-lg p-4 min-h-96 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover mb-4 hover:scale-105 transform duration-300 cursor-pointer"
              />
              <h4 className="text-lg font-semibold capitalize ">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
