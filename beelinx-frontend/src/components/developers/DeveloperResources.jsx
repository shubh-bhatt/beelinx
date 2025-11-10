import React from 'react'
import { Code, Zap, Shield, Book, Users, FileText, Download, ExternalLink, Check, ChevronRight, Terminal, Blocks, Lock, CheckCircle } from 'lucide-react';

const DeveloperResources = () => {
      const guides = [
    { title: 'How to integrate UPI QR in under 15 minutes', time: '15 min read', icon: Zap },
    { title: 'Building payouts with IMPS', time: '20 min read', icon: Terminal },
    { title: 'Best practices for error handling', time: '10 min read', icon: Shield }
  ];
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        
      {/* Developer Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Developer Resources</h2>
            <p className="text-slate-400 text-lg">Learn and build with our guides and tutorials</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {guides.map((guide, i) => (
              <div key={i} className="bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all cursor-pointer group">
                <guide.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-sm text-slate-500 mb-2">{guide.time}</div>
                <h3 className="text-lg font-bold mb-4">{guide.title}</h3>
                <div className="flex items-center text-blue-400 font-semibold text-sm">
                  Read Guide <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">API Changelog</h3>
                <p className="text-slate-400">Stay updated with latest versions and features</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition-all">
                View Changelog
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default DeveloperResources