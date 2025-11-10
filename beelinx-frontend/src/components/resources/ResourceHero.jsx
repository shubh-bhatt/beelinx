import React from "react";
import { useState } from "react";
import { Search, Download, ExternalLink, BookOpen, FileText, Award, Shield, Video, ArrowRight, Clock, TrendingUp } from 'lucide-react';


const ResourceHero = () => {
     const [searchQuery, setSearchQuery] = useState('');
  return (
    <section className="  min-h-[90vh] flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col items-center justify-content-center gap-4 pb-10">
        <div>
          <h1 className="text-6xl l text-center font-black text-gray-800 ">
            Stay Ahead with the Latest in <br />{" "}
            <span className="text-blue-400 font-bold">Fintech </span>{" "}
            Infrastructure
          </h1>
        </div>

        <div>
          <p className="text-[20px] text-center  text-gray-600">
            Explore guides, reports, and success stories to help you scale with
            confidence.
          </p>
        </div>
   {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-3 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border-2 border-transparent focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <select className="px-6 py-3 text-gray-700 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none bg-white">
                  <option>All Types</option>
                  <option>Blogs</option>
                  <option>Whitepapers</option>
                <option>Case Studies</option>
                  <option>Compliance</option>
                  <option>Webinars</option>
                </select>
              </div>
            </div>

      </div>
    </section>
  );
};

export default ResourceHero;
