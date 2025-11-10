import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Building2, Landmark } from 'lucide-react';

const PricingComponent = () => {
  const [activeTab, setActiveTab] = useState('msme');

  const tabs = [
    { id: 'msme', label: 'MSME (Startup-Friendly)', icon: Zap },
    { id: 'enterprise', label: 'Enterprise', icon: Building2 },
    { id: 'government', label: 'Government & Institutions', icon: Landmark }
  ];

  const pricingData = {
    msme: {
      plans: [
        {
          name: 'Basic',
          price: '₹99',
          description: 'Best for small business owners, startups who needs landing page for their business.',
          features: [
            '130+ Coded Blocks',
            'Best for Developers, Freelancers',
            'Made with TailwindCSS',
            'Pay-as-you-go model',
            'No setup fee',
            'Volume discounts available'
          ],
          cta: 'Start Free',
          popular: false
        },
        {
          name: 'Premium',
          price: '₹199',
          description: 'Best for medium business owners, startups who needs landing page for their business.',
          features: [
            '130+ Coded Blocks',
            'Best for Developers, Freelancers',
            'Made with TailwindCSS',
            'Premium Support',
            'Future Updates',
            '₹X per API call with discounts'
          ],
          cta: 'Request Demo',
          popular: true
        },
        {
          name: 'Enterprise',
          price: '₹399',
          description: 'Best for large companies, business owners who needs landing page for their business.',
          features: [
            '130+ Coded Blocks',
            'Best for Developers, Freelancers',
            'Made with TailwindCSS',
            'Premium Support',
            'Future Updates',
            'Priority API access'
          ],
          cta: 'Get Started',
          popular: false
        }
      ]
    },
    enterprise: {
      plans: [
        {
          name: 'Professional',
          price: '₹25,000',
          period: '/month',
          description: 'Perfect for growing businesses with moderate API usage and dedicated support needs.',
          features: [
            'Custom SLA guarantees',
            'Dedicated account manager',
            'Priority technical support',
            'Advanced analytics dashboard',
            'Variable transaction fees',
            'Quarterly business reviews'
          ],
          cta: 'Talk to Sales',
          popular: false
        },
        {
          name: 'Enterprise Plus',
          price: '₹75,000',
          period: '/month',
          description: 'For large organizations requiring maximum reliability and comprehensive support.',
          features: [
            '99.9% uptime SLA',
            'Dedicated support team',
            '24/7 priority support',
            'Custom integrations',
            'Reduced transaction fees',
            'White-glove onboarding'
          ],
          cta: 'Talk to Sales',
          popular: true
        },
        {
          name: 'Custom',
          price: 'Let\'s Talk',
          period: '',
          description: 'Tailored solutions for enterprises with unique requirements and scale.',
          features: [
            'Custom pricing structure',
            'Unlimited API calls',
            'Dedicated infrastructure',
            'Custom compliance requirements',
            'Dedicated engineering support',
            'Custom contract terms'
          ],
          cta: 'Contact Us',
          popular: false
        }
      ]
    },
    government: {
      plans: [
        {
          name: 'Government Basic',
          price: 'Custom',
          description: 'Designed for government departments and small-scale institutional deployments.',
          features: [
            'Compliance with govt. regulations',
            'Data sovereignty guarantees',
            'Basic training & onboarding',
            'Email & phone support',
            'Quarterly reporting',
            'Secure data handling'
          ],
          cta: 'Contact Government Sales',
          popular: false
        },
        {
          name: 'Institutional',
          price: 'Custom',
          description: 'Comprehensive solution for large government bodies and public institutions.',
          features: [
            'Full compliance suite',
            'On-premise deployment option',
            'Comprehensive training programs',
            'Dedicated liaison officer',
            'Monthly reporting & audits',
            'Priority security updates'
          ],
          cta: 'Contact Government Sales',
          popular: true
        },
        {
          name: 'National Scale',
          price: 'Custom',
          description: 'Enterprise-grade solution for nationwide government implementations.',
          features: [
            'Multi-region deployment',
            'Advanced security protocols',
            'Extensive training & workshops',
            'Dedicated support team',
            'Custom compliance frameworks',
            'Regular security audits'
          ],
          cta: 'Contact Government Sales',
          popular: false
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Make the wise decision<br />for your business
          </h1>
          <p className="text-gray-600 text-lg">
            Choose from our affordable packages tailored to your needs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#4CB4FB] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData[activeTab].plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'shadow-2xl border-2 border-transparent bg-linear-to-br from-blue-400 to-blue-500 text-white'
                  : 'shadow-lg hover:shadow-xl border border-gray-200'
              }`}
          
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-3">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`ml-2 ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </button>

              <div className="space-y-3">
                <p className={`text-sm font-semibold mb-4 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  What's included:
                </p>
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`shrink-0 mt-0.5 ${
                        plan.popular ? 'text-white' : 'text-green-600'
                      }`}
                    />
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Need help choosing the right plan?{' '}
            <a href="#" className="text-gray-900 font-semibold hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;