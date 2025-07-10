// React components
import { Helmet } from 'react-helmet';

// Section Components
import HomeHeroSection from "../components/HomeHeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/CTASection";
import MiniContactForm from "../components/MiniContactForm";
import HomeParagraph from '../components/HomeParagraphComp';

export default function Home() {
  return (
    <main>
      <Helmet>
          <title>Grey Techs | Reliable IT Solutions for Small Businesses</title>
          <meta name="description" content="On-site networking, surveillance, and IT support tailored to your needs in Central and Southern Ohio." />
          <meta property="og:title" content="Grey Techs IT Services" />
          <meta property="og:description" content="Expert surveillance camera installation, structured cabling, and IT solutions." />
          <meta property="og:type" content="website" />
      </Helmet>

     <div className="text-gray-800">
    
      {/* Page Sections */}
      <HomeHeroSection />
      <ServicesSection />
      <WhyChoose />
      <Testimonials />
      <HowItWorks />

      {/* Call To Action */}
      <CTASection />
      <MiniContactForm />

      {/* Footer Paragraph */}
      <HomeParagraph />

    </div>
  </main>
  );
}