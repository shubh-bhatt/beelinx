import React from "react";
import { Link } from "react-router-dom";

export default function ServicesMegaMenu() {
  return (
    <div className="w-[1250px] bg-white shadow-2xl rounded-xl p-6 grid grid-cols-5 gap-8 text-gray-800">
      {/* 🔹 Integration & Technical Services */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Integration & Technical Services
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "API Onboarding & Sandbox Support",
              to: "/services/api-onboarding",
            },
            {
              name: "Custom Connector Builds",
              desc: "ERP, SAP, Tally, Accounting systems",
              to: "/services/custom-connectors",
            },
            {
              name: "Deployment & Cloud Hosting Support",
              desc: "AWS, on-premise environments",
              to: "/services/cloud-hosting",
            },
            {
              name: "System Integration with Core Banking",
              desc: "CBS, LOS, LMS integration",
              to: "/services/system-integration",
            },
            {
              name: "Custom UI/UX Development",
              desc: "For white-label fintech apps",
              to: "/services/ui-ux",
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

      {/* 🔹 Operational Services */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Operational Services
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Payment Reconciliation as a Managed Service",
              to: "/services/payment-reconciliation",
            },
            {
              name: "Bulk Transaction Processing",
              desc: "Batch handling for payouts/collections",
              to: "/services/bulk-transactions",
            },
            {
              name: "Settlement Operations",
              desc: "T+0, T+1 premium settlements",
              to: "/services/settlement-ops",
            },
            {
              name: "Dispute Resolution & Chargeback Management",
              to: "/services/dispute-resolution",
            },
            {
              name: "Refund & Failed Transaction Handling",
              to: "/services/refund-handling",
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

      {/* 🔹 Compliance & Risk Services */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Compliance & Risk Services
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Regulatory Compliance Advisory",
              desc: "RBI, NPCI, SEBI guidelines",
              to: "/services/compliance-advisory",
            },
            {
              name: "AML/CFT & Fraud Risk Monitoring",
              to: "/services/fraud-monitoring",
            },
            {
              name: "Transaction Monitoring & Alerting",
              desc: "Fraud and anomaly detection",
              to: "/services/transaction-alerting",
            },
            {
              name: "Data Privacy & Security Compliance Setup",
              desc: "ISO, PCI-DSS, SOC2 standards",
              to: "/services/data-privacy",
            },
            {
              name: "Audit & Certification Support",
              desc: "System readiness for inspections",
              to: "/services/audit-support",
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

      {/* 🔹 Customer & Merchant Services */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Customer & Merchant Services
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Merchant Onboarding",
              desc: "Manual KYC & document verification",
              to: "/services/merchant-onboarding",
            },
            {
              name: "Customer Support Helpdesk",
              desc: "Support for end-users of MSMEs",
              to: "/services/helpdesk",
            },
            {
              name: "Training Workshops",
              desc: "For MSMEs, govt staff, institutions",
              to: "/services/training",
            },
            {
              name: "Certification Programs",
              desc: "API usage & compliance readiness",
              to: "/services/certification",
            },
            {
              name: "Loyalty Program Design & Management",
              desc: "Campaign setup, reward operations",
              to: "/services/loyalty-program",
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

      {/* 🔹 Consulting & Advisory Services */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Consulting & Advisory Services
        </h3>
        <ul className="space-y-3">
          {[
            {
              name: "Fintech Business Process Consulting",
              desc: "Collections, payouts, compliance flows",
              to: "/services/fintech-consulting",
            },
            {
              name: "Digital Transformation Advisory",
              desc: "Moving MSMEs & govts to digital",
              to: "/services/digital-transformation",
            },
            {
              name: "Custom Reporting & MIS Services",
              desc: "Dashboards, GST/TDS reports",
              to: "/services/mis-reporting",
            },
            {
              name: "Smart City/Institutional Payment Consulting",
              to: "/services/smart-city",
            },
            {
              name: "Data Analytics & Insights Consulting",
              desc: "Credit scoring, consumer behavior",
              to: "/services/data-analytics",
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
    </div>
  );
}
