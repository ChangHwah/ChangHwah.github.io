import { useState } from "react";
import { Link } from "react-router-dom";

export const PricingOptions = () => {
  const [showTable, setShowTable] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "$500/mo",
      bestFor: "Small setups, 1–3 devices",
    },
    {
      name: "Basic",
      price: "$750/mo",
      bestFor: "Businesses needing guaranteed on-site support",
    },
    {
      name: "Pro",
      price: "$1,050/mo",
      bestFor: "Businesses requiring priority response",
    },
    {
      name: "Premium",
      price: "$1,250/mo",
      bestFor: "VIP support with same-day response",
    },
  ];

  const renderCard = (plan) => (
    <div className="border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col h-full w-full max-w-sm">
      <h3 className="text-xl font-semibold mb-2 text-green-700">{plan.name}</h3>
      <p className="text-3xl font-bold mb-4">{plan.price}</p>
      <p className="text-gray-600 mb-4"><strong>Best For:</strong> {plan.bestFor}</p>
      <Link
        to="/contact"
        className="mt-auto bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition self-start"
      >
        Get Started
      </Link>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto mb-20 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Pricing Plans</h2>

      {/* Single row: 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 justify-items-center">
        {plans.map((plan) => renderCard(plan))}
      </div>
      {/* Toggle Full Comparison Table */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowTable(!showTable)}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          {showTable ? "Hide Full Comparison" : "Compare All Plans"}
        </button>
      </div>

      {showTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Features</th>
                {plans.map((plan, i) => (
                  <th key={i} className="border px-4 py-2">{plan.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Monthly Cost</td>
                {plans.map((plan, i) => (
                  <td key={i} className="border px-4 py-2">{plan.price}</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">On-site Hours Included</td>
                <td className="border px-4 py-2">N/A</td>
                <td className="border px-4 py-2">1 hour</td>
                <td className="border px-4 py-2">2 hours</td>
                <td className="border px-4 py-2">3 hours</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Remote Support</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">$95/hour</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">On-site Rate</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">$105/hour</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">Emergency On-site Rate</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">$125/hour</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">Priority Scheduling</td>
                <td className="border px-4 py-2">No</td>
                <td className="border px-4 py-2">No</td>
                <td className="border px-4 py-2">Yes</td>
                <td className="border px-4 py-2">Yes</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Device Monitoring</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">Included</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">New Device Setup / Break-Fix Discounts</td>
                <td className="border px-4 py-2">No</td>
                <td className="border px-4 py-2">No</td>
                <td className="border px-4 py-2">No</td>
                <td className="border px-4 py-2">Yes</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Backup & Disaster Recovery</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">Optional</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">Managed Antivirus & Security</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">Optional</td>
                ))}
              </tr>
              <tr>
                <td className="border px-4 py-2">Camera / Surveillance Monitoring</td>
                {plans.map(() => (
                  <td className="border px-4 py-2">Custom Quote</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default PricingOptions;
