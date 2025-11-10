import React from 'react'
import {
  Building2,
  Shield,
  Users,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

const AboutVision = () => {
  return (
    <div>
      {/* Vision & Mission */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Enable seamless digital finance for every Indian business and
                institution, creating a future where financial services are
                accessible, efficient, and secure for all.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Provide secure, compliant, and innovative APIs that simplify
                finance, enabling businesses to focus on growth while we handle
                the complexity of financial infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutVision