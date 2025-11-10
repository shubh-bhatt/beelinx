import { Award, ArrowRight } from "lucide-react";

const CareerPage = () => {
  return (
    <div>
      {" "}
      <section className="py-20 px-6 bg-linear-to-br from-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-sky-700 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Be part of shaping the future of finance in India. We're looking for
            talented individuals who share our passion for innovation and
            impact.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center cursor-pointer">
            View Open Positions
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
