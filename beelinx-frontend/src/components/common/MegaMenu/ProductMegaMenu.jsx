import React from "react";
import { Link } from "react-router-dom";

export default function ProductMegaMenu() {
  return (
    <div className="w-[1250px] bg-white shadow-2xl rounded-xl p-6 grid grid-cols-5 gap-8 text-gray-800">
      {/* 🔹 Core Fintech APIs */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Core Fintech APIs
        </h3>
        <ul className="space-y-3 text-[12px]">
          {[
            {
              name: "Collect",
              desc: "Virtual Accounts, UPI QR/Intent",
              to: "/collect",
            },
            {
              name: "Pay",
              desc: "IMPS, NEFT, RTGS, UPI",
              to: "/pay",
            },
            {
              name: "Verify",
              desc: "Account, PAN, Aadhaar",
              to: "/verify",
            },
            {
              name: "Reconcile",
              desc: "Auto-Reconciliation, Settlement Reports",
              to: "/reconcile",
            },
            {
              name: "Authorize",
              desc: "UPI AutoPay, e-Sign",
              to: "/authorize",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center font-medium text-[15px] px-2 py-1"
              >
                {item.name}
              </Link>
              {item.desc && (
                <p className="text-[12px] text-gray-500 ml-2">{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Payments & Collections */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Payments & Collections
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Smart Invoicing Tool",
              desc: "With UPI QR/links",
              to: "/smart-invoicing",
            },
            {
              name: "Recurring Payment Billing Engine",
              desc: "AutoPay powered",
              to: "/recurring-billing",
            },
            {
              name: "Virtual Account Collections Dashboard",
              desc: "With reconciliation",
              to: "/virtual-dashboard",
            },
            {
              name: "Refund Automation Module",
              to: "/refund-automation",
            },
            {
              name: "Multi-Channel Payment Gateway",
              desc: "UPI, IMPS, NEFT, RTGS combined",
              to: "/multi-gateway",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center font-medium text-[15px] px-2 py-1"
              >
                {item.name}
              </Link>
              {item.desc && (
                <p className="text-[12px] text-gray-500 ml-2">{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Payouts & Disbursements */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Payouts & Disbursements
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Bulk Payout Engine",
              desc: "IMPS/NEFT/RTGS",
              to: "/bulk-payout",
            },
            {
              name: "Salary & Payroll Disbursement",
              to: "/salary-api",
            },
            {
              name: "Vendor Payout Manager",
              to: "/vendor-payout",
            },
            {
              name: "Cashback & Reward Payout Engine",
              to: "/reward-engine",
            },
            {
              name: "Petty Cash / Employee Wallets",
              to: "/petty-wallets",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center font-medium text-[15px] px-2 py-1"
              >
                {item.name}
              </Link>
              {item.desc && (
                <p className="text-[12px] text-gray-500 ml-2">{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 Identity & Compliance */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Identity & Compliance
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Digital KYC Gateway",
              desc: "PAN + Aadhaar + Bank verification",
              to: "/kyc-gateway",
            },
            {
              name: "Fraud Prevention & Risk Scoring",
              to: "/fraud-risk",
            },
            {
              name: "Payroll Compliance Manager",
              to: "/payroll-compliance",
            },
            {
              name: "Tax Payment Gateway",
              desc: "GST/TDS integration",
              to: "/tax-payment",
            },
            {
              name: "e-Sign Document Workflow Manager",
              to: "/esign-manager",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center font-medium text-[15px] px-2 py-1"
              >
                {item.name}
              </Link>
              {item.desc && (
                <p className="text-[12px] text-gray-500 ml-2">{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔹 White-Label & Platform Products */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          White-Label & Platform Products
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "White-Label Neobank App",
              desc: "For MSMEs, NBFCs, fintechs",
              to: "/neobank-app",
            },
            {
              name: "White-Label Merchant Super App",
              desc: "QR, payouts, credit",
              to: "/merchant-app",
            },
            {
              name: "Subscription Billing SaaS",
              desc: "For SaaS, D2C brands",
              to: "/subscription-saas",
            },
            {
              name: "Utility/Challan Collection Portal",
              desc: "Govt/PSU focused",
              to: "/utility-portal",
            },
            {
              name: "University/School Fee Collection Portal",
              to: "/education-fee",
            },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="flex items-center font-medium text-[14px] px-2 py-1"
              >
                {item.name}
              </Link>
              {item.desc && (
                <p className="text-[12px] text-gray-500 ml-2">{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
