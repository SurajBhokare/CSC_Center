import {
  FaUsers,
  FaShieldAlt,
  FaGlobe,
  FaCheckCircle
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">
          About swara Multiservices
        </h1>

        <p >
          Your One-Stop Digital Service Portal
        </p>
      </div>

      <div className="row align-items-center mb-5">

        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="swara Multiservices"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-lg-6">

          <h2 className="mb-3">
            Who We Are
          </h2>

          <p>
            swara Multiservices is a digital service platform
            designed to provide easy access to various
            government, financial, educational,
            insurance, and utility services from a
            single location.
          </p>

          <p>
            Our mission is to bridge the digital gap
            and help citizens access important online
            services quickly and efficiently.
          </p>

        </div>

      </div>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center p-4 h-100">
            <FaUsers
              size={40}
              className="mx-auto mb-3 text-primary"
            />
            <h5>Citizen Focused</h5>
            <p>
              Simplifying services for every citizen.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center p-4 h-100">
            <FaShieldAlt
              size={40}
              className="mx-auto mb-3 text-success"
            />
            <h5>Reliable</h5>
            <p>
              Trusted access to important digital services.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center p-4 h-100">
            <FaGlobe
              size={40}
              className="mx-auto mb-3 text-warning"
            />
            <h5>Digital Access</h5>
            <p>
              Bringing services closer through technology.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center p-4 h-100">
            <FaCheckCircle
              size={40}
              className="mx-auto mb-3 text-danger"
            />
            <h5>Fast & Easy</h5>
            <p>
              Access multiple services with one click.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-5">

        <h2 className="mb-4 text-center">
          Services We Provide
        </h2>

        <div className="row">

          <div className="col-md-6">
            <ul>
              <li>PAN Card Services</li>
              <li>Aadhaar Services</li>
              <li>Banking Services</li>
              <li>Insurance Services</li>
              <li>Government Schemes</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul>
              <li>Bill Payments</li>
              <li>Education Services</li>
              <li>Utility Services</li>
              <li>Railway Booking</li>
              <li>Flight Booking</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;