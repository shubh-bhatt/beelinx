import React from 'react'
import  { useState } from "react";
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
    <div>
             {/* Developer Section */}
      <section className="py-20 px-6 bg-linear-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
              <Code className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Built for Developers
            </h2>
            <p className="text-xl text-gray-300">
              Integrate in minutes with our powerful APIs and SDKs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Code Example */}
            <div>
              <div className="flex space-x-2 mb-4">
                {['nodejs', 'python', 'java'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => setActiveTab(lang)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      activeTab === lang
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang === 'nodejs' ? 'Node.js' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="bg-gray-950 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{codeSnippets[activeTab]}</pre>
              </div>
            </div>

            {/* Developer Resources */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                <h3 className="text-xl font-bold mb-2">API Documentation</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive guides, references, and tutorials to get you started
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center font-semibold">
                  View Docs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                <h3 className="text-xl font-bold mb-2">SDKs & Libraries</h3>
                <p className="text-gray-400 mb-4">
                  Native libraries for Node.js, Python, Java, PHP, Ruby, and more
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center font-semibold">
                  Download SDKs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                <h3 className="text-xl font-bold mb-2">Postman Collection</h3>
                <p className="text-gray-400 mb-4">
                  Test APIs instantly with our ready-to-use Postman collection
                </p>
                <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center font-semibold">
                  Import Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="bg-blue-600 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold mb-2">Try Sandbox Environment</h3>
                <p className="mb-4">
                  Test integrations risk-free in our sandbox before going live
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                  Sign Up for Sandbox
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeveloperSection