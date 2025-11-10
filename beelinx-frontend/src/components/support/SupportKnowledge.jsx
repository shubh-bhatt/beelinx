import React from "react";
import { useState } from "react";
import {
  Search,
  FileText,
  Code,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const SupportKnowledge = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const knowledgeBaseCategories = [
    { title: "Account Setup", icon: Users, count: 24 },
    { title: "API Errors & Troubleshooting", icon: Code, count: 38 },
    { title: "Payment & Reconciliation", icon: FileText, count: 31 },
    { title: "Security & Compliance", icon: Shield, count: 19 },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Knowledge Base
            </h2>
            <p className="text-gray-600">
              Find answers to common questions and issues
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for common issues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-700"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {knowledgeBaseCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="p-6 border-2 border-gray-100 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Icon className="w-8 h-8 text-[#4CB4FB] mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {category.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {category.count} articles
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="text-[#4CB4FB] font-semibold hover:text-[#1792e4] inline-flex items-center">
              Explore All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportKnowledge;
