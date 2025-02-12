import image1 from "../assets/why-us/Cut Your Costs by-min.jpg";
import image2 from "../assets/why-us/2X Clients-min.jpg";
import image3 from "../assets/why-us/Focus on Strategy-min.jpg";
import image4 from "../assets/why-us/Custom Tech Integration-min.jpg";
import image5 from "../assets/why-us/No more-min.jpg";
const WhyUs = () => {
  const Data = [
    {
      image:image1,
      title: "Cut Your Costs by ∼50%",
      description:
        "You don’t need to spend on a full in-house team. We give you the power of 150+ finance and tech experts, and you only pay for what you need. Scale up or down at your will.",
    },
    {
      image:
        image2,
      title: "2X Clients (& Growth)",
      description:
        "Fractional CFOs see their practice scale by 2x within 6-8 months. Imagine being free and confident to bring on more clients, knowing everything is handled.",
    },
    {
      image:
       image3,
      title: "Focus on Strategy, Not Grind",
      description:
        "Free up your (& your team’s) time to help your clients grow. We’ll handle everything from basic bookkeeping to complex financial analysis & planning.",
    },
    {
      image:
        image4,
      title: "Custom Tech Integration",
      description:
        "From Sage Intacct, Python, FathomHQ to QBO, NetSuite, we streamline and upgrade your existing tech stack so it works for you—not the other way around.",
    },
    {
      image:
        image5,
      title: "No More Fire Drill, Only Clarity",
      description:
        "With our proactive financial reporting and automated workflows, you’ll always have the right data, right when you need it. No scrambling.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-6 w-full bg-white">
      {/* Header */}
      <div className="w-full text-center sm:pb-6 pb-4 flex flex-col">
        <h3 className="text-lg pb-3 text-[rgb(22,103,161)] md:text-4xl font-bold font-montserrat capitalize px-2 hidden sm:block">
          Why Fractional CFOs Love Working with Us?
        </h3>
        <span className="sm:hidden text-lg md:text-4xl font-bold capitalize px-2">
          Why Fractional CFOs Love
        </span>
        <span className="sm:hidden text-lg md:text-4xl font-bold capitalize px-2">
          Working with Us?
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-4">
          {Data.slice(0, 2).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        {/* Center Card */}
        <div className="h-full flex justify-center items-center">
          <Card {...Data[2]} large />
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-4">
          {Data.slice(3, 5).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, title, description, large = false }) => {
  return (
    <div
      className={`border-2 border-gray-200 shadow-md rounded-lg p-4 flex flex-col ${
        large ? "min-h-[400px]" : "min-h-96"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-48 sm:h-full  w-full  object-cover mb-4 hover:scale-105 transition-all duration-1000 cursor-pointer"
        loading="lazy"
        width={300}
        height={200}
      />
      <h4 className="text-lg font-semibold capitalize">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default WhyUs;   
