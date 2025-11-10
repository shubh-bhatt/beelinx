import { Banknote, Bell, Users, RefreshCcw } from "lucide-react"; // example icons

const features = [
  {
    icon: <Banknote className="w-8 h-8 text-blue-400" />,
    title: "Instant Reconciliation",
    description: "Automatically match payments with invoices in real-time.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: "Unique Account per Customer",
    description: "Assign virtual accounts to each client for easy tracking.",
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-blue-400" />,
    title: "Multi-bank Integration",
    description: "Connect multiple bank accounts seamlessly under one dashboard.",
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-400" />,
    title: "Real-time Notifications",
    description: "Get instant alerts for payments, transfers, and account changes.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-16 mt-[50px] bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Key Features
        </h2>
        <p className="text-gray-600 mb-12">
          Simplify financial operations with fast, secure, and automated tools.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



