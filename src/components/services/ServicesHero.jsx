import { Link } from "react-router-dom";

export const ServicesHero = () => {
  return (
    <section className="text-center max-w-3xl mx-auto mb-16">
      <h1 className="text-4xl font-bold mb-4">
        Reliable IT Solutions for Small Businesses
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Grey Techs delivers expert surveillance camera installation, networking, VoIP, and on-site IT support tailored for small businesses across Central & Southern Ohio.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-green-600 transition"
      >
        Request a Free Consultation
      </Link>
    </section>
  );
};

export default ServicesHero;