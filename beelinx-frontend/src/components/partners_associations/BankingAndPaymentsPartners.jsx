import hdfc from "/logos/hdfclogo.svg"
import npci from "/logos/npcilogo.png"
import icici from "/logos/icici-bank-logo-icici-bank-logo.png"
import axis from "/logos/AXISBANK.BO.svg"
import sbi from "/logos/SBICARD.NS.png"
import paytm from "/logos/paytmlogo.webp"

const BankingAndPaymentsPartners = () => {
  const PartnerCard = ({ name, description, logo }) => (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-emerald-200">
      <div className="flex items-start gap-4">
        <div className=" p-3 rounded-lg">
          <img src={logo} className="h-10 w-10" alt="img" />
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
      { logo:hdfc, name: "HDFC Bank",description: "Virtual Accounts & Payment Gateway integrations"},
      { logo:npci, name: "NPCI", description: "UPI ecosystem participation" },
      { logo:icici, name: "ICICI Bank", description: "IMPS, NEFT, RTGS partner" },
      { logo:axis, name: "Axis Bank", description: "Corporate banking solutions" },
      { logo:sbi, name: "SBI", description: "Government payment integrations" },
      { logo:paytm, name: "Paytm", description: "Digital wallet partnerships" },
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
