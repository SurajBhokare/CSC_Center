import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Contact Us
        </h1>
        <p className="lead text-muted">
          We'd love to hear from you
        </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-5">
          <div className="card shadow border-0 p-4 h-100">
            <h3 className="mb-4">
              Get In Touch
            </h3>
            <p>
              <FaPhoneAlt className="me-2 text-primary" />
              +91 9370506422
            </p>
            <p>
              <FaEnvelope className="me-2 text-danger" />
              support@swaramultiservices.com
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 text-success" />
              Arvi, Maharashtra, India
            </p>
            <p>
              <FaClock className="me-2 text-warning" />
              Mon - Sat : 9:00 AM - 7:00 PM
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card shadow border-0 p-4">
            <h3 className="mb-4">
              Send Message
            </h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea rows="5" className="form-control"
                  placeholder="Your Message" ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="card border-0 shadow p-4">
          <h3 className="mb-3">
            Office Information
          </h3>
          <p>
            Swara Multiservices helps users access
            digital services including Aadhaar,
            PAN, Banking, Government Schemes,
            Utility Services, Education Services,
            and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;