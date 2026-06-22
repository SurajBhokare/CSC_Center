import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4>Swara Multiservices</h4>
                        <p>
                            Swara Multiservices helps users access
                            digital services including Aadhaar,
                            PAN, Banking, Government Schemes,
                            Utility Services, Education Services,
                            and more.
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <a href="/"> Home </a>
                            </li>
                            <li>
                                <a href="/services"> Services  </a>
                            </li>
                            <li>
                                <a href="/about">  About  </a>
                            </li>
                            <li>
                                <a href="/admin">  Admin  </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5>Contact</h5>
                        <p>
                            <FaPhone /> +91 9370506422
                        </p>
                        <p>
                            <FaEnvelope />
                            support@swaramultiservices.com
                        </p>
                    </div>
                </div>
                <hr />
                <div className="copyright">
                    © 2026 Swara Multiservices.
                    All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;