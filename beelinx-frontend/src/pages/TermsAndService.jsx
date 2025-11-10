import {
  FileText,
  Shield,
  AlertTriangle,
  Users,
  CreditCard,
  Scale,
  Lock,
  Globe,
  UserX,
  RefreshCw,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "March 15th, 2024";

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Acceptance of Terms",
      content: `By accessing and using Beelinx's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. These Terms of Service ("Terms") govern your access to and use of the Beelinx platform, including any content, functionality, and services offered on or through Beelinx.in.`,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "2. User Accounts",
      content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.`,
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "3. User Responsibilities",
      content: `You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service: (a) in any way that violates any applicable national or international law or regulation; (b) to transmit, or procure the sending of, any advertising or promotional material without our prior written consent; (c) to impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.`,
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "4. Payment and Billing",
      content: `Certain aspects of the Service may be provided for a fee or other charge. If you elect to use paid aspects of the Service, you agree to the pricing and payment terms. We may add new services for additional fees and charges, or amend fees and charges for existing services, at any time at our sole discretion. All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities.`,
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "5. Intellectual Property Rights",
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Beelinx and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Beelinx.`,
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "6. Prohibited Activities",
      content: `You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activity includes, but is not limited to: systematic retrieval of data or other content from the Service to create a collection, compilation, database, or directory without written permission from us.`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "7. Disclaimer of Warranties",
      content: `Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. Beelinx does not warrant that the Service will function uninterrupted, secure, or available at any particular time or location.`,
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "8. Limitation of Liability",
      content: `In no event shall Beelinx, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service.`,
    },
    {
      icon: <UserX className="w-6 h-6" />,
      title: "9. Termination",
      content: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.`,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "10. Governing Law",
      content: `These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`,
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "11. Changes to Terms",
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.`,
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "12. Contact Information",
      content: `If you have any questions about these Terms, please contact us at support@Beelinx.in. We will make every effort to resolve any concerns you may have regarding these Terms of Service. Our support team is available to assist you with any questions or concerns about your use of the Service.`,
    },
  ];

  const highlights = [
    {
      title: "User Agreement",
      description: "By using our service, you agree to these terms",
    },
    {
      title: "Privacy Protected",
      description: "Your data is secure and protected",
    },
    {
      title: "Fair Usage",
      description: "Use the service responsibly and legally",
    },
    {
      title: "24/7 Support",
      description: "We're here to help you anytime",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
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
      <div className="bg-linear-to-r from-sky-600 via-sky-700 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
          <div className="h-1 w-32 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-indigo-100">
            Last updated on {lastUpdated}
          </p>
          <p className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. By
            accessing our platform, you agree to be bound by these terms.
          </p>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-amber-600 mr-3 shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">
                Important Notice
              </h3>
              <p className="text-amber-800 text-sm">
                These Terms of Service constitute a legally binding agreement
                between you and Beelinx. Please read them carefully. If you do
                not agree with any part of these terms, you should not use our
                services.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 mt-1">
                  <div className="p-3 bg-indigo-100 rounded-lg text-sky-600">
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

        {/* Additional Information */}
        <div className="mt-12 bg-linear-to-r from-sky-600 to-sky-700 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Need Help Understanding These Terms?
          </h2>
          <p className="mb-6 text-indigo-100">
            Our team is here to help you understand any part of our Terms of
            Service. We believe in transparency and want to ensure you feel
            comfortable using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@Beelinx.in"
              className="bg-white text-sky-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300 text-center"
            >
              Contact Support
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition-colors duration-300 text-center"
            >
              View Privacy Policy
            </a>
          </div>
        </div>

        {/* Agreement Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border-2 border-indigo-200">
          <div className="flex items-start space-x-4">
            <CheckCircle className="w-8 h-8 text-green-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Your Agreement
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using Beelinx's services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service. You
                also acknowledge that you have read and understood our Privacy
                Policy.
              </p>
              <p className="text-sm text-gray-600">
                Effective Date: {lastUpdated} | Version 2.0
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Contact Us
          </h3>
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-sky-600" />
              <span>
                Email:{" "}
                <a
                  href="mailto:support@Beelinx.in"
                  className="text-sky-600 hover:underline"
                >
                  support@Beelinx.in
                </a>
              </span>
            </p>
            <p className="flex items-center">
              <Globe className="w-5 h-5 mr-3 text-sky-600" />
              <span>
                Website:{" "}
                <a
                  href="https://Beelinx.in"
                  className="text-sky-600 hover:underline"
                >
                  www.Beelinx.in
                </a>
              </span>
            </p>
            <p className="flex items-start">
              <Shield className="w-5 h-5 mr-3 text-sky-600 mt-1" />
              <span>
                <strong>Beelinx Software Private Limited</strong>
                <br />
                Bangalore University Campus, Hosakerehalli
                <br />
                Gnana Bharathi Campus, Bangalore, India
              </span>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-600 border-t border-gray-200 pt-8">
          <p>
            These Terms of Service are subject to change. We will notify you of
            any material changes via email or through our platform.
          </p>
        </div>
      </main>
    </div>
  );
}
