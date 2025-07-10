// React Components
import { Helmet } from "react-helmet";

// Function Components
import ServiceCategories from "../components/ServiceCategories.jsx";
import PricingOptions from "../components/PricingOptions.jsx";
import WhoWeWorkWith from "../components/WhoWeWorkWith.jsx";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose.jsx";


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
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Professional IT Services for Small Businesses</h1>
        <p className="text-lg text-gray-600">
          Tailored on-site solutions for surveillance, networking, structured cabling, and dependable tech support across Southern and Central Ohio.
        </p>
      </section>
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
      <section className="text-center mb-20">
        <p className="text-xl mb-4">Not sure what fits your needs?</p>
        <a
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
        >
          Request a Free Consultation
        </a>
      </section>
    </main>
  );
}