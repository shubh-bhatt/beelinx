import React, { useState } from "react";
import { Link } from "react-router-dom";
import ComplianceSVG from "../assets/compliance_signhere.svg";
import {
  Shield,
  Lock,
  FileCheck,
  ChevronDown,
  CheckCircle,
  Server,
  Key,
  Eye,
  Users,
  Building2,
  Globe,
  FileText,
  Award,
  AlertCircle,
  Download,
  MessageSquare,
  Briefcase,
  Landmark,
  BarChart3,
  ShieldCheck,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react";

export default function LegalCompliancePage() {
  const [openPolicy, setOpenPolicy] = useState(null);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showTalkModal, setShowTalkModal] = useState(false);

  const togglePolicy = (index) => {
    setOpenPolicy(openPolicy === index ? null : index);
  };

  const certifications = [
    {
      name: "PCI DSS",
      icon: <Lock className="w-8 h-8" />,
      description: "Payment Card Industry Data Security Standard",
      color: "sky",
      status: "Level 1 Certified",
    },
    {
      name: "ISO 27001",
      icon: <ShieldCheck className="w-8 h-8" />,
      description: "Information Security Management System",
      color: "sky",
      status: "Certified 2024",
    },
    {
      name: "SOC 2 Type II",
      icon: <Award className="w-8 h-8" />,
      description: "Security, Availability & Confidentiality",
      color: "sky",
      status: "Audited Annually",
    },
    {
      name: "SSL/TLS",
      icon: <Key className="w-8 h-8" />,
      description: "256-bit Encryption Standard",
      color: "sky",
      status: "Active",
    },
    {
      name: "Data Localization",
      icon: <Server className="w-8 h-8" />,
      description: "India-based servers for sensitive data",
      color: "sky",
      status: "Compliant",
    },
    {
      name: "GDPR Ready",
      icon: <Globe className="w-8 h-8" />,
      description: "European Data Protection Regulation",
      color: "sky",
      status: "Compliant",
    },
  ];

  const regulations = [
    {
      title: "RBI Guidelines",
      icon: <Landmark className="w-6 h-6" />,
      description:
        "Fully compliant with Reserve Bank of India guidelines for payment aggregators, KYC norms, and digital payment security standards.",
      items: [
        "Payment Aggregator Compliance",
        "KYC & AML Requirements",
        "Transaction Monitoring",
        "Customer Grievance Redressal",
      ],
    },
    {
      title: "NPCI Certifications",
      icon: <CheckCircle className="w-6 h-6" />,
      description:
        "Certified by National Payments Corporation of India for UPI-based payment systems and digital transaction processing.",
      items: [
        "UPI Integration Certified",
        "IMPS & NEFT Compliance",
        "Bharat QR Standards",
        "RuPay Network Integration",
      ],
    },
    {
      title: "UIDAI Guidelines",
      icon: <Users className="w-6 h-6" />,
      description:
        "Adherence to Aadhaar authentication and e-KYC guidelines as per Unique Identification Authority of India regulations.",
      items: [
        "Aadhaar Authentication API",
        "e-KYC Compliance",
        "Data Minimization",
        "Consent-based Verification",
      ],
    },
    {
      title: "Data Privacy Laws",
      icon: <FileCheck className="w-6 h-6" />,
      description:
        "Compliant with IT Act 2000, SPDI Rules 2011, and Digital Personal Data Protection Act 2023 for comprehensive data protection.",
      items: [
        "IT Act 2000 Compliance",
        "DPDP Act 2023 Ready",
        "SPDI Rules Adherence",
        "Cross-border Data Transfer",
      ],
    },
  ];

  const policies = [
    {
      name: "Privacy Policy",
      icon: <Shield className="w-5 h-5" />,
      description:
        "Details on how we collect, use, store, and protect your personal information in accordance with Indian data protection laws.",
      lastUpdated: "March 2024",
      link: "privacy-policy",
    },
    {
      name: "Terms of Service",
      icon: <FileText className="w-5 h-5" />,
      description:
        "Legal agreement governing the use of our platform, services, and APIs including user rights and responsibilities.",
      lastUpdated: "March 2024",
      link: "terms-of-service",
    },
    {
      name: "Refund & Cancellation Policy",
      icon: <BarChart3 className="w-5 h-5" />,
      description:
        "Comprehensive policy outlining refund eligibility, cancellation procedures, and timelines for all our services.",
      lastUpdated: "February 2024",
      link: "/",
    },
    {
      name: "Cookie Policy",
      icon: <Eye className="w-5 h-5" />,
      description:
        "Information about cookies and tracking technologies used on our platform and how to manage your preferences.",
      lastUpdated: "January 2024",
      link: "cookie-policy",
    },
    {
      name: "API Fair Usage Policy",
      icon: <Server className="w-5 h-5" />,
      description:
        "Guidelines for API usage limits, rate limiting, acceptable use, and best practices for integration partners.",
      lastUpdated: "March 2024",
      link: "/",
    },
    {
      name: "Service Level Agreement (SLA)",
      icon: <CheckCircle className="w-5 h-5" />,
      description:
        "Guaranteed uptime commitments, support response times, and service credits for different subscription tiers.",
      lastUpdated: "March 2024",
      link: "service-legal-agreement",
    },
  ];

  const securityPractices = [
    {
      title: "Data Encryption",
      icon: <Lock className="w-6 h-6" />,
      description: "AES-256 encryption at rest, TLS 1.3 in transit",
      color: "blue",
    },
    {
      title: "Multi-Layer Authentication",
      icon: <Key className="w-6 h-6" />,
      description: "2FA/MFA, biometric, and SSO support",
      color: "purple",
    },
    {
      title: "Threat Detection",
      icon: <Eye className="w-6 h-6" />,
      description: "24/7 monitoring with AI-powered anomaly detection",
      color: "green",
    },
    {
      title: "Security Training",
      icon: <Users className="w-6 h-6" />,
      description: "Quarterly employee security awareness programs",
      color: "cyan",
    },
    {
      title: "Secure Coding",
      icon: <FileCheck className="w-6 h-6" />,
      description: "SAST, DAST, and regular penetration testing",
      color: "indigo",
    },
    {
      title: "Incident Response",
      icon: <AlertCircle className="w-6 h-6" />,
      description: "Dedicated SOC team with 15-min response time",
      color: "red",
    },
  ];

  const customerCompliance = [
    {
      segment: "MSMEs",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "Simplified KYC onboarding",
        "GST compliance tools",
        "Automated reconciliation",
        "Invoice management",
      ],
      color: "sky",
    },
    {
      segment: "Enterprises",
      icon: <Building2 className="w-8 h-8" />,
      features: [
        "Bulk payout processing",
        "Advanced reconciliation",
        "99.9% SLA-backed uptime",
        "Dedicated account manager",
      ],
      color: "sky",
    },
    {
      segment: "Government",
      icon: <Landmark className="w-8 h-8" />,
      features: [
        "Audit-ready reporting",
        "Strict data residency",
        "Role-based access control",
        "Compliance documentation",
      ],
      color: "sky",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 mt-20">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-sky-600 via-sky-700 to-cyan-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Compliance, Security, and Trust First
              </h1>
              <div className="h-1 w-24 bg-white mb-6"></div>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We are fully compliant with Indian regulations and global
                standards to safeguard your business and customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowCertModal(true)}
                  className="bg-white text-sky-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Request Certificates</span>
                </button>
                <button
                  onClick={() => setShowTalkModal(true)}
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Talk to Expert</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-3xl"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-5 border border-white border-opacity-20">
                  <img src={ComplianceSVG} className="h-100 w-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Regulatory Compliance Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Regulatory Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified and compliant with all major Indian regulatory bodies
              and international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {regulations.map((regulation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 shrink-0">
                    {regulation.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {regulation.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {regulation.description}
                    </p>
                    <ul className="space-y-2">
                      {regulation.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowCertModal(true)}
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-lg inline-flex items-center space-x-2 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span>Request Compliance Certificates</span>
            </button>
          </div>
        </section>

        {/* Certifications & Standards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading security certifications and compliance standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-${cert.color}-200 hover:border-${cert.color}-400`}
              >
                <div
                  className={`p-4 bg-${cert.color}-100 rounded-lg text-${cert.color}-600 w-fit mb-4`}
                >
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${cert.color}-100 text-${cert.color}-800`}
                >
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Policies Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Legal Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent policies governing our services and your data
            </p>
          </div>

          <div className="space-y-4">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => togglePolicy(index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {policy.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-gray-900">
                        {policy.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Last updated: {policy.lastUpdated}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openPolicy === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openPolicy === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 mb-4">{policy.description}</p>
                    <Link to={`/${policy.link}`}>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 cursor-pointer">
                        <BookOpen className="w-4 h-4" />
                        <span>Read Full Policy</span>
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Security Practices */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Security Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade security measures protecting your data 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div
                  className={`p-3 bg-${practice.color}-100 rounded-lg text-${practice.color}-600 w-fit mb-4`}
                >
                  {practice.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {practice.title}
                </h3>
                <p className="text-gray-600 text-sm">{practice.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance for Customers */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compliance for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored compliance solutions for different business segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {customerCompliance.map((customer, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-${customer.color}-200`}
              >
                <div
                  className={`p-4 bg-${customer.color}-100 rounded-lg text-${customer.color}-600 w-fit mb-4 mx-auto`}
                >
                  {customer.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {customer.segment}
                </h3>
                <ul className="space-y-3">
                  {customer.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowTalkModal(true)}
              className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-colors font-semibold text-lg inline-flex items-center space-x-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Talk to Compliance Team</span>
            </button>
          </div>
        </section>

        {/* Audit & Reporting */}
        <section className="mb-20">
          <div className="bg-linear-to-r from-sky-500 to-sky-600 rounded-2xl p-10 text-white">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-xl shrink-0">
                <BarChart3 className="w-12 h-12 text-sky-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">
                  Audit & Reporting Excellence
                </h2>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  We maintain the highest standards of transparency and
                  accountability through regular audits and comprehensive
                  reporting.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">
                      External Audits
                    </h3>
                    <ul className="space-y-2 text-gray-900">
                      <li>• Annual security assessments</li>
                      <li>• Third-party penetration testing</li>
                      <li>• Compliance certification reviews</li>
                      <li>• Independent vulnerability scanning</li>
                    </ul>
                  </div>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">
                      Compliance Reporting
                    </h3>
                    <ul className="space-y-2 text-gray-900">
                      <li>• RBI/SEBI compliance checks</li>
                      <li>• Government audit reports</li>
                      <li>• API logging & transparency</li>
                      <li>• Real-time monitoring dashboards</li>
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="bg-white text-sky-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center space-x-2 cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Request Audit Report</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section>
          <div className="bg-linear-to-br from-sky-500 via-sky-600 to-cyan-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">
              Compliance That Builds Confidence
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Partner with us for a compliance-first approach that protects your
              business and earns customer trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowCertModal(true)}
                className="bg-white text-sky-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Request Certificates</span>
              </button>
              <button
                onClick={() => setShowTalkModal(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Talk to Compliance Expert</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Certificate Request Modal */}
      {showCertModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Request Compliance Certificates
            </h3>
            <p className="text-gray-600 mb-6">
              Fill in your details to receive our compliance certificates and
              documentation.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Certificates Required
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Certificates</option>
                  <option>PCI DSS</option>
                  <option>ISO 27001</option>
                  <option>SOC 2</option>
                  <option>RBI Compliance</option>
                  <option>NPCI Certification</option>
                </select>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowCertModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Talk to Expert Modal */}
      {showTalkModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Talk to a Compliance Expert
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation with our compliance team to discuss your
              specific requirements.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Business Segment
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Select segment</option>
                  <option>MSME</option>
                  <option>Enterprise</option>
                  <option>Government</option>
                  <option>Startup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Tell us about your compliance requirements..."
                ></textarea>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
                >
                  Schedule Call
                </button>
                <button
                  type="button"
                  onClick={() => setShowTalkModal(false)}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
