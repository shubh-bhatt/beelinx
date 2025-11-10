import React from 'react'

const NewsletterSection = () => {
  return (
    <div className="bg-linear-to-r bg-[#4CB4FB] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed with Expert Insights</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join our fintech insights mailing list for exclusive content delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-6 rounded-full max-w-2xl mx-auto bg-white ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none "
            />
            <button className=" text-[#4CB4FB] px-8 py-4 rounded-r-full font-semibold bg-gray-100 hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
  )
}

export default NewsletterSection