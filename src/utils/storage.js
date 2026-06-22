import defaultServices from "../data/services";

export const getServices = () => {
  const stored = localStorage.getItem("services");

  if (!stored) {
    localStorage.setItem(
      "services",
      JSON.stringify(defaultServices)
    );

    return defaultServices;
  }

  return JSON.parse(stored);
};

export const saveServices = (services) => {
  localStorage.setItem(
    "services",
    JSON.stringify(services)
  );
};

export const generateId = () => {
  return Date.now();
};