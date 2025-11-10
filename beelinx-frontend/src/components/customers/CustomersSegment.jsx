import React, { useState } from "react";
import { Building2, Users, Shield, ArrowRight } from "lucide-react";

const CustomersSegment = () => {
  const [activeTab, setActiveTab] = useState("msme");

  const segments = {
    msme: {
      title: "MSME Customers",
      icon: <Users className="w-6 h-6" />,
      description:
        "Cost-effective solutions with easy integration. Perfect for startups and small businesses looking to scale their financial operations.",
      logos: [
        "TechStart",
        "LocalBiz",
        "QuickPay",
        "StartupX",
        "SmallCorp",
        "MicroFin",
      ],
    },
    enterprise: {
      title: "Enterprise Customers",
      icon: <Building2 className="w-6 h-6" />,
      description:
        "Enterprise-grade scale, reliability, and compliance. Trusted by NBFCs, large corporates, and leading fintechs.",
      logos: [
        "FinTech Pro",
        "MegaCorp",
        "NBFC Plus",
        "TechGiant",
        "CorpFinance",
        "EnterprisePay",
      ],
    },
    government: {
      title: "Government & Institutions",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Secure infrastructure for bulk disbursements, KYC verification, and government schemes across India.",
      logos: [
        "State Govt",
        "PSU Bank",
        "Central Scheme",
        "Public Corp",
        "Govt Initiative",
        "State PSU",
      ],
    },
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700 mb-4">
            Our Customer Segments
          </h2>
          <p className="text-xl text-gray-600">
            Solutions tailored for every business need
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center  gap-4 mb-12">
          {Object.entries(segments).map(([key, segment]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl cursor-pointer font-semibold transition-all ${
                activeTab === key
                  ? "bg-[#4CB4FB] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              {segment.icon}
              {segment.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {segments[activeTab].title}
            </h3>
            <p className="text-lg text-gray-600">
              {segments[activeTab].description}
            </p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 cursor-pointer gap-6 mb-8">
            {segments[activeTab].logos.map((logo, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-semibold">{logo}</span>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 bg-[#4CB4FB] text-white cursor-pointer px-6 py-3 rounded-lg font-semibold hover:bg-[#2894dc] transition-colors">
            See {segments[activeTab].title} Case Studies
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomersSegment;
