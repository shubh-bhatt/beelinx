import React from "react";
import { Shield, Clock, Headphones } from "lucide-react";

const SupportEnterprises = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            Enterprise & Government Support
          </h2>
          <p className="text-white font-bold text-center mb-8">
            Priority support with guaranteed SLAs
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-3">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Level 1 Support
                </h3>
                <p className="text-sm text-gray-500 mt-1">Standard Queries</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Response time: 4 hours</p>
                <p>• Business hours coverage</p>
                <p>• Email & ticket support</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-white">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-purple-100 rounded-full mb-3">
                  <Headphones className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Level 2 Support
                </h3>
                <p className="text-sm text-gray-500 mt-1">Technical Issues</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Response time: 2 hours</p>
                <p>• Extended hours coverage</p>
                <p>• Phone & priority chat</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="inline-block p-3 bg-green-100 rounded-full mb-3">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Level 3 Support
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Critical Escalations
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Response time: 30 minutes</p>
                <p>• 24x7 priority desk</p>
                <p>• Dedicated account manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportEnterprises;
