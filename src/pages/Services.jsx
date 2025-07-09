import { Helmet } from "react-helmet";
import HowItWorks from "../components/howItWorks";

// Replace these with your actual image imports
import surveillanceImg from "../assets/camImg.avif";
import networkingImg from "../assets/networkImg.avif";
import itSupportImg from "../assets/supportImg.avif";
import maintenanceImg from "../assets/maintenanceImg.avif";

export default function Services() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 py-12">
      <Helmet>
        <title>Grey Techs | Surveillance, Networking & IT Support Services</title>
        <meta
          name="description"
          content="Explore our core services: surveillance system installation, network configuration, and reliable small business IT support."
        />
        <meta property="og:title" content="Grey Techs | Professional IT Services" />
        <meta
          property="og:description"
          content="Custom camera installs, structured cabling, and responsive tech support for businesses in Ohio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://greytechs.com/services" />
        <link rel="canonical" href="https://greytechs.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Professional IT Services for Small Businesses</h1>
        <p className="text-lg text-gray-600">
          Tailored on-site solutions for surveillance, networking, structured cabling, and dependable tech support across Southern and Central Ohio.
        </p>
      </section>

      {/* Service Categories Grid */}
      <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto mb-20">
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <img
            src={surveillanceImg}
            alt="Surveillance camera installation"
            className="mb-4 rounded w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Surveillance Camera Installation
          </h2>
          <p className="text-gray-700 text-sm">
            We install high-definition security camera systems designed around your layout and visibility needs. Every setup includes strategic placement, clean cable routing, and mobile-friendly remote access. Whether you're securing an office, warehouse, or storefront, we focus on reliability, retention, and clarity.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <img
            src={networkingImg}
            alt="Networking and structured cabling"
            className="mb-4 rounded w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Networking & Structured Cabling
          </h2>
          <p className="text-gray-700 text-sm">
            Clean, organized, and future-ready. We build wired and wireless networks that support your operations — from cable pulls and patch panels to switch configuration and access point placement. We also clean up disorganized network closets and help extend coverage to rural or large properties.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <img
            src={itSupportImg}
            alt="On-demand IT support"
            className="mb-4 rounded w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            On-Demand IT Support
          </h2>
          <p className="text-gray-700 text-sm">
            Have a tech issue that just can’t wait? We offer fast-response on-site IT support for small businesses — covering printers, software installs, email setup, data recovery, and more. Ideal for teams who need local help without a full-time IT staff.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
          <img
            src={maintenanceImg}
            alt="Flat-rate maintenance plans"
            className="mb-4 rounded w-full h-40 object-cover"
          />
          <h2 className="text-xl font-semibold text-green-700 mb-2">
            Flat-Rate Maintenance Plans
          </h2>
          <p className="text-gray-700 text-sm">
            Stay covered with a predictable support plan. Our monthly or quarterly maintenance plans include system checks, updates, basic troubleshooting, remote support, and scheduled on-site visits — perfect for avoiding downtime and keeping systems secure over time.
          </p>
        </div>
      </section>

      {/* Pricing Example Mockup */}
      <section className="max-w-4xl mx-auto mb-20 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Sample Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Basic Support</h3>
            <p className="text-4xl font-bold mb-4">$99<span className="text-base font-normal">/month</span></p>
            <ul className="mb-6 text-gray-700 text-sm space-y-2">
              <li>Remote troubleshooting & support</li>
              <li>Monthly system checkups</li>
              <li>Software updates</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Get Started
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Standard Plan</h3>
            <p className="text-4xl font-bold mb-4">$199<span className="text-base font-normal">/month</span></p>
            <ul className="mb-6 text-gray-700 text-sm space-y-2">
              <li>Everything in Basic</li>
              <li>Quarterly on-site visits</li>
              <li>Priority support</li>
              <li>Network performance monitoring</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Choose Plan
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Premium Care</h3>
            <p className="text-4xl font-bold mb-4">$349<span className="text-base font-normal">/month</span></p>
            <ul className="mb-6 text-gray-700 text-sm space-y-2">
              <li>All Standard features</li>
              <li>Monthly on-site visits</li>
              <li>24/7 emergency support</li>
              <li>Advanced security updates</li>
            </ul>
            <a
              href="/contact"
              className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="text-center mb-20 px-4">
        <h2 className="text-2xl font-bold mb-4">Who We Work With</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Grey Techs partners with small businesses of all kinds — restaurants, retail shops, warehouses, rural offices, and more. If you need tech support and want someone who will show up, we’re your team.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <HowItWorks />
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-50 py-12 px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Grey Techs?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-700">Local & On-Site</h3>
              <p className="text-gray-700 text-sm">
                Based in Ohio, we’re nearby and available when you need us most.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700">Straightforward Pricing</h3>
              <p className="text-gray-700 text-sm">
                Transparent, flexible, and built to match your budget without surprise fees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700">Field-Tested Experience</h3>
              <p className="text-gray-700 text-sm">
                Real-world expertise in surveillance, networking, cabling, and general IT support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-700">Fast Response</h3>
              <p className="text-gray-700 text-sm">
                We don’t leave you hanging — prompt service and regular updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-20">
        <p className="text-xl mb-4">Not sure what fits your needs?</p>
        <a
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 transition"
        >
          Request a Free Consultation
        </a>
      </section>
    </main>
  );
}