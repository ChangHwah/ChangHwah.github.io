import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-green-50 text-gray-800 px-4 py-12">
      <section className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About Grey Techs</h1>

        <p className="text-lg mb-6">
          Grey Techs is a locally owned and operated business providing hands-on IT support and tech infrastructure services throughout Southern and Central Ohio.
          We focus on delivering real-world solutions — no fluff, just dependable technology that works the way it should.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mb-4">👋 Meet the Owner</h2>
        <p className="text-lg mb-6">
          Hi, I’m Solomon Swager — the founder of Grey Techs. With a background in low voltage, point-of-sale systems, VoIP, networking, surveillance, and web development,
          I bring over a decade of field experience to every project. I love problem-solving, fine-tuning configurations, and making tech work better for small businesses.
        </p>

        <p className="text-lg mb-6">
          I started Grey Techs to provide affordable, honest, and practical IT solutions for local businesses who need fast help from someone who knows their systems — not a ticket number in a call center.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mb-4">📍 Areas We Serve</h2>
        <p className="text-lg mb-6">
          Based in Southern Ohio, we serve:
        </p>
        <ul className="text-lg mb-8 list-disc list-inside text-left mx-auto max-w-md">
          <li>Chillicothe</li>
          <li>Lancaster</li>
          <li>Circleville</li>
          <li>Athens</li>
          <li>Logan</li>
          <li>Jackson</li>
          <li>And surrounding communities</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mb-4">💼 Why Work With Us?</h2>
        <ul className="text-lg mb-8 list-disc list-inside text-left mx-auto max-w-md">
          <li>We show up on time and communicate clearly</li>
          <li>We solve problems efficiently and explain your options</li>
          <li>We work with your budget — no upsells, no nonsense</li>
          <li>We’re invested in keeping your tech running long after install</li>
        </ul>

        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}