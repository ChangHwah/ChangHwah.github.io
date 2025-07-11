// React Components
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Function Components
import ServicesHero from "../components/ServicesHero.jsx";
import ServiceCategories from "../components/ServiceCategories.jsx";
import PricingOptions from "../components/PricingOptions.jsx";
import WhoWeWorkWith from "../components/WhoWeWorkWith.jsx";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose.jsx";
import ServicesCTA from "../components/ServicesCTA.jsx";


export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <Helmet>
        <title>Grey Techs | Surveillance, Networking & IT Support Services</title>
        <meta
          name="description"
          content="Explore our core services: surveillance system installation, network configuration, and reliable small business IT support."
        />
        <meta property="og:title" content="Grey Techs | Professional IT Services" />
        <meta
          property="og:description"
          content="Custom camera installs, structured cabling, and responsive tech support for businesses in Ohio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greytechs.com/services" />
        <link rel="canonical" href="https://greytechs.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <ServicesHero />
      
      {/* Service Categories Grid */}
      <ServiceCategories />
      
      {/* Pricing Example Mockup */}
      <PricingOptions />

      {/* Who We Work With */}
      <WhoWeWorkWith />

      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Call to Action */}
      <ServicesCTA />
    </main>
  );
}