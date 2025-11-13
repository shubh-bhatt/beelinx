import React, { useState } from "react";
import { ArrowRight, Code } from "lucide-react";

const DeveloperSection = () => {
  const [activeTab, setActiveTab] = useState("nodejs");

  const codeSnippets = {
    nodejs: `const virtualAccount = await paymentSDK.createVA({
  customerName: "John Doe",
  email: "john@example.com",
  amount: 50000,
  validity: "30d"
});

console.log(virtualAccount.accountNumber);`,
    python: `virtual_account = payment_sdk.create_va(
  customer_name="John Doe",
  email="john@example.com",
  amount=50000,
  validity="30d"
)

print(virtual_account.account_number)`,
    java: `VirtualAccount va = paymentSDK.createVA(
  new VARequest()
      .setCustomerName("John Doe")
      .setEmail("john@example.com")
      .setAmount(50000)
      .setValidity("30d")
);

System.out.println(va.getAccountNumber());`,
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl mb-6">
            <Code className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Built for Developers
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Integrate in minutes with our powerful APIs and SDKs
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start w-full">
          {/* Code Example Section */}
          <div className="w-full overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-2 mb-4">
              {["nodejs", "python", "java"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-colors ${
                    activeTab === lang
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:text-white"
                  }`}
                >
                  {lang === "nodejs"
                    ? "Node.js"
                    : lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            {/* Code Box (Fully Responsive) */}
            <div className="bg-gray-950 rounded-xl p-4 sm:p-6 font-mono text-sm sm:text-base max-h-64 overflow-y-auto overflow-x-auto w-full">
              <div className="min-w-0 w-full">
                <pre className="text-gray-300 whitespace-pre-wrap break-words">
                  {codeSnippets[activeTab]}
                </pre>
              </div>
            </div>
          </div>

          {/* Developer Resources */}
          <div className="space-y-6 w-full">
            {[
              {
                title: "API Documentation",
                desc: "Comprehensive guides, references, and tutorials to get you started",
                link: "View Docs",
              },
              {
                title: "SDKs & Libraries",
                desc: "Native libraries for Node.js, Python, Java, PHP, Ruby, and more",
                link: "Download SDKs",
              },
              {
                title: "Postman Collection",
                desc: "Test APIs instantly with our ready-to-use Postman collection",
                link: "Import Collection",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-xl p-5 sm:p-6 hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {card.desc}
                </p>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center font-semibold text-sm sm:text-base"
                >
                  {card.link}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}

            {/* Sandbox CTA */}
            <div className="bg-blue-600 rounded-xl p-5 sm:p-6 mt-8 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                Try Sandbox Environment
              </h3>
              <p className="mb-4 text-sm sm:text-base">
                Test integrations risk-free in our sandbox before going live
              </p>
              <div className="flex justify-center sm:justify-start">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
                  Sign Up for Sandbox
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
