import React, { useState } from "react";
import {
  Code,
  Zap,
  Shield,
  Book,
  Users,
  FileText,
  Download,
  ExternalLink,
  Check,
  ChevronRight,
  Terminal,
  Blocks,
  Lock,
  CheckCircle,
} from "lucide-react";

export default function DeveloperAPIPage() {
  return (
    <div className=" bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white mt-18">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Code className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">
                Developer Portal
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Build Seamlessly with Our APIs
            </h1>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Access developer-friendly docs, SDKs, and sandbox environments to
              integrate payments, verification, and reconciliation in days, not
              months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Get Sandbox Access
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm">
                View API Docs
                <ExternalLink className="inline-block ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
