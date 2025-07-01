import React from "react";
import techImage from "../assets/tech-working-on-laptop.jpg";
import itSupport from "../assets/it-support.jpg";
import networkInstallation from "../assets/network-installation.jpg";
import webDevelopment from "../assets/web-development.jpg";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

        {/* Service Cards Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Surveillance */}
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={techImage}
              alt="Surveillance cameras"
              className="mb-4 h-40 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              📷 Surveillance Camera Installation
            </h2>
            <p>
              We install high-quality HD surveillance systems tailored to your
              property. From cabling and mounting to remote access and
              retention policies, we’ve got you covered.
            </p>
          </div>

          {/* Networking */}
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={networkInstallation}
              alt="Networking setup"
              className="mb-4 h-40 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              🌐 Business Wi‑Fi & Networking
            </h2>
            <p>
              Say goodbye to dead zones and slow internet. We design and install
              wired and wireless networks that are secure, fast, and scalable.
            </p>
          </div>

          {/* VoIP */}
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={itSupport}
              alt="VoIP phone system"
              className="mb-4 h-40 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              ☎️ VoIP Phone System Setup
            </h2>
            <p>
              We install and configure VoIP systems, including desktop phones,
              softphone setup, and SIP trunk configuration for seamless calls.
            </p>
          </div>

          {/* IT Support */}
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={itSupport}
              alt="IT support"
              className="mb-4 h-40 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              🧰 On-Demand IT Support
            </h2>
            <p>
              Local, hands-on tech support for printers, file sharing, email,
              OS installs, and more — ideal for small businesses.
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={webDevelopment}
              alt="Web development workspace"
              className="mb-4 h-40 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              💻 Web Development & Digital Presence
            </h2>
            <p>
              Modern websites and tools using JavaScript and React to help your
              business grow online.
            </p>
          </div>

          {/* Maintenance */}
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src={techImage}
              alt="Maintenance plan"
              className="mb-4 h-40 w-full object-cover rounded"
            />
            <h2 className="text-2xl font-semibold text-green-700 mb-2">
              🔄 Maintenance Plans
            </h2>
            <p>
              Flat-rate monthly or quarterly plans for updates, monitoring,
              remote help, and on-site visits — no surprises.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl mb-4">Not sure what fits your needs?</p>
          <a
            href="/contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
          >
            Request a Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}