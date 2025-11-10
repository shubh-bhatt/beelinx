import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Services from "./pages/Services";
import Solution from "./pages/Solution";
import Footer from "./components/common/Footer";
import Pricing from "./pages/Pricing";
import ScrollToTop from "../utility";
import Resources from "./pages/Resources";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import About from "./pages/About";
import Support from "./pages/Support";
import ServiceHeroDetails from "./components/services/ServiceHeroDetails";
import ExploreHeroSolutions from "./components/solutions/ExploreHeroSolutions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndService from "./pages/TermsAndService";
import CookiePolicy from "./pages/CookiePolicy";
import SLA from "./pages/SLA";
import SecurityAndCompliance from "./pages/SecurityAndCompliance";
import Partners_association from "./pages/Partners_association";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/product-detailes"
              element={<ProductDetails />}
            />
            <Route path="/services" element={<Services />} />
            <Route path="/services/explore" element={<ServiceHeroDetails />} />
            <Route path="/solutions" element={<Solution />} />
            <Route
              path="/solutions/exploresolution"
              element={<ExploreHeroSolutions />}
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/partners-association"
              element={<Partners_association />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<Support />} />

            {/* Legal and Policy Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsAndService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/service-legal-agreement" element={<SLA />} />
            <Route
              path="/security-compliance"
              element={<SecurityAndCompliance />}
            />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
