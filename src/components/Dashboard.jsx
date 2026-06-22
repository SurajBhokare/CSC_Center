import { FaLayerGroup, FaTags } from "react-icons/fa";
import { getServices } from "../utils/storage";
import defaultCategories from "../data/categories";
import "./Dashboard.css";

function Dashboard() {
  const services = getServices();

  return (
    <>
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>
          Welcome to swara Multiservice Admin Panel
        </p>
      </div>

      <div className="row g-4 mt-3">
        <div className="col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon">
              <FaLayerGroup />
            </div>
            <h3>{services.length}</h3>
            <p>Total Services</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon">
              <FaTags />
            </div>
            <h3>{defaultCategories.length}</h3>
            <p>Total Categories</p>
          </div>
        </div>
      </div>

      <div className="recent-section mt-5">
        <h4>Recent Services</h4>
        {services.slice(-5).reverse().map((service) => (
          <div
            key={service.id} className="recent-item" >
            {service.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;