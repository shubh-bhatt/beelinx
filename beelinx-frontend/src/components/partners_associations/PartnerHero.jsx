import React from "react";
import HDFC from "/logos/herohdfclogo.png" 
import NPCI from "/logos/heronpcilogo.webp" 
import RBI from "/logos/Reserve_Bank_of_India_logo.svg.png" 
import AWS from "/logos/heroAWS-Logo-PNG.png" 
import Azure from "/logos/heroMicrosoft_Azure_Logo.svg" 
import  NASSCOM from "/logos/Nasscom.svg" 

const PartnerHero = () => {
  return (
    <div>
      <section className="bg-linear-to-br from-emerald-50 via-white to-sky-50 mt-10 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="text-5xl font-bold  leading-14 text-gray-900 mb-4">
            Trusted by Leading Banks, Gateways, and Institutions
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Our network of partners powers secure, compliant, and scalable
            fintech solutions across India.
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-5 max-w-5xl mx-auto">
            {[
              HDFC,
              NPCI,
              RBI,
              AWS,
              Azure,
              NASSCOM,
            ].map((logo, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-3   transition-shadow flex items-center justify-center">
                <img className="text-gray-700 font-semibold" src={logo}></img>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Become a Partner
            </button>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
              Contact Partnerships Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerHero;
