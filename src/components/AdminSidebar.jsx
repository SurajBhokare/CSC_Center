import { FaTachometerAlt, FaPlusCircle, FaListAlt, FaTags, FaCog } from "react-icons/fa";
import "./AdminSidebar.css";
import logo from "../assets/logo.png";

function AdminSidebar({ activeTab, setActiveTab }) {
  const menus = [
    {
      id: "dashboard", title: "Dashboard", icon: <FaTachometerAlt />
    },
    {
      id: "add-service", title: "Add Service", icon: <FaPlusCircle />
    },
    {
      id: "manage-services", title: "Manage Services", icon: <FaListAlt />
    },
    {
      id: "categories", title: "Categories", icon: <FaTags />
    },
    {
      id: "settings", title: "Settings", icon: <FaCog />
    }
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Swara Multiservices" />
        <span className="logo-text"> Swara Multiservices </span>
      </div>
      <ul className="sidebar-menu">
        {menus.map((menu) => (
          <li key={menu.id} className={
            activeTab === menu.id ? "sidebar-item active" : "sidebar-item"
          }
            onClick={() => setActiveTab(menu.id)} >
            <span className="sidebar-icon">
              {menu.icon}
            </span>
            <span>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebar;