// React components
import { Helmet } from 'react-helmet';
import GT from '../assets/GT.png';

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
  <title>Grey Techs | Surveillance, Networking & IT Support in Ohio</title>
  <meta 
  name="description" 
  content="Grey Techs provides surveillance camera installation, structured cabling, VoIP phone systems, and flat-rate IT support for small businesses in Central & Southern Ohio." 
/>

{/* Open Graph */}
<meta property="og:title" content="Grey Techs | Reliable Business IT Solutions" />
<meta 
  property="og:description" 
  content="Trusted local IT partner providing surveillance, networking, VoIP, and flat-rate managed IT support for small businesses in Central & Southern Ohio." 
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.greytechs.net" />
<meta property="og:image" content={GT} />

{/* Twitter Card */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Grey Techs – Small Business IT & Surveillance" />
<meta 
  name="twitter:description" 
  content="Reliable IT support, surveillance, networking, and VoIP solutions for small businesses in Central & Southern Ohio." 
/>
<meta name="twitter:image" content={GT} />
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