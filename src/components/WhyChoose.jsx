import { HiShieldCheck, HiClock, HiUserGroup } from "react-icons/hi";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <HiShieldCheck className="text-green-600 w-8 h-8" />,
      title: "Trusted Security Expertise",
      description:
        "We specialize in surveillance systems and network security to keep your business safe.",
    },
    {
      icon: <HiClock className="text-green-600 w-8 h-8" />,
      title: "Prompt & Reliable Service",
      description:
        "Our field technicians respond quickly and get your systems running smoothly with minimal downtime.",
    },
    {
      icon: <HiUserGroup className="text-green-600 w-8 h-8" />,
      title: "Personalized Support",
      description:
        "We provide tailored IT solutions designed specifically for your small business needs.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative py-16 px-6 max-w-6xl mx-auto text-center overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-12">Why Choose Grey Techs?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}