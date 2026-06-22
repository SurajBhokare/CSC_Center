import { useState, useEffect } from "react";
import { getServices, saveServices, generateId } from "../../utils/storage";
import defaultCategories from "../../data/categories";
import { toast } from "react-toastify";

import "./AddService.css";

function AddService({
    selectedService,
    setSelectedService
}) {

    useEffect(() => {

        if (selectedService) {

            setService({
                name: selectedService.name,
                description: selectedService.description,
                category: selectedService.category,
                url: selectedService.url,
                icon: selectedService.icon,
                image: selectedService.image || ""
            });

        }

    }, [selectedService]);

    const [service, setService] = useState({
        name: "",
        description: "",
        category: "",
        url: "",
        icon: "",
        image: ""
    });

    const handleChange = (e) => {
        setService({
            ...service,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const services = getServices();

        if (selectedService) {

            const updatedServices =
                services.map((item) =>

                    item.id === selectedService.id
                        ? {
                            ...item,
                            ...service
                        }
                        : item
                );

            saveServices(updatedServices);

          toast.success(
  "Service Updated Successfully ✨"
);

            setSelectedService(null);

        } else {

            const newService = {
                id: generateId(),
                ...service
            };

            services.push(newService);

            saveServices(services);

          toast.success(
  "Service Added Successfully 🚀"
);
        }

        setService({
            name: "",
            description: "",
            category: "",
            url: "",
            icon: "",
            image: ""
        });
    };

    return (
        <div className="add-service-container">

            <h2>Add New Service</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label>Service Name</label>

                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={service.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Description</label>

                    <textarea
                        className="form-control"
                        rows="3"
                        name="description"
                        value={service.description}
                        onChange={handleChange}
                        required
                     />
                </div>

                <div className="mb-3">
                    <label>Category</label>

                    <select
                        className="form-select"
                        name="category"
                        value={service.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">
                            Select Category
                        </option>

                        {defaultCategories.map((cat, index) => (
                            <option key={index}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label>Image URL</label>

                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        value={service.image}
                        onChange={handleChange}
                        placeholder="Paste image URL"
                    />
                </div>

                <div className="mb-3">
                    <label>Website URL</label>

                    <input
                        type="url"
                        className="form-control"
                        name="url"
                        value={service.url}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label>Icon</label>

                    <select
                        className="form-control"
                        name="icon"
                        value={service.icon}
                        onChange={handleChange}
                        required
                    >
                        <option value="">
                            Select Icon
                        </option>

                        <option value="FaIdCard">
                            ID Card
                        </option>

                        <option value="FaFingerprint">
                            Aadhaar
                        </option>

                        <option value="FaUniversity">
                            Banking
                        </option>

                        <option value="FaShieldAlt">
                            Insurance
                        </option>

                        <option value="FaTrain">
                            Travel
                        </option>

                        <option value="FaBolt">
                            Utility
                        </option>

                    </select>
                </div>

                <button
                    type="submit"
                    className="btn add-btn"
                >
                    {
                        selectedService
                            ? "Update Service"
                            : "Add Service"
                    }
                </button>

            </form>

        </div>
    );
}

export default AddService;