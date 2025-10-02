import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ServiceArea = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <main className="min-h-screen px-4 py-12 text-gray-800">

      {/* Main Content Grid */}
      <section className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 md:items-start">

        {/* Left Column */}
        <div>
          <h1
            data-aos="fade-up"
            className="text-4xl font-bold mb-8 text-center md:text-left"
          >
            About Grey Techs
          </h1>

          <p data-aos="fade-up" data-aos-delay="100" className="text-lg mb-6">
            Grey Techs is a locally owned and operated business providing hands-on IT support and tech infrastructure services throughout Southern and Central Ohio. We focus on delivering real-world solutions — no fluff, just dependable technology that works the way it should.
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl font-semibold text-green-700 mb-4"
          >
            Meet the Owner
          </h2>

          <p data-aos="fade-up" data-aos-delay="300" className="text-lg mb-6">
            Hi, I’m Solomon Swager — the founder of Grey Techs. With a background in low voltage, point-of-sale systems, VoIP, networking, surveillance, and web development, I bring over a decade of field experience to every project. I love problem-solving, fine-tuning configurations, and making tech work better for small businesses.
          </p>

          <p data-aos="fade-up" data-aos-delay="400" className="text-lg mb-6">
            I started Grey Techs to provide affordable, honest, and practical IT solutions for local businesses who need fast help from someone who knows their systems — not a ticket number in a call center.
          </p>
        </div>

        {/* Right Column */}
        <div
          className="bg-white p-10 rounded-2xl shadow-xl"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {/* Areas We Serve */}
          <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
            Areas We Serve
          </h2>
          <p className="text-lg mb-6 text-center">
            Based in Southern Ohio, we proudly serve:
          </p>
          <ul className="text-lg list-none mb-8 max-w-md mx-auto text-gray-700 space-y-2">
            <li>• Chillicothe</li>
            <li>• Lancaster</li>
            <li>• Circleville</li>
            <li>• Athens</li>
            <li>• Logan</li>
            <li>• Jackson</li>
            <li>• And surrounding communities</li>
          </ul>

          {/* Why Work With Us */}
          <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
            Why Work With Us?
          </h2>
          <ul className="text-lg list-none max-w-md mx-auto text-gray-700 space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              We show up on time and communicate clearly
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              We solve problems efficiently and explain your options
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              We work with your budget — no upsells, no nonsense
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              We’re invested in keeping your tech running long after install
            </li>
          </ul>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 transition"
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceArea;
