import React from "react";
import { FcApproval } from "react-icons/fc";

const CFO = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 ">
      <div className="w-9/12 py-6 ">
        <div className="flex justify-center items-center pb-6">
          <h1 className="text-4xl font-roboto-slab">
            We Bring Everything to Your CFO Office
          </h1>
        </div>
        <div className="w-full flex justify-center gap-6 ">
          <div className="w-1/2 flex flex-col border-2 border-gra00 p-6 rounded-xl shadow-lg hover:scale-105 transform duration-300 hover:bg-white ">
            <div className="flex justify-center">
              <h4 className="text-2xl font-roboto-slab pb-6">
                Strategic CFO Support
              </h4>
            </div>
            <ul className="list-none">
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Business Plans, Pitch Decks, and Investor Memorandums
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Financial Planning and Analytics (Goal Setting/ Budgeting/
                Financial Modeling)
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Fundraising Support, Investor Relations, Board Reporting
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Due Diligence (Financial and Commercial)
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Valuation
              </li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:scale-105 transform duration-300 hover:bg-white">
            <div className="flex justify-center">
              <h1 className="text-2xl font-roboto-slab pb-6">
                CFO Tech and Automation
              </h1>
            </div>
            <ul className="list-none">
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Business Intelligence- Visualizations / Dashboards / MIS
                (PowerBI, Tableau, FathomHQ, Gsheets)
              </li>
              <li className="flex">
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
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Business Intelligence- Visualizations / Dashboards / MIS
                (PowerBI, Tableau, FathomHQ, Gsheets)
              </li>
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                Integrations (CRM, ERP, Payment Gateways, HRMS, BI Tools etc)
              </li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col border-2 border-gray-200 p-6 rounded-xl shadow-lg hover:scale-105 transform duration-300 hover:bg-white">
            <div className="flex justify-center">
              <h1 className="text-2xl font-roboto-slab pb-6">
                Accounting and Controller
              </h1>
            </div>
            <ul className="list-none ">
              <li className="flex">
                <span className="pt-1 mr-4">
                  <FcApproval />
                </span>
                ERP and Accounting Implementation + Maintenance (NetSuite, QBO,
                Xero, Zoho, Sage QBD etc)
              </li>
              <li className="flex">
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
              <li className="flex">
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
