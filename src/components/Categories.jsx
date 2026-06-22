import "./Categories.css";

import {
  FaIdCard,
  FaFingerprint,
  FaUniversity,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaGraduationCap,
  FaTrain,
  FaBolt,
} from "react-icons/fa";

const categories = [
  {
    name: "PAN Services",
    icon: <FaIdCard />,
    services: "5+ Services",
  },
  {
    name: "Aadhaar Services",
    icon: <FaFingerprint />,
    services: "4+ Services",
  },
  {
    name: "Banking",
    icon: <FaUniversity />,
    services: "6+ Services",
  },
  {
    name: "Insurance",
    icon: <FaShieldAlt />,
    services: "4+ Services",
  },
  {
    name: "Government Schemes",
    icon: <FaFileInvoiceDollar />,
    services: "10+ Services",
  },
  {
    name: "Education",
    icon: <FaGraduationCap />,
    services: "8+ Services",
  },
  {
    name: "Travel Booking",
    icon: <FaTrain />,
    services: "5+ Services",
  },
  {
    name: "Utility Services",
    icon: <FaBolt />,
    services: "8+ Services",
  },
];

function Categories() {
  return (
    <section className="categories-section">
      <div className="container">

        <div className="section-header">
          <h2>Service Categories</h2>
          <p>
            Explore digital services across multiple categories
          </p>
        </div>

        <div className="row g-4">

          {categories.map((cat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="category-card">

                <div className="category-icon">
                  {cat.icon}
                </div>

                <h5>{cat.name}</h5>

                <p>{cat.services}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;