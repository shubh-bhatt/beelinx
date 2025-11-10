import React, { useState } from 'react';
import {  Download, ExternalLink, BookOpen, FileText, Award, Shield, Video, ArrowRight, Clock, TrendingUp } from 'lucide-react';

const ResourceHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
 

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'whitepapers', label: 'Whitepapers', icon: Download },
    { id: 'case-studies', label: 'Case Studies', icon: Award },
    { id: 'compliance', label: 'Compliance', icon: Shield },
    { id: 'webinars', label: 'Webinars', icon: Video }
  ];

  const featuredResource = {
    title: "UPI Growth Trends 2025: The Future of Digital Payments",
    description: "Comprehensive analysis of UPI adoption, transaction volumes, and emerging payment patterns shaping India's fintech landscape.",
    image: "/images/ResourceImages/WhitePaper.jpeg",
    type: "Whitepaper"
  };

  const blogs = [
    {
      title: "Understanding RBI's New Payment Aggregator Guidelines",
      image: "/images/ResourceImages/Compliance.jpeg",
      readTime: "5 min",
      category: "Compliance"
    },
    {
      title: "API-First Architecture: Scaling Payment Infrastructure",
      image: "/images/ResourceImages/Technology.jpeg",
      readTime: "7 min",
      category: "Technology"
    },
    {
      title: "Real-Time Settlement: The Next Frontier in Fintech",
      image: "/images/ResourceImages/Industry-News.jpeg",
      readTime: "6 min",
      category: "Industry News"
    }
  ];

  const whitepapers = [
    {
      title: "Digital Lending Compliance Framework 2025",
      description: "Complete guide to regulatory compliance for digital lending platforms",
      pages: "45 pages"
    },
    {
      title: "Merchant Onboarding: Best Practices Guide",
      description: "Streamline your merchant acquisition process with proven strategies",
      pages: "32 pages"
    },
    {
      title: "Payment Security Standards Handbook",
      description: "PCI-DSS compliance and data protection guidelines",
      pages: "58 pages"
    }
  ];

  const caseStudies = [
    {
      title: "Enabling ₹500 Cr Disbursements for Government Department",
      sector: "Government",
      impact: "500Cr+ processed",
      image: "/images/ResourceImages/Goverment.jpeg"
    },
    {
      title: "Empowering 10,000+ MSMEs with Instant Credit Access",
      sector: "MSME",
      impact: "10,000+ merchants",
      image: "/images/ResourceImages/MSME.jpeg"
    },
    {
      title: "Enterprise Payment Gateway Migration Success",
      sector: "Enterprise",
      impact: "99.9% uptime",
      image: "/images/ResourceImages/Enterprises.jpeg"
    }
  ];

  const complianceGuides = [
    {
      title: "RBI Payment Systems Guidelines Simplified",
      description: "Easy-to-understand breakdown of regulatory requirements"
    },
    {
      title: "KYC/AML Process Implementation Guide",
      description: "Step-by-step compliance framework for customer verification"
    },
    {
      title: "Data Security Best Practices for Fintech",
      description: "Comprehensive security standards and implementation checklist"
    }
  ];

  const webinars = [
    {
      title: "Future of UPI: Trends and Opportunities",
      date: "December 15, 2025",
      type: "Upcoming",
      status: "Register Now"
    },
    {
      title: "Building Scalable Payment Infrastructure",
      date: "October 20, 2025",
      type: "On-Demand",
      status: "Watch Replay"
    },
    {
      title: "Compliance Automation in Digital Payments",
      date: "September 8, 2025",
      type: "On-Demand",
      status: "Watch Replay"
    }
  ];

  return (
       <div className="w-full">
      {/* Featured Resource */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <img
                src={featuredResource.image}
                alt="Featured resource"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-indigo-600 font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {featuredResource.type}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {featuredResource.title}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {featuredResource.description}
              </p>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center gap-2 w-fit">
                <Download className="w-5 h-5" />
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-6 space-y-16 mb-20">
        {/* Blogs & Articles */}
        {(activeCategory === "all" || activeCategory === "blogs") && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FileText className="w-8 h-8 text-indigo-600" />
              Blogs & Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogs.map((blog, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-indigo-600 font-semibold mb-2">
                      {blog.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                      {blog.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </span>
                      <button className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Whitepapers */}
        {(activeCategory === "all" || activeCategory === "whitepapers") && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Download className="w-8 h-8 text-indigo-600" />
              Whitepapers & Reports
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whitepapers.map((paper, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition border-2 border-transparent hover:border-indigo-200"
                >
                  <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {paper.pages}
                  </div>
                  <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Now
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Case Studies */}
        {(activeCategory === "all" || activeCategory === "case-studies") && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-indigo-600" />
              Case Studies
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                      {study.sector}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition">
                      {study.title}
                    </h3>
                    <div className="text-indigo-600 font-semibold mb-4">
                      {study.impact}
                    </div>
                    <button className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      See Case Study <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Compliance */}
        {(activeCategory === "all" || activeCategory === "compliance") && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Shield className="w-8 h-8 text-indigo-600" />
              Compliance & Regulatory Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {complianceGuides.map((guide, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition border-l-4 border-indigo-600"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <button className="text-indigo-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Webinars */}
        {(activeCategory === "all" || activeCategory === "webinars") && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Video className="w-8 h-8 text-indigo-600" />
              Webinars & Events
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {webinars.map((webinar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
                >
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                      webinar.type === "Upcoming"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {webinar.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {webinar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{webinar.date}</p>
                  <button
                    className={`w-full px-6 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                      webinar.type === "Upcoming"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    <Video className="w-5 h-5" />
                    {webinar.status}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};



export default ResourceHub;