import React from 'react'
import {  Zap, Shield, Download,  ChevronRight, Terminal, Blocks} from 'lucide-react';

const SdkTools = () => {
    const guides = [
    { title: 'How to integrate UPI QR in under 15 minutes', time: '15 min read', icon: Zap },
    { title: 'Building payouts with IMPS', time: '20 min read', icon: Terminal },
    { title: 'Best practices for error handling', time: '10 min read', icon: Shield }
  ];

    const sdks = [
    { name: 'Node.js', icon: '⬢', color: 'from-green-500 to-green-600' },
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-blue-600' },
    { name: 'Java', icon: '☕', color: 'from-red-500 to-red-600' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-500 to-purple-600' }
  ];
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">SDKs & Tools</h2>
            <p className="text-slate-400 text-lg">
              Build faster with our official libraries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sdks.map((sdk, i) => (
              <div
                key={i}
                className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:scale-105 cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-linear-to-br ${sdk.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {sdk.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{sdk.name}</h3>
                <div className="flex items-center text-blue-400 text-sm font-semibold">
                  Download SDK <Download className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all">
              <Blocks className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Postman Collections</h3>
              <p className="text-slate-400 mb-6">
                Pre-configured API collections for instant testing
              </p>
              <button className="flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                Download Collection <Download className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 transition-all">
              <Terminal className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Sandbox Testing Tools</h3>
              <p className="text-slate-400 mb-6">
                Full-featured sandbox environment with test data
              </p>
              <button className="flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors">
                Access Sandbox <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SdkTools