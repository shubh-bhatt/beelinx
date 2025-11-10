import CustomerHero from "../components/contact/CustomerHero";
import CustomerForm from "../components/contact/CustomerForm";
import CustomerDirectContact from "../components/contact/CustomerDirectContact";
import CustomerOfficeLocations from "../components/contact/CustomerOfficeLocations";
import CustomerFAQs from "../components/contact/CustomerFAQs";
import CustomerCTA from "../components/contact/CustomerCTA";
import CustomerSocialMedia from "../components/contact/CustomerSocialMedia";

const Contact = () => {
  return (
    <div>
      <CustomerHero />
      <CustomerForm />
      <CustomerDirectContact />
      <CustomerOfficeLocations />
      <CustomerSocialMedia />
      <CustomerFAQs />
      <CustomerCTA />
    </div>
  );
};

export default Contact;
