import React from "react";
import { Users } from "lucide-react";

const Community = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with other developers, share experiences, and get
            peer-to-peer support
          </p>
          <button className="bg-white text-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
