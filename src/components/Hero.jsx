import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    return (
        <section className="hero-section">

            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-6">
                        <span className="hero-badge">
                          🖥️ New Swara Multiservices
                        </span>
                        <h1 className="hero-title">
                            One Platform For
                            <span> Digital Services</span>
                        </h1>
                        <p className="hero-desc">
                            Access PAN Card, Aadhaar, Banking, Insurance,
                            Government Schemes, Utility Bills and many more
                            services from a single platform.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn explore-btn" onClick={() => navigate("/services")}>
                                Explore Services
                            </button>
                            <button className="btn contact-btn" onClick={() => navigate("/contact")}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="glass-card">
                            <h3>Search Services</h3>
                            <input type="text"
                                className="form-control mt-3"
                                placeholder="Search PAN, Aadhaar, Banking..."
                                value={search} onChange={(e) => setSearch(e.target.value)} />
                            <button
                                className="btn search-btn mt-3"
                                onClick={() =>     navigate(`/services?search=${search}`)  } >
                                Search
                            </button>
                            <div className="stats mt-4">
                                <div>
                                    <h4>30+</h4>
                                    <p>Services</p>
                                </div>
                                <div>
                                    <h4>10+</h4>
                                    <p>Categories</p>
                                </div>
                                <div>
                                    <h4>24/7</h4>
                                    <p>Access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;