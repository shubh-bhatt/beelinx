import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import beelinxLogo from "/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto cursor-pointer flex items-center justify-between px-6 ">
        {/* Logo */}
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center space-x-2   cursor-pointer "
        >
          <img src={beelinxLogo} alt="Beelinx Logo" className="h-22 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path} // ✅ Use Link instead of <a href>
              className="hover:text-[#4CB4FB] transition-colors text-bas"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Demo Button */}
        <button className="hidden md:block bg-[#4CB4FB] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#4CB4FB] transition">
          Request Demo
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-3 px-6 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 font-medium hover:text-[#4CB4FB] transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-[#4CB4FB] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#4CB4FB] transition">
              Request Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
