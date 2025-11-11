import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Send,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitMessage("Successfully subscribed!");
      setEmail("");
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-linear-to-br from-sky-50 to-white">
      {/* CTA Section */}
      <div className="bg-linear-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Ready to Build with Us?
              </h2>
              <p className="text-sky-100">
                Start integrating powerful payment APIs today
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Request Demo
              </button>
              <button
                type="button"
                className="bg-sky-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-800 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Get Sandbox Access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about">About Us </Link>
              </li>

              <li>
                <Link to="/">Customers </Link>
              </li>
              <li>
                <Link to="/">Careers </Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
              <li>
                <Link to="/developers">Developers</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Collect APIs
                </Link>
                <p className="text-xs text-gray-400 mt-1">
                  Virtual Account, UPI QR
                </p>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Pay APIs
                </Link>
                <p className="text-xs text-gray-400 mt-1">IMPS, NEFT, RTGS</p>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Verify APIs
                </Link>
                <p className="text-xs text-gray-400 mt-1">PAN, Aadhaar, Bank</p>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Reconcile APIs
                </Link>
                <p className="text-xs text-gray-400 mt-1">
                  Settlement & Reporting
                </p>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  API Gateway Management
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Payment Orchestration
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  KYC & Onboarding Support
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Compliance & Audit
                </Link>
              </li>

              <li>
                <Link
                  to="/legal-and-compliance"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Legal & Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  MSME Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Government Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Custom API Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Documentation
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to={"/partners-association"}
                  className="flex items-center gap-1 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  Partner Associate
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-1 text-gray-600 hover:text-sky-600 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Newsletter & Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 py-12 border-t border-sky-200">
          {/* Newsletter */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Get the latest on new APIs, compliance updates, and fintech
              trends.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex gap-2 flex-col md:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-all duration-200 flex items-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
            {submitMessage && (
              <p className="text-green-600 text-sm mt-2 font-medium">
                {submitMessage}
              </p>
            )}
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sky-900 font-bold text-lg mb-3">
              Get in Touch
            </h3>
            <div className="space-y-3 mb-4">
              <p className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-sky-500" />
                support@yourdomain.com
              </p>
              <p className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-sky-500" />
                +91 123 456 7890
              </p>
              <p className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-sky-500 mt-0.5" />
                Greater Noida, Uttar Pradesh, India
              </p>
            </div>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Github].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 hover:bg-sky-600 hover:text-white transition-all duration-300 hover:scale-110 cursor-default"
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Legal Links */}
        {/* <div className="py-6 border-t border-sky-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 justify-center">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "SLA",
              "Security & Compliance",
            ].map((item, idx) => (
              <React.Fragment key={item}>
                <span className="hover:text-sky-600 transition-colors cursor-default">
                  {item}
                </span>
                {idx < 4 && <span className="text-gray-300">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div> */}
        {/* Legal Links */}
        <div className="py-6 border-t border-sky-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 justify-center">
            <Link
              to="/privacy-policy"
              className="hover:text-sky-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>

            <Link
              to="/terms-of-service"
              className="hover:text-sky-600 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-gray-300">|</span>

            <Link
              to="/cookie-policy"
              className="hover:text-sky-600 transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="text-gray-300">|</span>

            <Link
              to="/service-legal-agreement"
              className="hover:text-sky-600 transition-colors"
            >
              SLA
            </Link>
            <span className="text-gray-300">|</span>

            <Link
              to="/security-compliance"
              className="hover:text-sky-600 transition-colors"
            >
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sky-200 text-sm">
              © 2025 Beelinx Technologies Pvt. Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-sky-200">
              <span className="px-3 py-1 bg-sky-800 rounded-full">
                PCI DSS Certified
              </span>
              <span className="px-3 py-1 bg-sky-800 rounded-full">
                ISO 27001
              </span>
              <span className="px-3 py-1 bg-sky-800 rounded-full">
                RBI Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
