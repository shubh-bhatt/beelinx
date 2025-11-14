import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom"; // ✅ use NavLink instead of Link
import beelinxLogo from "/logo.jpg";
import ProductMegaMenu from "./MegaMenu/ProductMegaMenu";
import ServicesMegaMenu from "./MegaMenu/ServiceMegaMenu";
import SolutionsMegaMenu from "./MegaMenu/SolutionMegaMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "Support", path: "/support" },
    { name: "Company", path: "/company" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">
        {/* 🟡 Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img src={beelinxLogo} alt="Beelinx Logo" className="h-12 w-30" />
        </div>

        {/* 🟢 Desktop Menu */}
        <nav className="hidden md:flex items-center justify-center space-x-8 text-gray-700 font-medium relative">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                if (item.name === "Products") setShowMegaMenu("products");
                else if (item.name === "Services") setShowMegaMenu("services");
                else if (item.name === "Solutions")
                  setShowMegaMenu("solutions");
                else setShowMegaMenu(null);
              }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative transition-colors text-base duration-200 
                  ${
                    isActive
                      ? "text-[#4CB4FB] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#4CB4FB]"
                      : "text-gray-700 hover:text-[#4CB4FB]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* 🔵 Request Demo Button */}
        <button className="hidden md:block bg-red-200 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-500 transition">
          Request Demo
        </button>

        {/* 🔸 Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🧩 Mega Menus */}
        {showMegaMenu && (
          <div
            className="absolute top-full left-0 w-full flex justify-center pb-8 transition-all duration-300"
            onMouseEnter={() => setShowMegaMenu(showMegaMenu)}
            onMouseLeave={() => setShowMegaMenu(null)}
          >
            <div className="relative z-40 bg-white shadow-xl rounded-b-2xl border-t border-gray-100 animate-slideDown">
              {showMegaMenu === "products" && <ProductMegaMenu />}
              {showMegaMenu === "services" && <ServicesMegaMenu />}
              {showMegaMenu === "solutions" && <SolutionsMegaMenu />}
            </div>
          </div>
        )}
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-3 px-6 py-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition duration-200 ${
                    isActive
                      ? "text-[#4CB4FB] underline underline-offset-4"
                      : "text-gray-700 hover:text-[#4CB4FB]"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <button className="bg-[#4CB4FB] text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-500 transition">
              Request Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
