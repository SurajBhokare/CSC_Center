import {
    useEffect,
    useState
} from "react";

import {
    getCategories,
    saveCategories
}
    from "../utils/categoryStorage";
function AdminCategories() {
    const [categories, setCategories]
        =
        useState([]);
    const [category, setCategory]
        =
        useState("");
    useEffect(() => {
        setCategories(
            getCategories()
        );
    }, []);

    const addCategory = () => {
        if (!category.trim())
            return;
        const updated = [...categories, category];
        setCategories(updated);
        saveCategories(updated);
        setCategory("");
    };
    const deleteCategory = (index) => {
        const updated =
            categories.filter(
                (_, i) => i !== index
            );
        setCategories(updated);
        saveCategories(updated);
    };
    return (
        <div className="card shadow p-4">
            <h3 className="mb-4">
                Manage Categories
            </h3>
            <div className="input-group mb-4">
                <input
                    className="form-control"
                    placeholder="Enter Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} />
                <button
                    className="btn btn-primary"
                    onClick={addCategory}>
                    Add
                </button>
            </div>
            <ul className="list-group">
                {
                    categories.map(
                        (cat, index) => (
                            <li
                                key={index} className="list-group-item d-flex justify-content-between">
                                {cat}
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() =>
                                        deleteCategory(index)
                                    }>
                                    Delete
                                </button>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
} export default AdminCategories;