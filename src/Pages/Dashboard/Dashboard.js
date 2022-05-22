import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
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
