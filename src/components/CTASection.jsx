import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section data-aos="fade-up" className="bg-green-700 text-white py-16 px-6 text-center rounded-xl max-w-4xl mx-auto my-16 shadow-lg">
      <h2 className="text-4xl font-bold mb-4">
        Ready to Upgrade Your Business Technology?
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Contact Grey Techs today for a free consultation and discover how we can
        improve your network, security, and IT support.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition"
      >
        Get Your Free Consultation
      </Link>
    </section>
  );
}