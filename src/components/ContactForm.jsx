import  { useState } from "react";
import test from "../assets/img.jpg";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      setError("An error occurred while submitting the form.",submissionError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-start items-end   w-full  py-10 " style={{ backgroundImage: `url(${test})` , backgroundSize: 'cover', backgroundRepeat: 'no-repeat' ,  }}>
      <div className="w-full sm:w-9/12 lg:w-6/12  px-6 rounded-lg ">
        <h1 className="text-2xl md:text-4xl text-center text-white font-bold font-roboto-slab uppercase">
          Get In Touch
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" p-6 mt-2 rounded-lg  "
        >
          {error && (
            <p className="text-red-600" aria-live="polite">
              {error}
            </p>
          )}
          <div className="mb-3">
            <label className="block text-white" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              name="name"

              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full p-2  rounded-lg focus:outline-none focus:ring focus:ring-blue-300 "
              required
            />
          </div>
          <div className="mb-3">
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
              className="mt-1 block w-full p-2  rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-3">
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
              className="mt-1 block w-full p-2  rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-white" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              className="mt-1 block w-full p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-white text-black text-lg mt-2 py-2 px-12 rounded-xl hover:bg-yellow-400 hover:text-white transition duration-200"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
