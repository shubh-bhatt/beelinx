import React from 'react'

const SupportHero = () => {
  return (
    <section className="mt-18">
      <div>
        <div className="bg-linear-to-r from-blue-500 via-blue-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                We're Here to Help You, Anytime
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Access resources, FAQs, and live support to get the most out of
                our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Submit a Ticket
                </button>
                <button className="bg-blue-500 bg-opacity-30 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-40 transition-all border-2 border-white border-opacity-30">
                  Browse Knowledge Base
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportHero