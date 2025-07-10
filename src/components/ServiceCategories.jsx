// Asset Images
import surveillanceImg from "../assets/camImg.avif";
import structuredcabling from "../assets/structuredcabling.avif";
import itSupportImg from "../assets/supportImg.avif";
import maintenanceImg from "../assets/maintenanceImg.avif";

export const ServiceCategories = () => {
  const services = [
    {
      img: surveillanceImg,
      alt: "Surveillance camera installation",
      title: "Surveillance Camera Installation",
      desc:
        "We install high-definition security camera systems designed around your layout and visibility needs. Every setup includes strategic placement, clean cable routing, and mobile-friendly remote access. Whether you're securing an office, warehouse, or storefront, we focus on reliability, retention, and clarity.",
    },
    {
      img: structuredcabling,
      alt: "Networking and structured cabling",
      title: "Networking & Structured Cabling",
      desc:
        "Clean, organized, and future-ready. We build wired and wireless networks that support your operations — from cable pulls and patch panels to switch configuration and access point placement. We also clean up disorganized network closets and help extend coverage to rural or large properties.",
    },
    {
      img: itSupportImg,
      alt: "On-demand IT support",
      title: "On-Demand IT Support",
      desc:
        "Have a tech issue that just can’t wait? We offer fast-response on-site IT support for small businesses — covering printers, software installs, email setup, data recovery, and more. Ideal for teams who need local help without a full-time IT staff.",
    },
    {
      img: maintenanceImg,
      alt: "Flat-rate maintenance plans",
      title: "Flat-Rate Maintenance Plans",
      desc:
        "Stay covered with a predictable support plan. Our monthly or quarterly maintenance plans include system checks, updates, basic troubleshooting, remote support, and scheduled on-site visits — perfect for avoiding downtime and keeping systems secure over time.",
    },
  ];

  return (
    <section className="space-y-16 max-w-6xl mx-auto mb-20 px-4">
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {service.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceCategories;