import React, { useState } from "react";
import {
  Cookie,
  Shield,
  Settings,
  Eye,
  BarChart,
  Target,
  Globe,
  Info,
  CheckCircle,
  XCircle,
  AlertCircle,
  Lock,
} from "lucide-react";

export default function CookiePolicy() {
  const lastUpdated = "March 15th, 2024";
  const [activeTab, setActiveTab] = useState("essential");

  const cookieTypes = [
    {
      id: "essential",
      icon: <Lock className="w-5 h-5" />,
      name: "Essential Cookies",
      color: "blue",
      description:
        "These cookies are necessary for the website to function and cannot be switched off in our systems.",
      examples: [
        "Session management cookies",
        "Authentication cookies",
        "Security cookies",
        "Load balancing cookies",
      ],
      canDisable: false,
    },
    {
      id: "functional",
      icon: <Settings className="w-5 h-5" />,
      name: "Functional Cookies",
      color: "green",
      description:
        "These cookies enable the website to provide enhanced functionality and personalization.",
      examples: [
        "Language preference cookies",
        "Region selection cookies",
        "UI customization cookies",
        "Video player preferences",
      ],
      canDisable: true,
    },
    {
      id: "analytics",
      icon: <BarChart className="w-5 h-5" />,
      name: "Analytics Cookies",
      color: "purple",
      description:
        "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
      examples: [
        "Google Analytics cookies",
        "Page view tracking",
        "User behavior analytics",
        "Performance monitoring",
      ],
      canDisable: true,
    },
    {
      id: "marketing",
      icon: <Target className="w-5 h-5" />,
      name: "Marketing Cookies",
      color: "orange",
      description:
        "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
      examples: [
        "Ad targeting cookies",
        "Social media cookies",
        "Retargeting cookies",
        "Conversion tracking",
      ],
      canDisable: true,
    },
  ];

  const sections = [
    {
      icon: <Info className="w-6 h-6" />,
      title: "1. What Are Cookies?",
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies allow websites to recognize your device and store some information about your preferences or past actions.`,
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "2. How We Use Cookies",
      content: `Beelinx uses cookies to improve your experience on our website, to understand how you use our services, and to provide personalized content and advertising. We use both first-party cookies (set by us) and third-party cookies (set by other companies on our behalf). Cookies help us remember your preferences, analyze site traffic, and deliver relevant advertisements.`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "3. Your Cookie Choices",
      content: `You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please note that if you choose to decline cookies, some features of our website may not function properly.`,
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "4. Managing Cookies",
      content: `You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible. Most browsers provide you with the ability to manage cookie settings, typically found in the 'Settings' or 'Preferences' menu of your browser.`,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "5. Third-Party Cookies",
      content: `In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third-party services may use cookies to collect information about your online activities over time and across different websites.`,
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "6. Cookie Retention",
      content: `Different cookies are retained for different periods. Session cookies are deleted when you close your browser, while persistent cookies remain on your device for a set period or until you delete them. The retention period depends on the purpose of the cookie and your settings. We regularly review and delete cookies that are no longer necessary.`,
    },
  ];

  const browserGuides = [
    { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
    {
      name: "Firefox",
      url: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer",
    },
    {
      name: "Safari",
      url: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
    },
    {
      name: "Edge",
      url: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
    },
    {
      name: "Opera",
      url: "https://help.opera.com/en/latest/web-preferences/#cookies",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-sky-600" />
              <span className="text-2xl font-bold text-gray-900">Beelinx</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Settings
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Payroll
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                People
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Policies
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-linear-to-r from-sky-500 via-sky-600 to-cyan-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Cookie className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Cookie Policy</h1>
          <div className="h-1 w-32 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-orange-100">
            Last updated on {lastUpdated}
          </p>
          <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
            Learn about how we use cookies to improve your experience and
            provide better services.
          </p>
        </div>
      </div>

      {/* Quick Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-sky-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 mr-3 text-sky-600" />
            Quick Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to enhance your browsing experience, personalize
            content and ads, provide social media features, and analyze our
            traffic. You can manage your cookie preferences at any time through
            your browser settings or using our cookie management tool below. By
            continuing to use our website, you consent to our use of cookies in
            accordance with this policy.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cookie Types Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Types of Cookies We Use
          </h2>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {cookieTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === type.id
                    ? `bg-${type.color}-600 text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                }`}
              >
                {type.icon}
                <span>{type.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            {cookieTypes.map((type) => (
              <div
                key={type.id}
                className={activeTab === type.id ? "block" : "hidden"}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-3 bg-${type.color}-100 rounded-lg text-${type.color}-600`}
                    >
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {type.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {type.canDisable ? (
                          <span className="flex items-center text-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Can be disabled
                          </span>
                        ) : (
                          <span className="flex items-center text-red-600">
                            <XCircle className="w-4 h-4 mr-1" />
                            Always active
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {type.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Examples:
                  </h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <div
                          className={`w-2 h-2 bg-${type.color}-600 rounded-full mr-3`}
                        ></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 mt-1">
                  <div className="p-3 bg-sky-100 rounded-lg text-sky-600">
                    {section.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browser Settings Guide */}
        <div className="bg-linear-to-r from-sky-500 via-sky-600 to-cyan-600 rounded-xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Globe className="w-8 h-8 mr-3" />
            How to Manage Cookies in Your Browser
          </h2>
          <p className="mb-6 text-orange-100">
            Most browsers allow you to control cookies through their settings.
            Here are links to cookie management instructions for popular
            browsers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {browserGuides.map((browser, index) => (
              <a
                key={index}
                href={browser.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-lg p-4 transition-all duration-300 flex items-center justify-between group text-black"
              >
                <span className="font-semibold">{browser.name}</span>
                <Globe className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Cookie Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-sky-600 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">Detailed Cookie Information</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Cookie Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    _session_id
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Essential</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Session</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Maintains user session
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    _auth_token
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Essential</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30 days</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    User authentication
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    _ga
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Analytics</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Google Analytics tracking
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    _preferences
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Functional
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 year</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Stores user preferences
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    _fbp
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Marketing</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Facebook advertising
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-sky-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-sky-600" />
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions about our use of cookies or this Cookie
            Policy, please contact our Data Protection Officer:
          </p>
          <div className="bg-sky-50 rounded-lg p-6">
            <p className="text-gray-800 mb-2">
              <strong>Beelinx Software Private Limited</strong>
            </p>
            <p className="text-gray-700 mb-2">
              Bangalore University Campus, Hosakerehalli
            </p>
            <p className="text-gray-700 mb-2">
              Gnana Bharathi Campus, Bangalore, India
            </p>
            <p className="text-gray-700 mb-2">
              Email:{" "}
              <a
                href="mailto:dpo@beelinx.in"
                className="text-sky-600 hover:underline"
              >
                dpo@beelinx.in
              </a>
            </p>
            <p className="text-gray-700">
              Privacy Portal:{" "}
              <a
                href="http://beelinx.in/privacy"
                className="text-sky-600 hover:underline"
              >
                beelinx.in/privacy
              </a>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-600 border-t border-gray-200 pt-8">
          <p>
            This Cookie Policy is part of our Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </main>
    </div>
  );
}
