import {
  Check,
  ArrowRight,
  Code,
  Shield,
  Zap,
  Users,
  Building2,
  Landmark,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const DetailsHeroSection = () => {
  return (
    <section className="pt-32  px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Trusted by 10,000+ Businesses
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              PayFlow – Simplify Payment Collection & Reconciliation
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Enable businesses to automate payment tracking, reduce
              reconciliation time by 80%, and scale effortlessly with secure and
              scalable Virtual Account APIs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl">
                Get Sandbox Access
                <Code className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200 inline-flex items-center justify-center">
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-2" />
                <span>RBI Compliant</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-2" />
                <span>PCI DSS Certified</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-blue-600 mr-2" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="relative z-10">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Virtual Accounts
                    </h3>
                    <p className="text-sm text-gray-500">Real-time Dashboard</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Total Payments</p>
                  <p className="text-2xl font-bold text-gray-900">₹24.5L</p>
                  <p className="text-xs text-green-600 mt-1">↑ 12% this week</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 mb-1">Active VAs</p>
                  <p className="text-2xl font-bold text-gray-900">1,248</p>
                  <p className="text-xs text-green-600 mt-1">↑ 8% this week</p>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Payment Received
                      </p>
                      <p className="text-xs text-gray-500">VA-2024-001234</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">₹15,000</p>
                    <p className="text-xs text-gray-500">2m ago</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Payment Received
                      </p>
                      <p className="text-xs text-gray-500">VA-2024-001235</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">₹8,500</p>
                    <p className="text-xs text-gray-500">5m ago</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        VA Created
                      </p>
                      <p className="text-xs text-gray-500">VA-2024-001236</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">Active</p>
                    <p className="text-xs text-gray-500">8m ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-100 to-transparent opacity-30 -z-10"></div>
    </section>
  );
};

export default DetailsHeroSection;
