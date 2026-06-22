import { useEffect, useState } from "react";
import { getServices } from "../utils/storage";
import { useLocation } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

function Services() {

    const location = useLocation();

    const query =
        new URLSearchParams(location.search);

    const searchFromHero =
        query.get("search") || "";

    const [services, setServices] =
        useState([]);

    const [search, setSearch] =
        useState(searchFromHero);

    useEffect(() => {

        setServices(
            getServices()
        );

    }, []);

    const filteredServices =
        services.filter((service) =>

            service.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );

    return (

        <div className="container py-5">
            <h1 className="mb-4">
                All Services
            </h1>
            <input

                type="text"
                className="form-control mb-4"
                placeholder="Search Services..."
                value={search}
                onChange={(e) =>
                    setSearch(
                        e.target.value
                    )
                }
            />

            <div className="row g-4">
                {
                    filteredServices.length > 0
                        ?
                        filteredServices.map(
                            (service) => (
                                <div
                                    key={service.id}
                                    className="col-lg-4"
                                >
                                    <ServiceCard
                                        service={service}
                                    />
                                </div>
                            )
                        )
                        :
                        <h4>
                            No Services Found
                        </h4>
                }
            </div>
        </div>

    );

}
export default Services;