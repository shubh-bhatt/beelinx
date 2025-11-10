import ProductHero from "../components/products/ProductHero";
import ProductCategories from "../components/products/ProductCategories";
import ProductDetailsPreview from "../components/products/ProductDetailsPreview";
import Testimonials from "../components/products/TestimonialsSection";
import IndustryUseCases from "../components/products/IndustryUseCases";
import FinalCTA from "../components/products/FinalCTA";

function Products() {
  return (
    <div className="flex flex-col ">
      <ProductHero />
      <ProductCategories />
      <ProductDetailsPreview />
      <Testimonials />
      <IndustryUseCases />
      <FinalCTA />
 
     
      
    </div>
  );
}

export default Products;
