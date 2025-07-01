import techImage from "../assets/tech-working-on-laptop.jpg";
import itSupport from "../assets/it-support.jpg";
import networkInstallation from "../assets/network-installation.jpg";
import webDevelopment from "../assets/web-development.jpg";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      <section className="bg-green-50 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Expert IT Consulting for Real-World Results</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Grey Techs delivers hands-on technical support and custom IT solutions backed by field expertise in low voltage, POS, A/V, VoIP, networking, and cameras.
        </p>
        <div className="mt-8">
          <img src={techImage} alt="Technician at work" className="mx-auto rounded shadow-lg max-w-xl" />
        </div>
      </section>

      <section className="py-16 bg-white" id="services">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">Our Services</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-green-100 p-6 rounded shadow">
              <img src={itSupport} alt="Field support" className="mb-4 w-full h-40 object-cover rounded" />
              <h4 className="text-xl font-bold mb-2">Field IT Support</h4>
              <p>Low-voltage systems, POS, VoIP, A/V setups — fast and reliable service for small businesses.</p>
            </div>
            <div className="bg-green-100 p-6 rounded shadow">
              <img src={networkInstallation} alt="Networking setup" className="mb-4 w-full h-40 object-cover rounded" />
              <h4 className="text-xl font-bold mb-2">Networking</h4>
              <p>Design and maintenance of Wi-Fi, wired networks, structured cabling, and IP camera systems.</p>
            </div>
            <div className="bg-green-100 p-6 rounded shadow">
              <img src={webDevelopment} alt="Web development" className="mb-4 w-full h-40 object-cover rounded" />
              <h4 className="text-xl font-bold mb-2">Web Development</h4>
              <p>Modern business websites and tools using JavaScript and React Native.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50" id="about">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <p>Grey Techs is built on practical experience — from field deployments to web dev. Whether you’re opening a new office or need a stronger digital presence, we deliver dependable, efficient service.</p>
        </div>
      </section>

      <section className="py-16 bg-white" id="contact">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-6">Contact Us</h3>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Grey Techs. All rights reserved.</p>
      </footer>
    </main>
  );
}