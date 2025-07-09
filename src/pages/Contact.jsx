import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main role="main" className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <Helmet>
        <title>Contact Grey Techs | Book a Free Consultation</title>
        <meta
          name="description"
          content="Reach out to Grey Techs for expert IT help, networking solutions, or surveillance system installs. Serving Central and Southern Ohio."
        />
        <meta property="og:title" content="Contact Grey Techs" />
        <meta
          property="og:description"
          content="Schedule a consultation or ask a question — we're ready to help with your IT and security needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greytechs.com/contact" />
        <link rel="canonical" href="https://greytechs.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Grey Techs</h1>

        <p className="mb-6 text-lg text-center">
          Have questions or need a custom quote? Reach out anytime — we’re here to help.
        </p>

        <div className="mb-12">
          <ContactForm />
        </div>

        <section
          data-aos="fade-up"
          className="relative bg-white py-12 px-6 max-w-4xl mx-auto rounded-lg shadow-md"
          tabIndex="0"
          aria-label="Contact information and service area description"
        >

          {/* Content, above pattern */}
          <div className="relative grid md:grid-cols-2 gap-8 text-gray-800 text-center md:text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="mb-2">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:zitiswager@gmail.com"
                  className="text-green-700 hover:underline"
                >
                  zitiswager@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:7405919124"
                  className="text-green-700 hover:underline"
                >
                  (740) 591-9124
                </a>
              </p>
            </div>

            <div className="text-sm text-gray-600 flex items-center">
              <p>
                Grey Techs serves Central and Southern Ohio with reliable on-site IT support, surveillance setup, and business tech solutions.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}