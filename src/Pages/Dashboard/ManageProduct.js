import React, { useEffect, useState } from "react";
import { confirm } from "react-confirm-box";
import toast from "react-hot-toast";
const ManageProduct = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://x-parts.onrender.com/product")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const handleDelete = async (id) => {
        const options = {
            closeOnOverlayClick: true,
            labels: {
                confirmable: "Yes",
                cancellable: "No",
            },
        };
        const result = await confirm("Are you sure?", options);
        if (result) {
            const url = `https://x-parts.onrender.com/product/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = items.filter(
                        (product) => product._id !== id
                    );
                    setItems(remaining);
                    toast.success("Product deleted successfully");
                });
        }
    };

    return (
        <div className="container">
            <h2 className="mb-4 text-center my-5 pb-5">
                All<span style={{ color: "#008037" }}> Products</span>(
                {items.length})
            </h2>
            <div className="list-unstyled">
                {items.map((item) => (
                    <div
                        key={item._id}
                        className="row row-cols-1 row-cols-md-3 mb-3 align-items-center justify-content-center custom-list"
                    >
                        <div className="col-md-4 text-center">
                            <img
                                style={{ width: "350px", height: "300px" }}
                                src={item.image}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="col-md-6">
                            <h5 className="mt-0 mb-3 display-6">{item.name}</h5>
                            <h5>Price : $ {item.price} per KG</h5>
                            <h5>Quantity : {item.quantity} kg</h5>
                            <p className="text-justify">{item.description}</p>
                        </div>
                        <div className="col-md-2">
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="btn-custom"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;
