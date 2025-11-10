import React from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Users,
  Headphones,
  Newspaper,
  Linkedin,
  Twitter,
  Youtube,
  MessageSquare,
  Clock,
  ChevronDown,
} from "lucide-react";

const CustomerSocialMedia = () => {
  const socialLinks = [
    { icon: Linkedin, color: "hover:bg-blue-600", name: "LinkedIn" },
    { icon: Twitter, color: "hover:bg-sky-500", name: "Twitter" },
    { icon: Youtube, color: "hover:bg-red-600", name: "YouTube" },
    { icon: MessageSquare, color: "hover:bg-purple-600", name: "Discord" },
  ];

  return (
    <>
      {/* Social Media & Community */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-slate-600 mb-8">
            Follow us on social media and join our developer community
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className={`w-12 h-12 bg-white border-2 border-slate-200 rounded-lg flex items-center justify-center ${social.color} hover:text-white transition group shadow-sm hover:shadow-md`}
                title={social.name}
              >
                <social.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition" />
              </a>
            ))}
          </div>

          <div className="bg-linear-to-r from-sky-500 to-sky-600 text-white rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-2">
              Join Our Developer Community
            </h3>
            <p className="mb-6 text-blue-100">
              Connect with developers, get help, and share your projects
            </p>
            <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerSocialMedia;
