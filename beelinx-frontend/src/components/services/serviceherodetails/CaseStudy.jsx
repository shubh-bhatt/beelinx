import { Download } from "lucide-react";

const CaseStudy = () => {
  return (
    <>
      {/* Case Study */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Real Impact, Real Results
            </h2>
            <p className="text-xl text-blue-100">
              See how we've transformed businesses like yours
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <div className="text-5xl font-bold mb-2">70%</div>
                <div className="text-xl text-blue-100 mb-4">
                  Reduction in reconciliation errors
                </div>
                <p className="text-blue-100">
                  "Working with this team transformed our compliance process. We
                  went from manual, error-prone workflows to automated,
                  audit-ready systems in just 3 months."
                </p>
                <p className="text-sm text-blue-200 mt-4">
                  — CFO, Leading NBFC
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">3 Months</div>
                  <div className="text-blue-100">Time to full compliance</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">₹12L+</div>
                  <div className="text-blue-100">
                    Saved in penalties avoided
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-blue-100">Audit success rate</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center gap-2 cursor-pointer">
                <Download className="w-5 h-5" />
                Download Full Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
