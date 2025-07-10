import { FaPhoneAlt, FaClipboardCheck, FaTools, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    icon: <FaPhoneAlt className="text-green-600 w-8 h-8 mb-4 mx-auto" />,
    title: "Step 1: Contact Us",
    desc: "Reach out with your needs through our contact form, phone, or email.",
  },
  {
    icon: <FaClipboardCheck className="text-green-600 w-8 h-8 mb-4 mx-auto" />,
    title: "Step 2: Get a Plan",
    desc: "We provide a clear, customized plan tailored to your project.",
  },
  {
    icon: <FaTools className="text-green-600 w-8 h-8 mb-4 mx-auto" />,
    title: "Step 3: Professional Service",
    desc: "Our technicians show up on time and deliver high-quality work.",
  },
  {
    icon: <FaHandshake className="text-green-600 w-8 h-8 mb-4 mx-auto" />,
    title: "Step 4: Ongoing Support",
    desc: "We're here for maintenance, upgrades, and future tech needs.",
  },
];

export default function HowItWorks() {
  return (
    <section
      data-aos="fade-up"
      className="relative py-16 px-6 max-w-6xl mx-auto text-center overflow-hidden"
    >
      {/* Dotted pattern background */}
      <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #34d399 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {steps.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:scale-105 duration-300"
            >
              {icon}
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}