import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <section className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Grey Techs</h1>

        <p className="mb-6 text-lg text-center">
          Have questions or need a custom quote? Reach out anytime — we’re here to help.
        </p>

        <div className="mb-12">
          <ContactForm />
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg">
            📧 Email:{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-green-700 hover:underline"
            >
              zitiswager@gmail.com
            </a>
          </p>
          <p className="text-lg">📞 Phone: (740) 591-9124</p>
          <p className="text-lg max-w-md mx-auto">
            Serving Southern and Central Ohio with on-site IT support and tech solutions.
          </p>
        </div>
      </section>
    </main>
  );
}