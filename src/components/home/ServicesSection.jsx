import { motion } from "framer-motion";
// Asset Images
import camImg from '../../assets/camImg.avif';
import voipphone from '../../assets/voipphone.avif';
import structuredcabling from '../../assets/structuredcabling.avif';
import supportImg from '../../assets/supportImg.avif';

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
      title: "Surveillance Camera Installation",
      img: camImg,
      desc: "Professional CCTV installs with proper placement, clean wiring, and secure remote access for peace of mind.",
      alt: "Surveillance camera installation with clean wiring and mounted on office walls",
    },
    {
      title: "VoIP Phone Systems",
      img: voipphone,
      desc: "Modern business phone setups with site surveys, reliable call quality, and ongoing support built in.",
      alt: "Modern VoIP phone system installed on office desk with headset",
    },
    {
      title: "Networking & Structured Cabling",
      img: structuredcabling,
      desc: "Future-proof wired and wireless networks with organized cabling, smart configurations, and consistent performance.",
      alt: "Structured cabling in server room with organized network cables",
    },
    {
      title: "On-Demand IT Support",
      img: supportImg,
      desc: "Fast troubleshooting, system configuration, and ongoing tech help tailored for small business needs.",
      alt: "IT technician troubleshooting office computer setup",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="relative py-16 px-4 bg-white text-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                alt={service.alt}
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
