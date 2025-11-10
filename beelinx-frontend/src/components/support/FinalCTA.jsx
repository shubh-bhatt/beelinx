import React from 'react'


const FinalCTA = () => {
  return (
    <div>
      <div className="bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-200 mb-10">
            Our support team is ready to assist you with any questions or
            concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
              Contact Support
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all border-2 border-white border-opacity-30">
              Request a Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCTA