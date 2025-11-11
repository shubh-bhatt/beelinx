import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  ShieldCheck,
  FileText,
  Banknote,
  Send,
  ClipboardList,
  Wallet,
  Repeat,
  CheckCircle,
  Key,
  Gift,
  Truck,
  Package,
  CreditCard,
  BookOpen,
  Server,
} from "lucide-react";

export default function SolutionsMegaMenu() {
  const iconClass = "inline-block mr-3 h-5 w-5 text-sky-600";

  return (
    <div className="w-[1300px] bg-white shadow-2xl rounded-xl p-6 grid grid-cols-5 gap-8 text-gray-800">
      {/* 🔹 A. MSME-Focused Solutions */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          MSME-Focused Solutions
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: CreditCard,
              name: "Digital Collections Suite",
              desc: "Smart invoicing + UPI QR/links + VA collections + reconciliation service",
              to: "/solutions/digital-collections",
            },
            {
              icon: ClipboardList,
              name: "MSME Payroll & Compliance Solution",
              desc: "Salary payout API + account verification + PF/ESI compliance support",
              to: "/solutions/msme-payroll",
            },
            {
              icon: Banknote,
              name: "MSME Lending/Working Capital Solution",
              desc: "KYC APIs + e-Sign + IMPS disbursal + AutoPay EMI collection",
              to: "/solutions/msme-lending",
            },
            {
              icon: Repeat,
              name: "Subscription Billing & Recurring Payments",
              desc: "AutoPay API + billing dashboard + reconciliation service",
              to: "/solutions/subscription-billing",
            },
            {
              icon: Truck,
              name: "Vendor Management & Payouts",
              desc: "Vendor verification + bulk payout API + MIS reporting",
              to: "/solutions/vendor-management",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] "
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 B. Government & Institutional Solutions */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Government & Institutional
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: ShieldCheck,
              name: "Direct Benefit Transfer (DBT) Platform",
              desc: "Verified bulk payouts + MIS + compliance advisory",
              to: "/solutions/dbt-platform",
            },
            {
              icon: Users,
              name: "Scholarship & Pension Disbursement",
              desc: "VA-based collection + beneficiary verification + bulk disbursal",
              to: "/solutions/scholarship-pension",
            },
            {
              icon: Server,
              name: "Municipal Revenue Collection",
              desc: "UPI/QR for taxes, challans, utilities + reconciliation",
              to: "/solutions/municipal-revenue",
            },
            {
              icon: Building2,
              name: "Smart City Payments Hub",
              desc: "Parking, metro, utilities integrated via one platform",
              to: "/solutions/smart-city",
            },
            {
              icon: Key,
              name: "Govt Contract e-Sign & Payment",
              desc: "e-Sign workflow + escrow VA + compliance service",
              to: "/solutions/govt-esign",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] "
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 C. Enterprise & BFSI Solutions */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Enterprise & BFSI
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: CheckCircle,
              name: "Digital Onboarding & KYC Stack",
              desc: "PAN/Aadhaar verification + e-Sign + fraud prevention",
              to: "/solutions/digital-onboarding",
            },
            {
              icon: Banknote,
              name: "Lending-as-a-Service (for NBFCs/Banks)",
              desc: "KYC + disbursement APIs + UPI AutoPay + risk analytics",
              to: "/solutions/lending-service",
            },
            {
              icon: ShieldCheck,
              name: "Escrow & Marketplace Payments",
              desc: "Virtual accounts + escrow + auto split + compliance",
              to: "/solutions/escrow-marketplace",
            },
            {
              icon: Send,
              name: "Corporate Payout Solution",
              desc: "Salary/vendor/incentive payouts + settlement service",
              to: "/solutions/corporate-payout",
            },
            {
              icon: FileText,
              name: "Insurance Claim & Premium Payment",
              desc: "Claim disbursement + AutoPay premium collection",
              to: "/solutions/insurance-claims",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] "
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 D. Education & Healthcare Solutions */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Education & Healthcare
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: BookOpen,
              name: "University/School Fee Management",
              desc: "Fee collection via VA/QR + auto reconciliation",
              to: "/solutions/education-fees",
            },
            {
              icon: Users,
              name: "Skill Development Stipend Management",
              desc: "Bulk verified payouts under govt schemes",
              to: "/solutions/skill-stipend",
            },
            {
              icon: Wallet,
              name: "Healthcare Payments & Claims Hub",
              desc: "Hospital collections + insurance claim disbursal",
              to: "/solutions/healthcare-payments",
            },
            {
              icon: Building2,
              name: "Rental & Housing Society Payments",
              desc: "Rent/maintenance via VA/QR + e-Sign rental agreements",
              to: "/solutions/rental-payments",
            },
            {
              icon: FileText,
              name: "Exam & Certification Payment Gateway",
              desc: "UPI/VA fee collection + automated receipts",
              to: "/solutions/exam-payments",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px] "
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 🔹 E. Specialized / Horizontal Solutions */}
      <div>
        <h3 className="text-[#4CB4FB] font-semibold text-[16px] mb-4">
          Specialized / Horizontal
        </h3>
        <ul className="space-y-3">
          {[
            {
              icon: ShieldCheck,
              name: "Fraud & Compliance Monitoring",
              desc: "Transaction monitoring + anomaly detection",
              to: "/solutions/fraud-monitoring",
            },
            {
              icon: Package,
              name: "Utility Bill Collection (BBPS-like)",
              desc: "VA/QR for electricity, gas, water + reconciliation",
              to: "/solutions/utility-bbps",
            },
            {
              icon: Gift,
              name: "Crowdfunding & NGO Donation",
              desc: "VA/UPI collection + donor verification + CSR reporting",
              to: "/solutions/crowdfunding",
            },
            {
              icon: Send,
              name: "Gig Economy Payout Solution",
              desc: "Payouts for riders/drivers/freelancers + MIS",
              to: "/solutions/gig-payouts",
            },
            {
              icon: Banknote,
              name: "Cross-Border MSME Export Payments",
              desc: "Collection via UPI/VA + INR settlement + GST reporting",
              to: "/solutions/crossborder-msme",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="flex items-center font-medium text-[15px]"
                >
                  <Icon className={iconClass} /> {item.name}
                </Link>
                <p className="text-[12px] text-gray-500 ml-8">{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
