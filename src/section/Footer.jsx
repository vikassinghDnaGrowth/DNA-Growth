import { memo } from "react";
import logo from "../assets/DNA Logo (White).png";
import { FaLinkedin } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

const Footer = memo(() => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Copyright */}
        <div className=" flex flex-col  md:flex-row md:gap-24 items-center gap-4 mb-4 md:mb-0 ">
          <img
            src={logo}
            alt="Your Company Logo"
            className="h-14"
            loading="lazy"
          />
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} DNA Growth. All Rights Reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <a
            href="https://www.linkedin.com/company/dnagrowth/"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl cursor-pointer text-white hover:text-gray-400" />
          </a>
          <p className="flex gap-2 items-center">
            <MdOutlineMail className="text-2xl cursor-pointer text-white" />
            <a
              href="mailto:hello@dnagrowth.com"
              className="hover:text-gray-400"
            >
              hello@dnagrowth.com
            </a>
          </p>
          <p className="flex gap-2 items-center">
            <TbPhoneCall className="text-2xl cursor-pointer text-white" />
            <a href="tel:+16199404535" className="hover:text-gray-400">
              +1 (619) 940-4535
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

// Set the display name manually
Footer.displayName = "Footer";

export default Footer;
