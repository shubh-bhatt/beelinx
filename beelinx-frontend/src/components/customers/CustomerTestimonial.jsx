import React from 'react'
import { useState } from 'react';
import { Building2, Users, Shield, TrendingUp, ArrowRight, Check, Star } from 'lucide-react';

const CustomerTestimonial = () => {
     const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
    {
      quote: "Integration was seamless, and reconciliation improved 80%. The support team guided us every step of the way.",
      author: "Rajesh Kumar",
      role: "CFO, Leading NBFC",
      rating: 5
    },
    {
      quote: "We processed subsidy payments for 2 lakh farmers in just 48 hours. This platform transformed our operations.",
      author: "Priya Sharma",
      role: "Director, State Government Scheme",
      rating: 5
    },
    {
      quote: "As a startup, we needed reliable APIs without breaking the bank. This platform gave us enterprise-grade features at MSME pricing.",
      author: "Amit Patel",
      role: "CTO, Fintech Startup",
      rating: 5
    }
  ];
  return (
    <div>
      {" "}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leaders across industries
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  )
                )}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <p className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === i
                      ? "bg-[#4CB4FB] w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerTestimonial