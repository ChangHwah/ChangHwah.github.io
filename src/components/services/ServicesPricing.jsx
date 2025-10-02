import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "$500/mo",
    bestFor: "Small setups under 3 devices",
  },
  {
    name: "Device-Based",
    price: "$75/device",
    bestFor: "Scaling beyond 3 devices affordably",
  },
  {
    name: "Basic",
    price: "$750/mo",
    bestFor: "Guaranteed on-site hours without extra charges",
  },
  {
    name: "Pro",
    price: "$1,050/mo",
    bestFor: "Priority response for growing businesses",
  },
  {
    name: "Premium",
    price: "$1,250/mo",
    bestFor: "VIP support and discounted installs",
  },
];

export const PricingOptions = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <section className="max-w-6xl mx-auto mb-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Plans</h2>

      {/* Plan Cards */}
      <div className="grid gap-8 md:grid-cols-3 mb-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-green-700">{plan.name}</h3>
            <p className="text-4xl font-bold mb-2">{plan.price}</p>
            <p className="text-gray-600 mb-4">Best for: {plan.bestFor}</p>
            <Link
              to="/contact"
              className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
            >
              Choose Plan
            </Link>
          </div>
        ))}
      </div>

      {/* Toggle Comparison Table */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowTable(!showTable)}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          {showTable ? "Hide Full Comparison" : "Compare All Plans"}
        </button>
      </div>

      {showTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 border-b">Features</th>
                {plans.map((plan, idx) => (
                  <th key={idx} className="p-3 border-b">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="bg-white">
                <td className="p-3 border-b font-semibold">Monthly Cost</td>
                <td className="p-3 border-b">$500</td>
                <td className="p-3 border-b">$65–75/device</td>
                <td className="p-3 border-b">$750</td>
                <td className="p-3 border-b">$1,050</td>
                <td className="p-3 border-b">$1,250</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border-b font-semibold">On-site Hours Included</td>
                <td className="p-3 border-b">1 hr</td>
                <td className="p-3 border-b">N/A</td>
                <td className="p-3 border-b">1 hr</td>
                <td className="p-3 border-b">2 hr</td>
                <td className="p-3 border-b">4 hr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border-b font-semibold">Remote Support</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">$75/hr</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">Included</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border-b font-semibold">Priority Scheduling</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">Yes</td>
                <td className="p-3 border-b">Yes</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border-b font-semibold">Emergency On-site Rate</td>
                <td className="p-3 border-b">$125/hr</td>
                <td className="p-3 border-b">$125/hr</td>
                <td className="p-3 border-b">$75/hr</td>
                <td className="p-3 border-b">$75/hr</td>
                <td className="p-3 border-b">$75/hr</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border-b font-semibold">On-site Rate</td>
                <td className="p-3 border-b">$75/hr</td>
                <td className="p-3 border-b">$95/hr</td>
                <td className="p-3 border-b">$45/hr</td>
                <td className="p-3 border-b">$45/hr</td>
                <td className="p-3 border-b">$45/hr</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border-b font-semibold">Device Monitoring</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">Included</td>
                <td className="p-3 border-b">Included</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border-b font-semibold">New Device Setup / Break-Fix Discounts</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">No</td>
                <td className="p-3 border-b">Yes</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border-b font-semibold">Backup & Disaster Recovery</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 border-b font-semibold">Managed Antivirus & Security</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
                <td className="p-3 border-b">Optional</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 border-b font-semibold">Camera / Surveillance Monitoring</td>
                <td className="p-3 border-b">Custom Quote</td>
                <td className="p-3 border-b">Custom Quote</td>
                <td className="p-3 border-b">Custom Quote</td>
                <td className="p-3 border-b">Custom Quote</td>
                <td className="p-3 border-b">Custom Quote</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default PricingOptions;
