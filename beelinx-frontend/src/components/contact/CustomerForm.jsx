import { Send, ChevronDown } from "lucide-react";

export default function CustomerForm() {
  return (
    <>
      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
              Get in Touch
            </h2>
            <p className="text-slate-600 text-center mb-8">
              Fill out the form below and we'll get back to you shortly
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border rounded-lg border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="+91 (999) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Interested In *
                </label>
                <div className="relative">
                  <select className="w-full px-4 py-3 border rounded-lg border-sky-200 focus:border-sky-500 focus:outline-none transition-colors appearance-none">
                    <option value="">Select an option</option>
                    <option value="products">Products</option>
                    <option value="services">Services</option>
                    <option value="solutions">Solutions</option>
                    <option value="sandbox">Developer Sandbox</option>
                    <option value="partnership">Partnership</option>
                    <option value="support">Support</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message / Query *
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg border-sky-200 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button className="w-full bg-linear-to-r from-sky-500 to-sky-600 text-white py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-sky-700 cursor-pointer transition transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
