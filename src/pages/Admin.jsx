import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Dashboard from "../components/Dashboard";
import AddService from "../components/admin/AddService";
import AdminCategories from "../components/AdminCategories";
import ManageServices
from "../components/admin/ManageServices";

function Admin() {
// export data as JSON file
    const exportData = () => {
  const services =
    localStorage.getItem("services");
  const blob = new Blob(
    [services],
    {
      type:"application/json"
    }
  );
  const link =
    document.createElement("a");
  link.href =
    URL.createObjectURL(blob);
  link.download =
    "services-backup.json";
  link.click();
};

<button
  className="btn btn-success"
  onClick={exportData}
>
  Export Backup
</button>

// import data from JSON file
const importData = (e) => {

  const file =
    e.target.files[0];

  const reader =
    new FileReader();

  reader.onload = () => {

    localStorage.setItem(
      "services",
      reader.result
    );

    window.location.reload();
  };

  reader.readAsText(file);
};
<input type="file"accept=".json" onChange={importData}/>
  const [activeTab, setActiveTab] =
    useState("dashboard");
    const [selectedService, setSelectedService] =
  useState(null);

 const renderContent = () => {
  switch(activeTab){
    case "dashboard":
      return <Dashboard />;
   case "add-service":
  return (
    <AddService
      selectedService={selectedService}
      setSelectedService={setSelectedService} />
  );

case "manage-services":
  return (
    <ManageServices
      setSelectedService={setSelectedService}
      setActiveTab={setActiveTab}
    />
  );
    default:
      return (
        <h3>{activeTab}</h3>
      );
  }
};

  return (
    <div className="d-flex">
      <AdminSidebar
        activeTab={activeTab}  setActiveTab={setActiveTab} />
      <div
        className="flex-grow-1 p-4" >
        {renderContent()}
      </div>
    </div>
  );
}

export default Admin;