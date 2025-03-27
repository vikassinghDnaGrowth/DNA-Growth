import { memo } from "react";
import logo from "../assets/DNA Logo (White).png";
import { FaLinkedin } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

const Footer = memo(() => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img
              src={logo}
              alt="Your Company Logo"
              className="h-14"
              loading="lazy"
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col w-full justify-around md:flex-row md:justify-end md:gap-6 ">
            <p>
              <a href="https://www.linkedin.com/company/dnagrowth/">
                <FaLinkedin className="text-2xl cursor-pointer text-white" />
              </a>
            </p>
            <p className="flex gap-2">
              <MdOutlineMail className="text-2xl cursor-pointer text-white" />:
              <a
                href="mailto:hello@dnagrowth.com"
                className="hover:text-gray-400"
              >
                hello@dnagrowth.com
              </a>
            </p>
            <p className="flex gap-2">
              <TbPhoneCall className="text-2xl cursor-pointer text-white" />:{" "}
              <a href="tel:+16199404535" className="hover:text-gray-400">
                +1 (619) 940-4535
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-400">
          &copy; 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

// Set the display name manually
Footer.displayName = "Footer";

export default Footer;
