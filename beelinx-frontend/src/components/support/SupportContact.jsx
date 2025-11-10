import React from "react";
import { FileText, MessageSquare, Phone, Mail } from "lucide-react";

const SupportContact = () => {
  return (
    <div>
      {/* Contact & Ticketing Options */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact & Support Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <FileText className="w-10 h-10 mb-4 text-blue-400" />
              <h3 className="text-lg font-semibold mb-2">Submit a Ticket</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get help from our support team
              </p>
              <button className="text-blue-400 hover:text-blue-300 font-semibold">
                Open Ticket →
              </button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <MessageSquare className="w-10 h-10 mb-4 text-green-400" />
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-4">
                Chat with us in real-time
              </p>
              <button className="text-green-400 hover:text-green-300 font-semibold">
                Start Chat →
              </button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <Mail className="w-10 h-10 mb-4 text-purple-400" />
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-4">
                support@yourdomain.com
              </p>
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                Send Email →
              </button>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all">
              <Phone className="w-10 h-10 mb-4 text-orange-400" />
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-gray-600 mb-4">
                Enterprise & Government only
              </p>
              <button className="text-orange-400 hover:text-orange-300 font-semibold">
                Call Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;
