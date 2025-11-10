import {
  Shield,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Globe,
  AlertCircle,
  Scale,
  Link,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "March 15th, 2024";

  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Introduction to Privacy Policy",
      content: `This Privacy Policy ("Policy") applies to you, your use of the Bloomersy website offered at bloomersy.com, the services offered in Bloomersy's marketplace and any other services offered by us. By accessing and using any portion of the Bloomersy website or "Website" (as defined in the Terms & Conditions), or accessing and/or using the Bloomersy service or "Service" (as defined in the Terms & Conditions), you acknowledge that you have read, understood, and agree to be bound by this Policy.`,
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "2. Information we collect and how we use it",
      content: `We collect both information that identifies you personally and information that does not ("Personal Information" or "PI"). We collect information only where we have a legal basis for doing so under EU data protection law. We collect information that you provide to us when you create an account on our Website. In addition to other information, you will be asked to provide your name, email address, and password.`,
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "3. Account Information of Minors/Teens",
      content: `If you create an account, you must also choose the type of account you'd like to open on our Website: either a Member account or Bloomersy, we will be required to collect Personal Information such as your name, email address, phone number, password to set up your account. For certain types of accounts, we may collect additional information, including details about each tenant, rental unit and leases, room and unit verification, lease data, past purchase histories and data on your billing.`,
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "4. Customer Information",
      content: `We may collect your personal information, such as your address, health records, family credit district details, credit cards, and email addresses when payments are made through Bloomersy Checkout. We view this information within payment functionality to process orders. We may forward your information to a property through the services order or through their business.`,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "5. Activity",
      content: `We may collect information relating to your use of this Website, such as the download app profile. The pages you view, your shopping activity, transaction data, IP address, location, operating system, and browser in some cases. We, or our Bloomersy partners could use cookies and other technologies to collect information about you.`,
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "6. Cookies",
      content: `Bloomersy and our partners use cookies to analyze activity and measure the quality of our service. The term "cookies" refers to small files that are stored on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently, as well as to provide information to the website owners.`,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "7. Enforcement",
      content: `We may access, preserve, and disclose any information we have about you to external parties if we, in good faith, believe it is necessary or appropriate to enforce this Policy including the investigation of potential violations. We share your information in the following cases.`,
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "8. Transfer of Information",
      content: `We are based in India and the information we collect is governed by the law of India. If you are accessing the site from outside India, please be aware that information collected through the site may be transferred to, processed, stored, and used in India. Data protection laws in India may be different from those of your country of residence.`,
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "9. Links",
      content: `We provided links for your convenience. They are not intended as a
              way to endorse, recommend, or vouch for the content of any
              third-party information that may be accessed by you directly
              through the use of links from this Website, links to our Website,
              or products accessible through the use of our Services.`,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-sky-500" />
              <span className="text-2xl font-bold text-gray-900">
                Bloomersy
              </span>
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="h-1 w-24 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Last updated on {lastUpdated}</p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="shrink-0 mt-1">
                  <div className="p-3 bg-blue-100 rounded-lg text-sky-500">
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

        {/* Additional Sections */}
        {/* <div className="mt-8 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              9. Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We provided links for your convenience. They are not intended as a
              way to endorse, recommend, or vouch for the content of any
              third-party information that may be accessed by you directly
              through the use of links from this Website, links to our Website,
              or products accessible through the use of our Services.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              10. Your access of Personal Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In a substantial majority of cases, we will enable you to view
              your Personal Information to correct or update any privacy
              settings provided by accessing the "Account" section of the
              Website.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              11. Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We encrypt & guarantee protection. We use industry standard
              measures and tools to protect the personal Information obtained of
              our customers. We believe that we have tools appropriate to our
              data practices and have chosen security measures that align with
              the policies for maintaining the security of information.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              12. Terms and modifications to this Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy is subject to modifications. If we make a
              change to this Policy, such changes will be posted in one of the
              updates, a short review will be shared on the Website, or we will
              provide notice to you according to the law. Any changes will be
              incorporated into this Website's Privacy Policy.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              13. Applicable law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of this Website will be governed by you continued in
              accordance with the laws of India. Users agree that any matter
              that may arise will be according to the Website, including any
              exclusive venue in India governed under the Bangalore, India and
              elsewhere.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              14. Complaints and Grievance Redressal
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you require any information to know about us or if you have a
              question, we will need to the Personal Information to pull other
              service and email information from you as provided by us.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              15. DPO
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Bloomersy Software Private Limited</strong>
            </p>
            <p className="text-gray-700 mb-2">
              Bangalore University campus on Hosakerehalli, Gnana Bharathi
              Campus
            </p>
            <p className="text-gray-700 mb-2">
              Email:{" "}
              <a
                href="mailto:dpo@bloomersy.com"
                className="text-blue-600 hover:underline"
              >
                dpo@bloomersy.com
              </a>
            </p>
            <p className="text-gray-700">
              Registered under:{" "}
              <a
                href="http://bloomersy.com/grievance.sml"
                className="text-blue-600 hover:underline"
              >
                http://bloomersy.com/grievance.sml
              </a>
            </p>
          </div>
        </div> */}
      </main>
    </div>
  );
}
