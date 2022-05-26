import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("https://calm-harbor-28456.herokuapp.com/orders", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json().then((data) => setAllOrders(data)));
    }, [allOrders]);

    const handleShifting = (id) => {
        const selectedItem = allOrders.find((item) => item._id === id);
        if (selectedItem.status === "pending") {
            selectedItem.status = "shipped";
            const url = `https://calm-harbor-28456.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({
                    status: selectedItem.status,
                }),
            })
                .then((res) => res.json())
                .then((result) => {
                    toast.success("Order is shipped");
                });
        } else {
            selectedItem.status = "pending";
            const url = `https://calm-harbor-28456.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify({
                    status: selectedItem.status,
                }),
            })
                .then((res) => res.json())
                .then((result) => {
                    toast.success("Order is reverted to pending");
                });
        }
    };
    return (
        <div>
            <h2 className="my-5 text-center">
                All <span style={{ color: "#008037" }}>Orders</span>
            </h2>
            <div className="table-responsive">
                <table className="table text-center">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Shifting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.map((allorder, index) => (
                            <tr key={allorder._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{allorder._id}</td>
                                <td>{allorder.product}</td>
                                <td>{allorder.quantity}</td>
                                <td>$ {allorder.totalPrice}</td>
                                <td>
                                    {allorder.totalPrice && !allorder.paid && (
                                        <p className="text-danger fw-bold">
                                            Not paid yet
                                        </p>
                                    )}

                                    {allorder.totalPrice && allorder.paid && (
                                        <p className="text-success fw-bold">
                                            Paid
                                        </p>
                                    )}
                                </td>
                                <td>
                                    {allorder.status === "pending" && (
                                        <button
                                            onClick={() =>
                                                handleShifting(allorder._id)
                                            }
                                            className="btn btn-warning"
                                            title="confirm-order"
                                        >
                                            Pending
                                        </button>
                                    )}
                                    {allorder.status === "shipped" && (
                                        <button
                                            onClick={() =>
                                                handleShifting(allorder._id)
                                            }
                                            className="btn btn-success"
                                            title="confirm-order"
                                        >
                                            Shipped
                                        </button>
                                    )}
                                    {!allorder.status && (
                                        <button
                                            className="btn btn-danger"
                                            title="confirm-order"
                                        >
                                            Not paid yet
                                        </button>
                                    )}
                                    {/* {allorder.status === "pending" ? (
                                        <button
                                            onClick={() =>
                                                handleShifting(allorder._id)
                                            }
                                            className="btn btn-warning"
                                            title="confirm-order"
                                        >
                                            Pending
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleShifting(allorder._id)
                                            }
                                            className="btn btn-success"
                                            title="revert-order"
                                        >
                                            Shipped
                                        </button>
                                    )} */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;
