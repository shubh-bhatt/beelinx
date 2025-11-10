import heroImage from "../../assets/heroImage.svg"; 

const HeroSection = () => {
  return (
    <section className=" bg-linear-to-b from-indigo-50 to-white py-42 px-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Future of <span className="text-[#4CB4FB]">Financial APIs</span> 
            <br /> for MSMEs, Enterprises & Government
          </h1>
          
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Simplify payments, automate financial workflows, and connect securely with banks and partners using Beelinix’s powerful API infrastructure.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#products"
              className="bg-[#4CB4FB] text-white px-8 py-3 rounded-full font-semibold hover:[#4CB4FB] transition"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="border border-[#4CB4FB] text-[#4CB4FB] px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition"
            >
              Request Demo
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Financial Data Flow Illustration"
            className="w-full max-w-md md:max-w-lg drop-shadow-xl"
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-[250px] h-[250px] bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;
