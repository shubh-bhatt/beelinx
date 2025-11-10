import React from 'react'

const SetupSteps = () => {
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
              {/* Quick Start Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Start in 3 Steps</h2>
            <p className="text-slate-400 text-lg">Get up and running in minutes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Get instant sandbox access', icon: Users },
              { step: '02', title: 'Get API Keys', desc: 'Start testing immediately', icon: Terminal },
              { step: '03', title: 'Go Live', desc: 'Deploy to production', icon: Zap }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-6xl font-bold text-blue-500/20 mb-4">{item.step}</div>
                  <item.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-slate-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:scale-105">
              Start Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SetupSteps