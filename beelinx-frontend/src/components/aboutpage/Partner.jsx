import { CheckCircle } from "lucide-react";

const Partner = () => {
  const logos = [
    "/logos/axis.png",
    "/logos/icici.png",
    "/logos/kotak.png",
    "/logos/sbi.png",
    "/logos/paytm.png",
  ];

  const partners = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Razorpay",
    "PayU",
    "Paytm",
    "PhonePe",
  ];

  const certifications = [
    "ISO 27001 Certified",
    "PCI DSS Compliant",
    "RBI Approved",
    "SOC 2 Type II",
    "GDPR Compliant",
    "Data Security Council of India Member",
  ];

  return (
    <div>
      {" "}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Trusted Partners & Certifications
          </h2>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Banking & Payment Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center text-center hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Compliance & Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-green-50 to-emerald-50 p-6 rounded-lg shadow-md flex items-center hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                  <span className="text-gray-800 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
