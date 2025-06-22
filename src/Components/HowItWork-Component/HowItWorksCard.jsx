import {
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const iconsMap = {
  FaMapMarkedAlt: <FaMapMarkedAlt className="text-4xl text-black mb-4" />,
  FaMoneyBillWave: <FaMoneyBillWave className="text-4xl text-black mb-4" />,
  FaWarehouse: <FaWarehouse className="text-4xl text-black mb-4" />,
  FaBuilding: <FaBuilding className="text-4xl text-black mb-4" />,
};

const HowItWorksCard = ({ title, description, icon }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
    >
      {iconsMap[icon]}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default HowItWorksCard;
