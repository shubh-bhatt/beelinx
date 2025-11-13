import { Users, Play } from "lucide-react";
import ServicesSVG from "../../../assets/services_dhxj.svg";

const ExploreHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-600 via-sky-600 to-cyan-500 text-white py-20 sm:py-24 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Compliance & Audit Support – Expert Support for Your Business
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8">
                We help you manage, scale, and optimize regulatory compliance
                and audit processes with end-to-end expertise.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button className="bg-white text-sky-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Users className="w-5 h-5" />
                  Talk to an Expert
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-sky-600 transition transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Play className="w-5 h-5" />
                  Request Demo
                </button>
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="bg-white w-full h-96 rounded-2xl p-2">
                <div className="inset-0 bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl"></div>
                <img
                  src={ServicesSVG}
                  alt="Services Illustration"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreHero;
