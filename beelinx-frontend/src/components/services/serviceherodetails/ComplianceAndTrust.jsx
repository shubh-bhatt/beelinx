import { CheckCircle, Shield, Award, BadgeCheck } from "lucide-react";

const ComplianceAndTrust = () => {
  const certifications = [
    { name: "ISO 27001", icon: Award },
    { name: "PCI DSS", icon: Shield },
    { name: "RBI Compliant", icon: BadgeCheck },
    { name: "NPCI Aligned", icon: CheckCircle },
  ];

  return (
    <>
      {/* Compliance & Trust */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Compliance & Trust
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our services meet the strictest compliance requirements. We're
              certified and aligned with industry standards to ensure your peace
              of mind.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ComplianceAndTrust;
