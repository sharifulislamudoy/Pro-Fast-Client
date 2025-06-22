// components/HowItWorksContainer.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HowItWorksCard from "./HowItWorksCard";

const HowItWorksContainer = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setSteps(data));
  }, []);

  return (
    <section className="bg-gray-100 py-12 px-4 lg:px-20 w-12/13 mx-auto">
      <div>
        <h2 data-aos="fade-right" className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <HowItWorksCard
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksContainer;
