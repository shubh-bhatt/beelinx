import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-[#4CB4FB] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Informed with Expert Insights
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-50 mb-8">
          Join our fintech insights mailing list for exclusive content delivered
          straight to your inbox.
        </p>

        {/* Form */}
        <form className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 w-full px-6 py-4 rounded-full sm:rounded-l-full sm:rounded-r-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none shadow-md"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-[#4CB4FB] font-semibold px-8 py-4 rounded-full sm:rounded-l-none sm:rounded-r-full shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
