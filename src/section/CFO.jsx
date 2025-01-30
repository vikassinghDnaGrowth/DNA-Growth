import { FcApproval } from "react-icons/fc";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const CFO = () => {
  useGSAP(() => {
    // Animating the span elements first (fade-in)
    gsap.from(".card1", {
      opacity: 0, // Start with opacity 0
      x: 60, // Start with a slight upward offset
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".card1",
        start: "top 30%",
        end: "top 85%",
        scrub: true,
      },
    });
    // Animating the h1 elements after the span elements (fade-in with a delay)
    gsap.from(".card3", {
      opacity: 0,
      x: -60, // Start with horizontal offset
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".card3",
        start: "top 30%",
        end: "top 85%",
        scrub: true,
      },
    });
    gsap.from(".card2", {
      opacity: 0,
      scale: 0.5,
      y: 60,
      duration: 1,

      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".card2",
        start: "top 50%",
        end: "top 75%",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div className="w-full h-auto py-8 flex justify-center bg-[rgb(251,253,255)]  ">
      <div className="w-full max-w-7xl  px-4">
        {/* Heading Section */}
        <div className="flex sm:justify-center justify-start items-center  pb-6">
          <h1 className= " text-2xl sm:text-4xl font-semibold font-roboto-slab text-[rgb(22,103,161)]  text-center capitalize">
            We Bring Everything to Your CFO Office
          </h1>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Strategic CFO Support Card */}
          <div className="card1 flex flex-col border-2 border-gray-200 p-6  rounded-xl shadow-lg hover:scale-105 transform duration-300 hover:bg-[rgb(136,169,192)] hover:text-white  ">
            <div className="flex justify-start">
              <h4 className="text-xl sm:text-3xl font-roboto-slab pb-6 capitalize">
                Strategic CFO Support
              </h4>
            </div>
            <ul className="list-none space-y-4 text-md">
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Business Plans, Pitch Decks, and Investor Memorandums
              </li>
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Financial Planning and Analytics (Goal Setting/ Budgeting/
                Financial Modeling)
              </li>
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Fundraising Support, Investor Relations, Board Reporting
              </li>
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Due Diligence (Financial and Commercial)
              </li>
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Valuation
              </li>
            </ul>
          </div>

          {/* CFO Tech and Automation Card */}
          <div className="card2 flex flex-col border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:scale-105 transform duration-300 hover:bg-[rgb(136,169,192)] hover:text-white  ">
            <div className="flex justify-start">
              <h1 className="text-xl sm:text-3xl font-roboto-slab pb-6 capitalize">
                CFO Tech and Automation
              </h1>
            </div>
            <ul className="list-none space-y-4 text-md">
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Business Intelligence- Visualizations / Dashboards / MIS
                (PowerBI, Tableau, FathomHQ, Gsheets)
              </li>
              <li className="flex  ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Automation (Full ETL, Rippling, Python, REST APIs, Zapier,
                G-Accon)
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Integrations (CRM, ERP, Payment Gateways, HRMS, BI Tools etc)
              </li>
            </ul>
          </div>

          {/* Accounting and Controller Card */}
          <div className="card3 flex flex-col border-2  border-gray-200 p-6 rounded-xl shadow-lg hover:scale-105 transform duration-300 hover:bg-[rgb(136,169,192)] hover:text-white  ">
            <div className="flex justify-start">
              <h1 className="text-xl sm:text-3xl font-roboto-slab pb-6 capitalize">
                Accounting and Controller
              </h1>
            </div>
            <ul className="list-none space-y-4 text-md">
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                ERP and Accounting Implementation + Maintenance (NetSuite, QBO,
                Xero, Zoho, Sage QBD etc)
              </li>
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                AR/AP, Invoicing, Payroll, Reconciliation (Bill.com, Chargebee,
                Gusto, Justworks, ADP etc)
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Monthly Reporting and Closing (PNL, BS, CF, MIS updation)
              </li>
              <li className="flex ">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Staffing Support (Cost Optimization, Outsourcing)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFO;
