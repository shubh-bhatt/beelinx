import React from 'react'
import {
  
  ExternalLink,
  CheckCircle,
  
} from "lucide-react";

const SystemSupport = () => {
    const systemStatus = [
      { service: "Payment API", status: "operational" },
      { service: "Dashboard", status: "operational" },
      { service: "Webhook Service", status: "operational" },
      { service: "Authentication", status: "operational" },
    ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                System Status
              </h2>
              <p className="text-gray-600">All systems operational</p>
            </div>
            <button className="text-[#4CB4FB] hover:text-[#1a91e1] font-semibold inline-flex items-center">
              View Detailed Status <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="space-y-4">
            {systemStatus.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <span className="font-medium text-gray-700">
                  {item.service}
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-600 font-semibold capitalize">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemSupport