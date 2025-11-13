import React, { useState } from "react";
import {
  Search,
  Download,
  ExternalLink,
  BookOpen,
  FileText,
  Award,
  Shield,
  Video,
  ArrowRight,
  Clock,
  TrendingUp,
} from "lucide-react";

const ResourceHero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 py-16">
      <div className="flex flex-col items-center gap-6 w-full max-w-5xl text-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 leading-tight">
          Stay Ahead with the Latest in <br />
          <span className="text-blue-500 font-bold">
            Fintech Infrastructure
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
          Explore guides, reports, and success stories to help you scale with
          confidence.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-3xl">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Dropdown */}
            <select className="px-4 sm:px-6 py-3 text-gray-700 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none bg-white w-full sm:w-auto text-sm sm:text-base">
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
