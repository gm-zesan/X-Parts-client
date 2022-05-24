import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myorders?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                });
                setMyOrders(data);
            } catch (error) {
                if (
                    error.response.status === 401 ||
                    error.response.status === 403
                ) {
                    signOut(auth);
                    navigate("/login");
                    toast.error(error.message);
                }
            }
        };
        getOrders();
    }, [user]);
    return (
        <div>
            <h2 className="my-5 text-center">
                My all <span style={{ color: "#008037" }}>Orders</span>
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
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((myorder, index) => (
                            <tr key={myorder._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{myorder._id}</td>
                                <td>{myorder.product}</td>
                                <td>{myorder.quantity}</td>
                                <td>$ {myorder.totalPrice}</td>
                                <td>
                                    {myorder.totalPrice && !myorder.paid && (
                                        <Link
                                            to={`/dashboard/payment/${myorder._id}`}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-sm"
                                            >
                                                Payment
                                            </button>
                                        </Link>
                                    )}
                                    {myorder.totalPrice && myorder.paid && (
                                        <span className="text-success">
                                            Paid
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
