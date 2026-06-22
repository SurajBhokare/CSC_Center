import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ServiceCard from "./ServiceCard";
import { getServices } from "../utils/storage";
import "./PopularService.css";

function PopularServices() {

  const [services, setServices] = useState([]);
  useEffect(() => {

    setServices(
      getServices()
    );

  }, []);

  return (

    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Popular Services
          </h2>
          <p className="text-secondary">
            Quick access to frequently used digital services
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {
          services.length > 0 ?
          services
          .slice(0,6)
          .map((service)=>(
            <div key={service.id} className="col-lg-4 col-md-6"  >
              <ServiceCard
                service={service}
              />
            </div>
          ))
          :
          <p className="text-center">
            No services available
          </p>
          }
        </div>
        {
        services.length > 6 &&
        <div className="text-center mt-5">
          <Link to="/services" className="view-service-btn" >
          View All Services →
          </Link>
        </div>
        }
      </div>
    </section>
  );
}
export default PopularServices;