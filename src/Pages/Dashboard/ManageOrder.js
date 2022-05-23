import React, { useEffect, useState } from "react";

const ManageOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/orders", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json().then((data) => setAllOrders(data)));
    }, []);
    return (
        <div>
            <h2 className="my-5 text-center">
                My all <span style={{ color: "#008037" }}>Orders</span>
            </h2>
            <div className="table-responsive">
                <table class="table text-center">
                    <thead class="thead-dark">
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
                        {allOrders.map((allorder) => (
                            <tr key={allorder._id}>
                                <th scope="row">1</th>
                                <td>{allorder._id}</td>
                                <td>{allorder.product}</td>
                                <td>{allorder.quantity}</td>
                                <td>$ {allorder.totalPrice}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-dark btn-sm"
                                    >
                                        Payment
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-dark btn-sm"
                                    >
                                        Shifting
                                    </button>
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
