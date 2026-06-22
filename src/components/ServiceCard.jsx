import "./ServiceCard.css";
import iconMap from "../utils/iconMap";
import categoryImages
from "../data/categoryImages";

function ServiceCard({ service }) {

  const openService = () => {
    window.open(service.url, "_blank");
  };

  const image =
  service.image ||
  categoryImages[service.category];

const IconComponent = iconMap[service.icon];
  return (
    <div className="service-card">

 <div className="service-image">

  <img
    src={image}
    alt={service.name}
  />

</div>

  <div className="service-icon">
    {IconComponent && <IconComponent />}
  </div>

  <h5>{service.name}</h5>

  <p>{service.description}</p>

  <span className="service-category">
    {service.category}
  </span>

  <button
    className="btn service-btn"
    onClick={openService}
  >
    Open Service
  </button>

</div>
  );
}

export default ServiceCard;