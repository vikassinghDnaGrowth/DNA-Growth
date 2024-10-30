import React from "react";

const Services = () => {
  const data = [
    {
      title: "Higher Unit Economics",
      description: "Regulated prices often result in higher margins in Canada.",
    },
    {
      title: "Cloud Cost Optimization",
      description:
        "Implementing best practices in cloud resource management can significantly reduce expenses.",
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Leveraging analytics enhances strategic planning and operational efficiency.",
    },
    {
      title: "Cybersecurity Investments",
      description:
        "Investing in robust security measures protects sensitive business data from breaches.",
    },
    // {
    //   title: "Agile Project Management",
    //   description:
    //     "Adopting agile methodologies improves project delivery times and team collaboration.",
    // },
   
    
  ];

  return (
    <div className="bg-customBlue text-white w-full   py-10">
      <div className=" ml-32  pb-12">
        <h1 className="font-roboto-slab  text-5xl pb-4">
          Let's Help You
        </h1>
        <span className="font-roboto-slab  text-5xl ">
          Focus On Your Mission
        </span>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="flex  border-l-2 border-white  ml-44  gap-24"
        >
          <div className="">
            <span className="flex items-center justify-center w-10 h-10 border-2 border-white bg-blue-950 rounded-full transform -translate-x-[55%] ">
              {index + 1}
            </span>
          </div>
          <div className="flex flex-col mb-10 gap-2">
            <p className="text-yellow-300 text-2xl">{item.title}</p>
            <p className="text-xl">{item.description}</p>
          </div>
        </div>
      ))}
      <button
        className="border-2 bg-customBlue w-48
       py-2  text-white text-xl rounded-3xl translate-x-[40%]"
      >
        Contact
      </button>
    </div>
  );
};

export default Services;
