
import {  Check  } from 'lucide-react';

const CustomersHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br bg-[#4CB4FB]  text-white py-20 px-6">
      <div className="absolute inset-0 "></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center mt-16 gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <Check className="w-4 h-4" />
          <span className="text-sm font-medium">
            Trusted by 500+ Organizations
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Trusted by Businesses, Enterprises,
          <br />
          and Governments Across India
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          See how our APIs and services power financial infrastructure for
          organizations of all sizes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "Banking",
            "Fintech",
            "Government",
            "Enterprise",
            "MSME",
            "PSU",
            "NBFC",
            "Startup",
          ].map((industry, i) => (
            <div
              key={i}
              className="bg-indigo-50 text-[#4CB4FB] backdrop-blur-sm rounded-lg p-4  transition-all hover:shadow-md hover:-translate-y-2 hover:scale-100 shadow-md cursor-pointer "
            >
              <p className="font-semibold text-sm">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersHero