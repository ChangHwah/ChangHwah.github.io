import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom";
import ServicesSection from "../components/ServicesSection";
import CTASection from "../components/CTASection";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/howItWorks";
import ServiceAreas from "../components/serviceArea";
import CallButton from "../components/CallButton";
import MiniContactForm from "../components/MiniContactForm";

export default function Home() {
  return (
     <div className="text-gray-800">
      {/* Hero */}
      <section
      className="relative h-[500px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative px-6 max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Reliable IT Solutions for Small Businesses</h1>
        <p className="text-lg mb-6">
          Grey Techs offers on-site networking, surveillance, and IT support tailored to your needs.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 px-8 rounded-3xl shadow"
        >
          Request a Free Consultation
        </Link>
      </div>
    </section>

      {/* Services */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Testimonials */}
      <Testimonials />

      {/* How It Works */}
      <HowItWorks />

      {/* Final CTA */}
      <CTASection />

      {/* Mini Contact Form */}
      <MiniContactForm />

      {/* Call Button */}
      <CallButton />

      <section className="bg-gray-100 py-8 px-4 text-sm text-center text-gray-700">
        <p>
          Grey Techs provides expert surveillance camera installation, structured cabling, and
          small business IT solutions across Central and Southern Ohio. Trusted by service providers
          like Mendtronix, M7 Services, and Integrated Health Systems for on-site technical work.
        </p>
      </section>

    </div>
    
  );
}