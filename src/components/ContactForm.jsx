import React, { useState } from "react";
import Card from "./Card";
import Canda from "../assets/flags/Canda.webp";
import UAE from "../assets/flags/UAE.png";
import USA from "../assets/flags/USA.webp";
import India from "../assets/flags/India.svg.webp";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cardData = [
    {
      city: "US",
      address: "4010 Sorrento Valley Blvd, Suite 400, San Diego, CA 92121, USA",
      phone: "+1 (209) 215-5952",
      email: "hello@dnagrowth.com",
      flag: USA, // Add flag image
      bgColor: "#ffffff",
    },
    {
      city: "Canada",
      address:
        "99 Wyse Road, Suite 1100, Dartmouth, Nova Scotia, Canada, B3A 4S5",
      phone: "+1(902) 456.6473",
      email: "mmuise@muisemergersacquisitions.com",
      flag: Canda, // Add flag image
      bgColor: "#ffffff",
    },
    {
      city: "UAE",
      address:
        "DNA Growth FZE LLC, A-29-01-04-04 - Flamingo Villas, Ajman, UAE",
      phone: "+971 56149 8070",
      email: "hello@dnagrowth.com",
      flag: UAE, // Add flag image
      bgColor: "#ffffff",
    },
    {
      city: "India",
      address:
        "Skytech Towers, Plot no - D-176, Phase -8-B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055, India",
      phone: "+91 78143 19618",
      email: "hello@dnagrowth.com",
      flag: India, // Add flag image
      bgColor: "#FFFFFF",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Handle form submission logic here (e.g., send to an API)
      console.log(formData);

      // Reset form after submission
      setFormData({ name: "", email: "", contactNumber: "", message: "" });
    } catch (submissionError) {
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full  bg-[#226ba7] justify-around   py-10">
      <div className="flex flex-wrap justify-around w-full items-center  ">
        <div className="w-11/12 lg:w-7/12 md:w-11/12 sm:w-11/12  flex flex-wrap justify-start sm:justify-center ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-roboto-slab text-white sm:p-6 p-3 uppercase   ">
            Grow Your Business Today
          </h1>
          {cardData.map((card, index) => (
            <div key={index} className="p-2  md:w-1/2 sm:w-6/12 w-full   ">
              <Card
                city={card.city}
                address={card.address}
                phone={card.phone}
                email={card.email}
                flag={card.flag} // Pass flag prop
                bgColor={card.bgColor}
              />
            </div>
          ))}
        </div>
        <div className="w-11/12 lg:w-4/12  px-6  md:w-9/12  sm:w-9/12  rounded-lg ">
          <h1 className="text-2xl md:text-4xl text-center text-white font-bold  font-roboto-slab   uppercasez transform translate-y-[47px]">
            Get In Touch
          </h1>
          <form
            onSubmit={handleSubmit}
            className="shadow-lg shadow-gray-700 p-6 rounded-lg  mt-16"
          >
            {error && (
              <p className="text-red-600" aria-live="polite">
                {error}
              </p>
            )}
            <div className="mb-6">
              <label className="block  text-white" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="mt-1 block w-full p-2 border border-gray-900 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className=" bg-white text-black text-lg  py-2 px-12 rounded-xl  hover:bg-blue-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
