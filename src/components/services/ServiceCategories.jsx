// Asset Images
import structuredcabling from "../../assets/structuredcabling.avif";
import itSupportImg from "../../assets/supportImg.avif";
import voipImg from "../../assets/voipphone.avif";
import surveillanceImg from "../../assets/camImg.avif";
import maintenanceImg from "../../assets/maintenanceImg.avif";

export const ServiceCategories = () => {
  // Core services reordered
  const services = [
    {
      img: structuredcabling,
      alt: "Networking and structured cabling",
      title: "Networking & Structured Cabling",
      desc:
        "Future-proof wired and wireless networks with organized cabling and smart configurations. Covered by our MSP plans for proactive upkeep and troubleshooting.",
    },
    {
      img: itSupportImg,
      alt: "On-demand IT support",
      title: "On-Demand IT Support",
      desc:
        "Fast troubleshooting, system configuration, and ongoing tech help tailored for small businesses. Available under our managed services for consistent support.",
    },
    {
      img: voipImg,
      alt: "VoIP phone system installation",
      title: "VoIP Phone Systems",
      desc:
        "Modern business phone setups with site surveys, reliable call quality, and ongoing support. Integrated into our maintenance plans for hassle-free operations.",
    },
    {
      img: surveillanceImg,
      alt: "Surveillance camera installation",
      title: "Surveillance Camera Installation",
      desc:
        "Professional CCTV installs with clean wiring, optimal placement, and secure remote access. Optional add-on that can be included in our proactive maintenance plans.",
    },
  ];

  // MSP advantage / maintenance plan
  const mspPlan = {
    img: maintenanceImg,
    alt: "Flat-rate maintenance plans",
    title: "Proactive Maintenance Plans",
    desc:
      "Wrap all your core services under a monthly or quarterly plan that includes system checks, updates, monitoring, and on-site visits. Minimize downtime and keep your business running smoothly — Grey Techs acts as your proactive MSP partner.",
  };

  return (
    <section className="space-y-16 max-w-6xl mx-auto mb-20 px-4">
      {/* Core services */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="600"
        >
          <img
            src={service.img}
            alt={service.alt}
            className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{service.desc}</p>
          </div>
        </div>
      ))}

      {/* MSP Advantage / Maintenance Plan */}
      <div
        className="flex flex-col md:flex-row items-center gap-8"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration="600"
      >
        <img
          src={mspPlan.img}
          alt={mspPlan.alt}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{mspPlan.title}</h2>
          <p className="text-gray-600 text-base leading-relaxed">{mspPlan.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
