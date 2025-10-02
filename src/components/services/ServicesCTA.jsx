import { Link } from "react-router-dom";

export const ServicesCTA = () => {
  return (
    <section className="bg-green-700 text-white py-16 px-6 text-center rounded-xl max-w-4xl mx-auto mb-20 shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Not sure which plan fits your business?</h2>
      <p className="text-lg mb-8">Contact Grey Techs today for a free consultation and guidance on the right IT solution for you.</p>
      <Link
        to="/contact"
        className="inline-block bg-white text-green-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition"
      >
        Request a Free Consultation
      </Link>
    </section>
  );
};

export default ServicesCTA;