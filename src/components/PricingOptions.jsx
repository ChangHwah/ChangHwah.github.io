export const PricingOptions = () => {
    return (
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
    )
};

export default PricingOptions;