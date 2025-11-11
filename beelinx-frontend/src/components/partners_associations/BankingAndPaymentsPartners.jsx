import React from "react";
import { Building2 } from "lucide-react";

const BankingAndPaymentsPartners = () => {
  const PartnerCard = ({ name, description, logo }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-emerald-200">
      <div className="flex items-start gap-4">
        <div className="bg-emerald-50 p-3 rounded-lg">
          <Building2 className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

  const BankingPartners = () => {
    const partners = [
      {
        name: "HDFC Bank",
        description: "Virtual Accounts & Payment Gateway integrations",
      },
      { name: "NPCI", description: "UPI ecosystem participation" },
      { name: "ICICI Bank", description: "IMPS, NEFT, RTGS partner" },
      { name: "Axis Bank", description: "Corporate banking solutions" },
      { name: "SBI", description: "Government payment integrations" },
      { name: "Paytm", description: "Digital wallet partnerships" },
    ];

    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Banking & Payment Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborating with India's most trusted financial institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <PartnerCard key={idx} {...partner} />
            ))}
          </div>
        </div>
      </section>
    );
  };

  return <BankingPartners />;
};

export default BankingAndPaymentsPartners;
