import { HiShieldCheck, HiClock, HiUserGroup } from "react-icons/hi";

export default function WhyChoose() {
  const reasons = [
    {
      icon: <HiShieldCheck className="text-green-600 w-8 h-8" />,
      title: "Trusted Local Expertise",
      description:
        "Serving Central & Southern Ohio, we provide surveillance, networking, VoIP, and IT solutions businesses can rely on.",
    },
    {
      icon: <HiClock className="text-green-600 w-8 h-8" />,
      title: "Fast & Reliable Service",
      description:
        "Quick response times and hands-on support minimize downtime and keep your business running smoothly.",
    },
    {
      icon: <HiUserGroup className="text-green-600 w-8 h-8" />,
      title: "Tailored Solutions",
      description:
        "We design IT setups specific to your business needs, so you get exactly what you require without unnecessary extras.",
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
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
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