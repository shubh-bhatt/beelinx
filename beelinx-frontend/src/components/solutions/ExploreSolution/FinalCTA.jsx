import React from 'react'


const FinalCTA = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Payment Collections with Digital Collections Suite
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join hundreds of businesses that have streamlined their payment
            operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleCTA("Request Demo")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Request Demo
            </button>
            <button
              onClick={() => handleCTA("Talk to Sales")}
              className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg border-2 border-white"
            >
              Talk to Sales
            </button>
            <button
              onClick={() => handleCTA("Get a Custom Quote")}
              className="px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg border-2 border-white"
            >
              Get a Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FinalCTA