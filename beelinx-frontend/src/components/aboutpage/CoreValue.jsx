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

const CoreValue = () => {
    const values = [
        {
          icon: Shield,
          title: "Security First",
          desc: "Bank-grade security and compliance at every layer",
        },
        {
          icon: Zap,
          title: "Innovation",
          desc: "Cutting-edge technology for modern finance",
        },
        {
          icon: Users,
          title: "Customer-Centric",
          desc: "Your success is our priority",
        },
        {
          icon: Target,
          title: "Integrity",
          desc: "Transparent and ethical in everything we do",
        },
        {
          icon: TrendingUp,
          title: "Scalability",
          desc: "Built to grow with your business",
        },
        {
          icon: Heart,
          title: "Impact",
          desc: "Empowering financial inclusion across India",
        },
      ];
    
  return (
    <div>
      {" "}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Core Values
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            The principles that guide everything we do
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoreValue