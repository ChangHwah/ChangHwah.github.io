// React components
import { Helmet } from 'react-helmet';

// Section Components
import HomeHeroSection from "../components/home/HomeHeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/home/Testimonials";
import HowItWorks from "../components/HowItWorks";
import CTASection from "../components/home/CTASection";
import MiniContactForm from "../components/home/MiniContactForm";
import HomeParagraph from '../components/home/HomeFooter';

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