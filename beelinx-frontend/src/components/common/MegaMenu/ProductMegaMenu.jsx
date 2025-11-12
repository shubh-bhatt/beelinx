import React from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  DownloadCloud,
  CheckCircle,
  Repeat,
  Key,
  FileText,
  Server,
  ShieldCheck,
  Users,
  Package,
  Truck,
  Gift,
  UserCheck,
  Send,
  Wallet,
  Banknote,
  Building2,
  BookOpen,
  ClipboardList,
} from "lucide-react";

export default function ProductMegaMenu() {
  const iconClass = "inline-block mr-1 h-6 w-6 text-sky-600";

  return (
    <div className="w-[1250px] bg-white shadow-2xl rounded-xl p-6 grid grid-cols-5 gap-8 text-gray-800">
      {/* 🔹 Core Fintech APIs */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px]  mb-4 ">
          Core Fintech APIs
        </h3>
        <ul className="space-y-3 text-[12px]">
          {[
            {
              icon: DownloadCloud,
              name: "Collect",
              desc: "Virtual Accounts, UPI QR/Intent",
              to: "/collect",
            },
            {
              icon: CreditCard,
              name: "Pay",
              desc: "IMPS, NEFT, RTGS, UPI",
              to: "/pay",
            },
            {
              icon: CheckCircle,
              name: "Verify",
              desc: "Account, PAN, Aadhaar",
              to: "/verify",
            },
            {
              icon: Repeat,
              name: "Reconcile",
              desc: "Auto-Reconciliation, Settlement Reports",
              to: "/reconcile",
            },
            {
              icon: Key,
              name: "Authorize",
              desc: "UPI AutoPay, e-Sign",
              to: "/authorize",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] px-2 py-1 "
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                {item.desc && (
                  <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 Payments & Collections */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px]  mb-4">
          Payments & Collections
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: FileText,
              name: "Smart Invoicing Tool",
              desc: "With UPI QR/links",
              to: "/smart-invoicing",
            },
            {
              icon: Repeat,
              name: "Recurring Payment Billing Engine",
              desc: "AutoPay powered",
              to: "/recurring-billing",
            },
            {
              icon: Server,
              name: "Virtual Account Collections Dashboard",
              desc: "With reconciliation",
              to: "/virtual-dashboard",
            },
            {
              icon: Wallet,
              name: "Refund Automation Module",
              to: "/refund-automation",
            },
            {
              icon: Banknote,
              name: "Multi-Channel Payment Gateway",
              desc: "UPI, IMPS, NEFT, RTGS combined",
              to: "/multi-gateway",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] px-2 py-1"
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                {item.desc && (
                  <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 Payouts & Disbursements */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px]  mb-4">
          Payouts & Disbursements
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: Send,
              name: "Bulk Payout Engine",
              desc: "IMPS/NEFT/RTGS",
              to: "/bulk-payout",
            },
            {
              icon: UserCheck,
              name: "Salary & Payroll Disbursement",
              to: "/salary-api",
            },
            {
              icon: Truck,
              name: "Vendor Payout Manager",
              to: "/vendor-payout",
            },
            {
              icon: Gift,
              name: "Cashback & Reward Payout Engine",
              to: "/reward-engine",
            },
            {
              icon: Wallet,
              name: "Petty Cash / Employee Wallets",
              to: "/petty-wallets",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] px-2 py-1"
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                {item.desc && (
                  <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
                )}
              </li>
            );
          })}
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
              icon: ShieldCheck,
              name: "Digital KYC Gateway",
              desc: "PAN + Aadhaar + Bank verification",
              to: "/kyc-gateway",
            },
            {
              icon: CheckCircle,
              name: "Fraud Prevention & Risk Scoring",
              to: "/fraud-risk",
            },
            {
              icon: ClipboardList,
              name: "Payroll Compliance Manager",
              to: "/payroll-compliance",
            },
            {
              icon: FileText,
              name: "Tax Payment Gateway",
              desc: "GST/TDS integration",
              to: "/tax-payment",
            },
            {
              icon: Key,
              name: "e-Sign Document Workflow Manager",
              to: "/esign-manager",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-custom text-[15px] px-2 py-1"
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                {item.desc && (
                  <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
                )}
              </li>
            );
          })}
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
              icon: Building2,
              name: "White-Label Neobank App",
              desc: "For MSMEs, NBFCs, fintechs",
              to: "/neobank-app",
            },
            {
              icon: CreditCard,
              name: "White-Label Merchant Super App",
              desc: "QR, payouts, credit",
              to: "/merchant-app",
            },
            {
              icon: FileText,
              name: "Subscription Billing SaaS",
              desc: "For SaaS, D2C brands",
              to: "/subscription-saas",
            },
            {
              icon: Server,
              name: "Utility/Challan Collection Portal",
              desc: "Govt/PSU focused",
              to: "/utility-portal",
            },
            {
              icon: BookOpen,
              name: "University/School Fee Collection Portal",
              to: "/education-fee",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[14px] px-2 py-1"
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                {item.desc && (
                  <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
