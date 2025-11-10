import { Users, Play, IndianRupee } from "lucide-react";

const FinalCTA = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Simplify Compliance Together
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join hundreds of businesses who trust us with their compliance and
            audit needs. Get started today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
              <Users className="w-5 h-5" />
              Talk to an Expert
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition transform hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
              <Play className="w-5 h-5" />
              Request Demo
            </button>
            <button className="bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer">
              <IndianRupee className="w-5 h-5" />
              Get Custom Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;
