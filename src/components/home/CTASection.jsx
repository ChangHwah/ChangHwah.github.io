import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      data-aos="fade-up"
      className="bg-green-700 text-white py-16 px-6 text-center rounded-xl max-w-4xl mx-auto my-16 shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-4">
        Ready to Upgrade Your Business Technology?
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Get reliable surveillance, networking, VoIP, and IT support for your business.
        Fast response, tailored solutions, and peace of mind guaranteed.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/contact"
          aria-label="Request a free consultation with Grey Techs"
          className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition"
        >
          Request a Free Quote
        </Link>
        <a
          href="tel:+16145245721"
          aria-label="Call Grey Techs directly"
          className="inline-block bg-gray-100 text-green-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-200 transition"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}