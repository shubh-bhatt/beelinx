import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const FinalCTA = () => {
  {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      type: "demo",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      alert("Thank you! We will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        type: "demo",
      });
    };
    return (
      <div>
        <section className="py-24 px-6 bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Let's Build the Future of Finance Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Get in touch to see how our fintech infrastructure can transform
              your business
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10 text-gray-900 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  I'm interested in *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="demo"
                      checked={formData.type === "demo"}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="mr-2"
                    />
                    Request Demo
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="contact"
                      checked={formData.type === "contact"}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="mr-2"
                    />
                    General Inquiry
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-sky-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Submit Request
              </button>
            </form>

            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
              <a
                href="mailto:contact@yourfintech.com"
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@yourfintech.com
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +91 123 456 7890
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
};
export default FinalCTA;
