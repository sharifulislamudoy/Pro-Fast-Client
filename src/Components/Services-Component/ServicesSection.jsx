import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="bg-[#043836] py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-down" className="text-white text-3xl font-bold mb-2">Our Services</h2>
        <p data-aos="fade-up" className="text-gray-300 mb-10 text-sm">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
