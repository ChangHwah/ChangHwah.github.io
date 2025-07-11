import { Link } from "react-router-dom";

export const ServicesCTA = () => {
    return (
        <section className="text-center mb-20">
        <p className="text-xl mb-4">Not sure what fits your needs?</p>
        <Link
          to="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
        >
          Request a Free Consultation
        </Link>
      </section>
    )
}

export default ServicesCTA;