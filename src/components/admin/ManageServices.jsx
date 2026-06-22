import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  getServices,
  saveServices
} from "../../utils/storage";

import "./ManageServices.css";

function ManageServices({
  setSelectedService,
  setActiveTab
}) {

  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = () => {
    setServices(getServices());
  };

  const deleteService = (id) => {

    const confirmDelete = window.confirm(
      "Delete this service?"
    );

    if (!confirmDelete) return;

    const updatedServices =
      services.filter(
        (service) => service.id !== id
      );

   saveServices(updatedServices);

setServices(updatedServices);

toast.error(
  "Service Deleted ❌"
);
  };

  const filteredServices =
    services.filter((service) =>
      service.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="manage-services">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Services</h2>

        <input
          type="text"
          placeholder="Search Service..."
          className="form-control search-box"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="row g-4">

        {filteredServices.map((service) => (

          <div
            key={service.id}
            className="col-lg-4"
          >

            <div className="service-manage-card">

              <h5>{service.name}</h5>

              <p>
                {service.description}
              </p>

              <span className="badge bg-primary">
                {service.category}
              </span>


              <div className="action-buttons">

                <button
                  className="btn btn-warning"
                  onClick={() => {
                    setSelectedService(service);
                    setActiveTab("add-service");
                  }}
                >
                  <FaEdit />
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteService(service.id)
                  }
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ManageServices;