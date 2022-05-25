import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const click_toggle = () => {
        const addclass = document.querySelector(".sidebar-wrapper");
        addclass.classList.toggle("sidebar");
    };

    return (
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white sidebar-wrapper">
                <div className="list-group list-group-flush">
                    {admin ? (
                        <>
                            <Link
                                to=""
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                My Profile
                            </Link>
                            <Link
                                to="manageorders"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                Manage Orders
                            </Link>
                            <Link
                                to="addproduct"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                Add Product
                            </Link>
                            <Link
                                to="manageproducts"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                Manage Product
                            </Link>
                            <Link
                                to="alluser"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                All User
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                to=""
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                My Profile
                            </Link>
                            <Link
                                to="myorders"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                My Orders
                            </Link>
                            <Link
                                to="review"
                                className="list-group-item list-group-item-action list-group-item-light p-3"
                            >
                                Add a Review
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div id="page-content-wrapper" className="w-100">
                <div className="container">
                    <button
                        className="btn btn-primary dashboard_menu d-md-none"
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
