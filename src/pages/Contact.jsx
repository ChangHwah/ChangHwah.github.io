import { Helmet } from "react-helmet";
import ContactForm from "../components/ContactForm";
import GetInTouch from "../components/GetInTouch";

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

      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Grey Techs</h1>
        <p className="mb-12 text-lg text-center">
          Have questions or need a custom quote? Reach out anytime — we’re here to help.
        </p>

        {/* Grid for Form + Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <div className="h-full">
            <ContactForm />
          </div>

          {/* Get In Touch */}
          <div className="h-full">
            <GetInTouch />
          </div>
        </div>
      </section>
    </main>
  );
}
