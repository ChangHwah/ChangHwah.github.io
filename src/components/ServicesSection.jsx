import camImg from '../assets/camImg.avif';
import networkImg from '../assets/networkImg.avif';
import supportImg from '../assets/supportImg.avif';
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ServicesSection() {
  const services = [
    {
      title: "Surveillance Installation",
      img: camImg,
      desc: "Custom camera setups with professional placement, wiring, and remote viewing support.",
    },
    {
      title: "Network Configuration",
      img: networkImg,
      desc: "Reliable wired and wireless networks built for performance and future scalability.",
    },
    {
      title: "IT Support Services",
      img: supportImg,
      desc: "Hands-on tech support, troubleshooting, and small business system configuration.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative py-16 px-4 bg-white text-center overflow-hidden"
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
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-gray-100 rounded-2xl shadow overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <img
                loading="lazy"
                src={service.img}
                alt={`Illustration of ${service.title}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}