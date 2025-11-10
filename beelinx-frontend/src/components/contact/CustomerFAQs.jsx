import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomerFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I get sandbox access?",
      answer:
        "Sign up for a developer account on our platform. You'll receive immediate access to our sandbox environment with full documentation and sample code.",
    },
    {
      question: "Do you work with government agencies?",
      answer:
        "Yes, we have dedicated teams for government and public sector clients. Contact our sales team to discuss compliance, security requirements, and tailored solutions.",
    },
    {
      question: "What are your support hours?",
      answer:
        "Our support team is available 24/7 for enterprise customers. Standard support is available Monday through Friday, 9 AM to 6 PM in your regional timezone.",
    },
    {
      question: "How quickly can I get a demo?",
      answer:
        "We can typically schedule a personalized demo within 24-48 hours. Request a demo using the form above or schedule directly through our calendar link.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Quick answers to common queries
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm"
                >
                  {/* Accordion Header/Question - Clickable part */}
                  <div
                    className="px-6 py-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleFAQ(index)} // Attach the click handler
                  >
                    <span className="font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`} // Conditionally rotate the icon
                    />
                  </div>

                  {/* Accordion Body/Answer - Conditionally render or hide */}
                  <div
                    className={`px-6 pb-4 text-slate-600 ${
                      isOpen ? "block" : "hidden"
                    }`} // Conditionally show/hide based on state
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-2"
            >
              Visit Full Support Page
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerFAQs;
