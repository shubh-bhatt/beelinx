import React, { useState } from "react";
import {
  Shield,
  Clock,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Activity,
  Server,
  LifeBuoy,
  Phone,
  Mail,
  MessageSquare,
  Award,
  Target,
  BarChart3,
} from "lucide-react";

export default function SLAPage() {
  const lastUpdated = "March 15th, 2024";
  const [selectedPlan, setSelectedPlan] = useState("enterprise");

  const uptimeCommitments = [
    {
      tier: "Basic",
      uptime: "99.0%",
      downtime: "7.2 hours/month",
      color: "gray",
      icon: <Server className="w-6 h-6" />,
    },
    {
      tier: "Professional",
      uptime: "99.5%",
      downtime: "3.6 hours/month",
      color: "blue",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      tier: "Enterprise",
      uptime: "99.9%",
      downtime: "43 minutes/month",
      color: "purple",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const responseTargets = [
    {
      priority: "Critical",
      description: "System down or major functionality impaired",
      initial: "15 minutes",
      resolution: "4 hours",
      color: "red",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      priority: "High",
      description: "Significant impact on business operations",
      initial: "1 hour",
      resolution: "8 hours",
      color: "orange",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      priority: "Medium",
      description: "Moderate impact, workaround available",
      initial: "4 hours",
      resolution: "24 hours",
      color: "yellow",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      priority: "Low",
      description: "Minor issue or general inquiry",
      initial: "8 hours",
      resolution: "48 hours",
      color: "green",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      name: "24/7 Phone Support",
      availability: "Enterprise & Professional",
      response: "Immediate",
      color: "blue",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email Support",
      availability: "All Plans",
      response: "Within SLA targets",
      color: "green",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      name: "Live Chat",
      availability: "Professional & Enterprise",
      response: "< 5 minutes",
      color: "purple",
    },
    {
      icon: <LifeBuoy className="w-6 h-6" />,
      name: "Dedicated Account Manager",
      availability: "Enterprise Only",
      response: "Priority Access",
      color: "indigo",
    },
  ];

  const sections = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "1. Service Availability Commitment",
      content: `Beelinx commits to maintaining the highest levels of service availability for all our customers. We guarantee 99.9% uptime for Enterprise customers, 99.5% for Professional customers, and 99.0% for Basic customers. This commitment excludes scheduled maintenance windows, which will be communicated at least 48 hours in advance. Our infrastructure is designed with redundancy and failover mechanisms to ensure continuous service delivery.`,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "2. Response Time Guarantees",
      content: `We understand that timely support is crucial for your business operations. Our support team is committed to responding to all support requests within the timeframes specified in our priority matrix. Response times are measured from the moment a ticket is created in our support system during business hours. For Enterprise customers, we provide 24/7 support coverage with guaranteed response times around the clock.`,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "3. Performance Standards",
      content: `Our platform is optimized to deliver consistent performance with page load times under 2 seconds for 95% of requests. API response times are guaranteed to be under 200ms for 99% of requests. We continuously monitor system performance and proactively address any degradation before it impacts your experience. Our infrastructure auto-scales to handle traffic spikes and maintain performance during peak usage.`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "4. Security and Data Protection",
      content: `We maintain enterprise-grade security measures including SOC 2 Type II compliance, encryption at rest and in transit, regular security audits, and penetration testing. Our data centers are certified to industry standards including ISO 27001. We guarantee that your data is backed up daily with a 30-day retention period. In the event of a security incident, we will notify affected customers within 24 hours.`,
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "5. Monitoring and Reporting",
      content: `We maintain comprehensive monitoring of all system components 24/7/365. Our status page provides real-time visibility into system health and any ongoing incidents. Enterprise customers receive monthly service reports detailing uptime statistics, performance metrics, and support ticket analytics. We use industry-leading monitoring tools to detect and resolve issues proactively before they impact service.`,
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "6. Service Credits",
      content: `If we fail to meet our SLA commitments, eligible customers may receive service credits. For every 1% below our uptime commitment, customers receive a 5% service credit, up to a maximum of 100% of monthly fees. Service credits must be requested within 30 days of the incident and are subject to verification. Credits are applied to future invoices and cannot be redeemed for cash.`,
    },
  ];

  const maintenanceWindows = [
    {
      type: "Scheduled Maintenance",
      frequency: "Monthly",
      duration: "2-4 hours",
      notice: "48 hours",
    },
    {
      type: "Emergency Maintenance",
      frequency: "As needed",
      duration: "Varies",
      notice: "Immediate",
    },
    {
      type: "Security Updates",
      frequency: "Quarterly",
      duration: "1-2 hours",
      notice: "1 week",
    },
    {
      type: "Feature Releases",
      frequency: "Bi-weekly",
      duration: "< 1 hour",
      notice: "24 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-cyan-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-cyan-600" />
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
      <div className="bg-linear-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white bg-opacity-20 rounded-full text-sky-600">
              <Award className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Service Level Agreement</h1>
          <div className="h-1 w-32 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-cyan-100">Effective Date: {lastUpdated}</p>
          <p className="mt-4 text-lg text-cyan-100 max-w-2xl mx-auto">
            Our commitment to delivering reliable, high-performance services
            with guaranteed uptime and support.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-cyan-600">
            <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-blue-600">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-4xl font-bold text-gray-900 mb-2">
              &lt;15min
            </div>
            <div className="text-gray-600">Critical Response Time</div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-purple-600">
            <LifeBuoy className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Enterprise Support</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Uptime Commitments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Uptime Commitments by Tier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uptimeCommitments.map((commitment, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                  commitment.tier === "Enterprise"
                    ? "border-purple-500 ring-4 ring-purple-100"
                    : "border-gray-200"
                }`}
              >
                <div
                  className={`p-3 bg-${commitment.color}-100 rounded-lg text-${commitment.color}-600 w-fit mb-4`}
                >
                  {commitment.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {commitment.tier}
                </h3>
                <div className="text-4xl font-bold text-cyan-600 mb-2">
                  {commitment.uptime}
                </div>
                <p className="text-gray-600 text-sm">Maximum Downtime</p>
                <p className="text-gray-800 font-semibold">
                  {commitment.downtime}
                </p>
                {commitment.tier === "Enterprise" && (
                  <div className="mt-4 bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-purple-700 font-semibold">
                      RECOMMENDED
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Matrix */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Support Response Times
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-linear-to-r from-cyan-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Priority Level
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Initial Response
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Target Resolution
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {responseTargets.map((target, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 bg-${target.color}-100 rounded-lg text-${target.color}-600`}
                          >
                            {target.icon}
                          </div>
                          <span
                            className={`font-semibold text-${target.color}-700`}
                          >
                            {target.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {target.description}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-cyan-100 text-cyan-800">
                          {target.initial}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          {target.resolution}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Support Channels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div
                  className={`p-3 bg-${channel.color}-100 rounded-lg text-${channel.color}-600 w-fit mb-4`}
                >
                  {channel.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{channel.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {channel.availability}
                </p>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${channel.color}-100 text-${channel.color}-800`}
                >
                  {channel.response}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 mt-1">
                  <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600">
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

        {/* Maintenance Windows */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Maintenance Windows
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Maintenance Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Frequency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Advance Notice
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {maintenanceWindows.map((window, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {window.type}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {window.frequency}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {window.duration}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {window.notice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* SLA Credits */}
        <div className="bg-linear-to-r from-cyan-600 to-sky-600 rounded-xl p-8 text-white mb-16">
          <div className="flex items-start space-x-4">
            <BarChart3 className="w-12 h-12 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Service Level Credits</h2>
              <p className="mb-4 text-cyan-100">
                We stand behind our SLA commitments. If we fail to meet our
                guaranteed uptime, you're eligible for service credits:
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2 text-gray-900">
                      Uptime Achievement
                    </p>
                    <ul className="space-y-2 text-gray-900">
                      <li>• 99.0% - 99.9%: No credit</li>
                      <li>• 95.0% - 98.9%: 10% credit</li>
                      <li>• 90.0% - 94.9%: 25% credit</li>
                      <li>• Below 90.0%: 50% credit</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-gray-900">
                      How to Claim
                    </p>
                    <ul className="space-y-2 text-gray-900">
                      <li>• Submit claim within 30 days</li>
                      <li>• Include incident details</li>
                      <li>• Credit applied to next invoice</li>
                      <li>• Maximum 100% of monthly fees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusions */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-sky-200 mb-16">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-8 h-8 text-sky-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                SLA Exclusions
              </h2>
              <p className="text-gray-700 mb-4">
                The following circumstances are excluded from our SLA
                calculations:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>
                    Scheduled maintenance windows communicated in advance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>
                    Issues caused by factors outside our control (force majeure,
                    internet service provider issues)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>
                    Service disruptions caused by customer actions or
                    configurations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>
                    Beta or preview features explicitly marked as not covered by
                    SLA
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span>
                    Third-party services or integrations not controlled by
                    Beelinx
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-cyan-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Phone className="w-6 h-6 mr-3 text-cyan-600" />
            Contact Our Support Team
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Questions about our SLA or need to report an issue? Our support team
            is ready to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Enterprise Support
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Phone: +91-80-1234-5678
              </p>
              <p className="text-gray-700 text-sm mb-2">
                Email: enterprise@beelinx.in
              </p>
              <p className="text-gray-700 text-sm">Available: 24/7/365</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                General Support
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Email: support@beelinx.in
              </p>
              <p className="text-gray-700 text-sm mb-2">
                Status Page: status.beelinx.in
              </p>
              <p className="text-gray-700 text-sm">
                Available: Business Hours (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-600 border-t border-gray-200 pt-8">
          <p>
            This SLA is part of your service agreement and is subject to the
            Terms of Service.
          </p>
          <p className="mt-2">Version 2.0 | Last Updated: {lastUpdated}</p>
        </div>
      </main>
    </div>
  );
}
