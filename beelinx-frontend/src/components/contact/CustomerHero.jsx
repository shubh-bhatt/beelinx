const CustomerHero = () => {
  return (
    <section className="bg-linear-to-b bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Let’s <span className="text-[#4CB4FB]">Talk</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Whether you’re a startup, enterprise, or government institution,
            we’d love to hear from you. Reach out and let's build something
            amazing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button className="px-6 py-3 bg-[#4CB4FB] text-white font-semibold rounded-xl hover:bg-[#FFFFFF] hover:text-[#4CB4FB] transition-all cursor-pointer">
              Contact Us
            </button>
            <button className="px-6 py-3 border border-[#4CB4FB] text-[#4CB4FB] font-semibold rounded-xl transition-all cursor-pointer hover:bg-[#4CB4FB] hover:text-[#ffffff]">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-20">
          <img
            src="images/contactimage/customersupport.avif"
            alt="Customer Support Illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerHero;
