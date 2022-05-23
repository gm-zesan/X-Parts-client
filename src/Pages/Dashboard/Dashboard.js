import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import "./Dashboard.css";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/user/${email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setInfo(data));
    }, [user, info]);
    const click_toggle = () => {
        const addclass = document.querySelector(".sidebar-wrapper");
        addclass.classList.toggle("sidebar");
    };

    return (
        <div class="d-flex" id="wrapper">
            <div class="border-end bg-white sidebar-wrapper">
                <div class="list-group list-group-flush">
                    <Link
                        to=""
                        class="list-group-item list-group-item-action list-group-item-light p-3"
                    >
                        My Orders
                    </Link>
                    <Link
                        to="review"
                        class="list-group-item list-group-item-action list-group-item-light p-3"
                    >
                        Add a Review
                    </Link>
                    <Link
                        to="alluser"
                        class="list-group-item list-group-item-action list-group-item-light p-3"
                    >
                        All User
                    </Link>

                    <Link
                        to="profile"
                        class="list-group-item list-group-item-action list-group-item-light p-3"
                    >
                        My Profile
                    </Link>
                </div>
            </div>
            <div id="page-content-wrapper" className="w-100">
                <div className="container">
                    <button
                        class="btn btn-primary dashboard_menu d-md-none"
                        onClick={click_toggle}
                    >
                        +
                    </button>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
