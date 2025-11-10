import React, { useState } from 'react';
import { CreditCard, Send, CheckCircle, FileText } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const ProductCategories = () => {
  const [activeTab, setActiveTab] = useState('collect');

  const categories = {
    collect: {
      icon: <CreditCard className="w-4 h-4" />,
      title: 'Collect',
      color: 'blue',
      products: [
        {
          name: 'Virtual Account APIs',
          description: 'Create unique virtual accounts for each customer to streamline payment collection and tracking.'
        },
        {
          name: 'Virtual Payment Address (VPA)',
          description: 'Generate custom UPI IDs for seamless digital payments and instant settlement.'
        },
        {
          name: 'UPI Intent & QR',
          description: 'Enable quick payments through UPI deep links and dynamic QR codes for mobile apps.'
        }
      ]
    },
    pay: {
      icon: <Send className="w-4 h-4" />,
      title: 'Pay',
      color: 'blue',
      products: [
        {
          name: 'IMPS, NEFT, RTGS Payouts',
          description: 'Send bulk and individual payouts via multiple banking channels with real-time status updates.'
        },
        {
          name: 'UPI AutoPay',
          description: 'Set up recurring UPI payments for subscriptions with automated mandate management.'
        },
        {
          name: 'Escrow & Bulk Payout APIs',
          description: 'Securely hold and disburse funds with compliance-ready escrow and batch payout solutions.'
        }
      ]
    },
    verify: {
      icon: <CheckCircle className="w-4 h-4" />,
      title: 'Verify',
      color: 'blue',
      products: [
        {
          name: 'Account Verification',
          description: 'Instantly verify bank account details using penny drop and account holder name matching.'
        },
        {
          name: 'Aadhaar Verification',
          description: 'Complete KYC with UIDAI-approved Aadhaar authentication and e-KYC services.'
        },
        {
          name: 'PAN Verification',
          description: 'Validate PAN card details in real-time for compliance and identity verification.'
        }
      ]
    },
    reconcile: {
      icon: <FileText className="w-4 h-4" />,
      title: 'Reconcile',
      color: 'blue',
      products: [
        {
          name: 'Auto-Reconciliation APIs',
          description: 'Automatically match transactions across payment gateways and bank statements.'
        },
        {
          name: 'Settlement Reports',
          description: 'Get detailed settlement breakdowns with transaction-level visibility and analytics.'
        },
        {
          name: 'Custom Dashboards',
          description: 'Build personalized reporting views with real-time data and export capabilities.'
        }
      ]
    }
  };

  const colorClasses = {
    blue: {
      tab: 'border-[#4CB4FB] text--[#4CB4FB]',
      bg: 'bg-[#4CB4FB]',
      icon: 'text-white',
      button: 'bg-[#4CB4FB] hover:bg--[#4CB4FB]'
    }
   
  };

  const currentCategory = categories[activeTab];
  const currentColors = colorClasses[currentCategory.color];

  return (
    <div className="min-h-[80vh] bg-gray-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Product Categories</h1>
        <p className="text-gray-600 mb-8">Explore our comprehensive suite of financial APIs</p>

        {/* Tabs */}
        <div className="flex space-x-1 border-b border-gray-200 mb-8 ">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-1 px-1 md:px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === key
                  ? colorClasses[category.color].tab
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentCategory.products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-lg ${currentColors.bg} flex items-center justify-center mb-4`}>
                <div className={currentColors.icon}>
                  {currentCategory.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
              <button className={`text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ${currentColors.button}`}>
                 <span className='flex gap-2'>Learn More <ArrowRight /></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;