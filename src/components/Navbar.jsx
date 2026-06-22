import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/logo.png";


function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          <img
            src={logo}
            alt="CSC Connect Logo"
            className="navbar-logo"
          />
        </Link>
        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"        >
          <span className="navbar-toggler-icon"></span>

        </button>
        {/* Theme Toggle */}
        <button
          className="theme-toggle"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")}>
          <div
            className={
              `toggle-circle ${theme === "light" ? "active" : ""}`}>
            {
              theme === "dark"
                ?
                <FaMoon />
                :
                <FaSun />
            }
          </div>
        </button>
        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link" to="/"> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link admin-btn" to="/admin">
                Admin
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;