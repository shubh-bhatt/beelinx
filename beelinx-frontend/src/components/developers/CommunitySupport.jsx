import React from 'react'
import { Code, Zap, Shield, Book, Users, FileText, Download, ExternalLink, Check, ChevronRight, Terminal, Blocks, Lock, CheckCircle } from 'lucide-react';

const CommunitySupport = () => {
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Community & Support */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Community & Support</h2>
            <p className="text-slate-400 text-lg">Connect with developers and get help</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Developer Forum', desc: 'Ask questions and share knowledge', icon: Users, color: 'blue' },
              { title: 'Discord Community', desc: 'Real-time chat with developers', icon: Users, color: 'purple' },
              { title: 'FAQ & Best Practices', desc: 'Common questions answered', icon: Book, color: 'green' }
            ].map((item, i) => (
              <div key={i} className={`bg-linear-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl p-8 hover:border-${item.color}-500/50 transition-all hover:scale-105 cursor-pointer`}>
                <item.icon className={`w-12 h-12 text-${item.color}-400 mb-4`} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <div className={`flex items-center text-${item.color}-400 font-semibold text-sm`}>
                  Join Now <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-4 rounded-xl font-semibold transition-all shadow-lg hover:scale-105">
              Join Developer Community
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunitySupport