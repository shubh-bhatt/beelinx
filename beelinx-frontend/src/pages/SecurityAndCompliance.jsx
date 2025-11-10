import React, { useState } from "react";
import {
  Shield,
  Lock,
  FileCheck,
  Eye,
  Server,
  Key,
  AlertTriangle,
  CheckCircle,
  Globe,
  Users,
  Database,
  Fingerprint,
  ShieldCheck,
  Activity,
  FileText,
  Award,
  Zap,
  Cloud,
} from "lucide-react";

export default function SecurityCompliancePage() {
  const lastUpdated = "March 15th, 2024";
  const [selectedCert, setSelectedCert] = useState("soc2");

  const certifications = [
    {
      name: "SOC 2 Type II",
      icon: <Award className="w-6 h-6" />,
      status: "Certified",
      year: "2024",
      color: "blue",
      description: "Security, availability, and confidentiality controls",
    },
    {
      name: "ISO 27001",
      icon: <ShieldCheck className="w-6 h-6" />,
      status: "Certified",
      year: "2024",
      color: "purple",
      description: "Information security management systems",
    },
    {
      name: "GDPR",
      icon: <Globe className="w-6 h-6" />,
      status: "Compliant",
      year: "2024",
      color: "green",
      description: "European data protection regulation",
    },
    {
      name: "HIPAA",
      icon: <FileCheck className="w-6 h-6" />,
      status: "Compliant",
      year: "2024",
      color: "red",
      description: "Healthcare information privacy standards",
    },
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Encryption at Rest & Transit",
      description:
        "All data encrypted using AES-256 encryption at rest and TLS 1.3 in transit",
      features: ["AES-256 bit encryption", "TLS 1.3 protocol", "Key rotation"],
      color: "blue",
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Access Control",
      description:
        "Multi-factor authentication and role-based access control for all users",
      features: ["2FA/MFA required", "RBAC implementation", "SSO support"],
      color: "purple",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Monitoring & Logging",
      description: "24/7 security monitoring with comprehensive audit trails",
      features: [
        "Real-time monitoring",
        "Complete audit logs",
        "Anomaly detection",
      ],
      color: "green",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Protection",
      description:
        "Automated backups with point-in-time recovery and disaster recovery",
      features: ["Daily backups", "30-day retention", "Geo-redundancy"],
      color: "cyan",
    },
  ];

  const complianceFrameworks = [
    {
      framework: "SOC 2 Type II",
      scope: "Security, Availability, Confidentiality",
      auditor: "Independent Third-Party",
      frequency: "Annual",
      lastAudit: "January 2024",
      status: "Active",
    },
    {
      framework: "ISO 27001:2013",
      scope: "Information Security Management",
      auditor: "BSI Group",
      frequency: "Annual",
      lastAudit: "February 2024",
      status: "Active",
    },
    {
      framework: "GDPR",
      scope: "Data Protection & Privacy",
      auditor: "Internal & External",
      frequency: "Continuous",
      lastAudit: "Ongoing",
      status: "Compliant",
    },
    {
      framework: "HIPAA",
      scope: "Healthcare Data Security",
      auditor: "Qualified Assessor",
      frequency: "Annual",
      lastAudit: "March 2024",
      status: "Compliant",
    },
  ];

  const securityPractices = [
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Identity & Authentication",
      practices: [
        "Multi-factor authentication (MFA) required for all accounts",
        "Single Sign-On (SSO) integration with SAML 2.0",
        "Password policies enforcing complexity requirements",
        "Biometric authentication support for mobile devices",
        "Session management with automatic timeout",
      ],
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Security",
      practices: [
        "Cloud infrastructure hosted in SOC 2 certified data centers",
        "Network segmentation and firewall protection",
        "DDoS protection and rate limiting",
        "Automated security patch management",
        "Intrusion detection and prevention systems (IDS/IPS)",
      ],
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Security Operations",
      practices: [
        "24/7 security operations center (SOC) monitoring",
        "Incident response team with defined procedures",
        "Regular vulnerability assessments and penetration testing",
        "Security information and event management (SIEM)",
        "Threat intelligence integration",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Application Security",
      practices: [
        "Secure software development lifecycle (SDLC)",
        "Code reviews and static analysis scanning",
        "Dynamic application security testing (DAST)",
        "Dependency scanning for vulnerabilities",
        "Bug bounty program with responsible disclosure",
      ],
    },
  ];

  const dataPrivacy = [
    {
      principle: "Data Minimization",
      description:
        "We collect only the data necessary for service delivery and business operations.",
    },
    {
      principle: "Purpose Limitation",
      description:
        "Data is used only for the purposes explicitly stated at collection time.",
    },
    {
      principle: "User Control",
      description:
        "Users have full control over their data with rights to access, modify, and delete.",
    },
    {
      principle: "Transparency",
      description:
        "Clear communication about data collection, processing, and storage practices.",
    },
    {
      principle: "Data Retention",
      description:
        "Data retained only as long as necessary and securely deleted afterwards.",
    },
    {
      principle: "Third-Party Oversight",
      description:
        "All third-party vendors undergo security assessments and comply with our standards.",
    },
  ];

  const incidentResponse = [
    {
      phase: "Detection",
      timeline: "Immediate",
      actions: "Automated monitoring and alerting systems",
    },
    {
      phase: "Analysis",
      timeline: "Within 15 minutes",
      actions: "Security team assesses severity and impact",
    },
    {
      phase: "Containment",
      timeline: "Within 1 hour",
      actions: "Isolate affected systems and prevent spread",
    },
    {
      phase: "Notification",
      timeline: "Within 24 hours",
      actions: "Notify affected customers and stakeholders",
    },
    {
      phase: "Resolution",
      timeline: "As needed",
      actions: "Remediate vulnerabilities and restore services",
    },
    {
      phase: "Post-Incident",
      timeline: "Within 7 days",
      actions: "Complete analysis and implement improvements",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 mt-20">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-sky-600 via-sky-700 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white bg-opacity-20 rounded-full text-sky-600">
              <ShieldCheck className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Security & Compliance</h1>
          <div className="h-1 w-32 bg-white mx-auto mb-4"></div>
          <p className="text-xl text-blue-100">Last Updated: {lastUpdated}</p>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Your trust is our priority. Learn about our comprehensive security
            measures and compliance certifications.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-blue-600">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <div className="text-4xl font-bold text-gray-900 mb-2">4+</div>
            <div className="text-gray-600">Compliance Certifications</div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-purple-600">
            <Lock className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <div className="text-4xl font-bold text-gray-900 mb-2">256-bit</div>
            <div className="text-gray-600">AES Encryption</div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-green-600">
            <Eye className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Security Monitoring</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 ${
                  cert.name === "SOC 2 Type II"
                    ? "border-blue-500 ring-4 ring-blue-100"
                    : "border-gray-200"
                }`}
              >
                <div
                  className={`p-3 bg-${cert.color}-100 rounded-lg text-${cert.color}-600 w-fit mb-4`}
                >
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.name}
                </h3>
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    {cert.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                <p className="text-xs text-gray-500">Updated: {cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Core Security Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div
                  className={`p-3 bg-${feature.color}-100 rounded-lg text-${feature.color}-600 w-fit mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Frameworks Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Compliance Framework Details
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-linear-to-r from-sky-600 to-sky-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Framework
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Scope
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Auditor
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Frequency
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Last Audit
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {complianceFrameworks.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {item.framework}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.scope}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.auditor}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.frequency}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.lastAudit}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Security Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Security Best Practices
          </h2>
          <div className="space-y-6">
            {securityPractices.map((practice, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="shrink-0 mt-1">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                      {practice.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {practice.title}
                    </h3>
                    <ul className="space-y-2">
                      {practice.practices.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Privacy Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Data Privacy Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataPrivacy.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <h3 className="font-bold text-gray-900">{item.principle}</h3>
                </div>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Incident Response */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Incident Response Process
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Phase
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Timeline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Actions Taken
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {incidentResponse.map((phase, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {phase.phase}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                          {phase.timeline}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {phase.actions}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Security Audits */}
        <div className="bg-linear-to-r from-sky-600 to-sky-700 rounded-xl p-8 text-white mb-16">
          <div className="flex items-start space-x-4">
            <FileCheck className="w-12 h-12 shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Regular Security Audits
              </h2>
              <p className="mb-4 text-blue-100">
                We conduct comprehensive security assessments to ensure the
                highest level of protection:
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-3 text-gray-900">
                      Internal Audits
                    </p>
                    <ul className="space-y-2 text-sm text-gray-900">
                      <li>• Quarterly security assessments</li>
                      <li>• Continuous vulnerability scanning</li>
                      <li>• Weekly code security reviews</li>
                      <li>• Monthly access control audits</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-3 text-gray-900">
                      External Audits
                    </p>
                    <ul className="space-y-2 text-sm text-gray-900">
                      <li>• Annual penetration testing</li>
                      <li>• Third-party security assessments</li>
                      <li>• Compliance certification audits</li>
                      <li>• Bug bounty program</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Breach Commitment */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-red-200 mb-16">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-red-600 shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Breach Notification
              </h2>
              <p className="text-gray-700 mb-4">
                In the unlikely event of a data breach, we commit to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>
                    Notify affected customers within 24 hours of discovery
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>
                    Provide detailed information about the nature and scope of
                    the breach
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>
                    Outline steps taken to contain and remediate the incident
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>
                    Offer guidance on protective measures customers should take
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>
                    Comply with all applicable regulatory reporting requirements
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Security Team */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-blue-600" />
            Contact Our Security Team
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Have security concerns or questions? Our dedicated security team is
            here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Security Issues
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Email: security@beelinx.in
              </p>
              <p className="text-gray-700 text-sm mb-2">
                PGP Key: Available on request
              </p>
              <p className="text-gray-700 text-sm">Response: Within 24 hours</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Compliance Inquiries
              </h3>
              <p className="text-gray-700 text-sm mb-2">
                Email: compliance@beelinx.in
              </p>
              <p className="text-gray-700 text-sm mb-2">
                Documentation: Available on request
              </p>
              <p className="text-gray-700 text-sm">Response: Within 48 hours</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-sm text-gray-600 border-t border-gray-200 pt-8">
          <p>
            Our security and compliance practices are continuously updated to
            meet evolving standards.
          </p>
          <p className="mt-2">Version 3.1 | Last Updated: {lastUpdated}</p>
        </div>
      </main>
    </div>
  );
}
