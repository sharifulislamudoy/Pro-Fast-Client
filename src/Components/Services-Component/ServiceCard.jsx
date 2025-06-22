import {
  FaShippingFast,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndoAlt
} from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const iconMap = {
  FaShippingFast: FaShippingFast,
  MdLocalShipping: MdLocalShipping,
  FaWarehouse: FaWarehouse,
  FaMoneyBillWave: FaMoneyBillWave,
  FaHandshake: FaHandshake,
  FaUndoAlt: FaUndoAlt
};

const ServiceCard = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon];

  return (
    <div
      data-aos="fade-up"
      className="rounded-xl bg-white p-6 text-center shadow-md transition duration-300 hover:bg-lime-300 hover:text-black hover:shadow-xl"
    >
      {IconComponent && (
        <IconComponent className="text-4xl mx-auto text-black mb-4 transition-colors duration-300" />
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
