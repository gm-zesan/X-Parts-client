import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/RegisterLogin/Login/Login";
import Register from "./Pages/RegisterLogin/Registration/Registration";
import RequireAuth from "./Pages/RegisterLogin/RequireAuth/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import ForgotPass from "./Pages/RegisterLogin/ForgotPass/ForgotPass";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Review from "./Pages/Dashboard/Review";
import Profile from "./Pages/Dashboard/Profile";
import AllUser from "./Pages/Dashboard/AllUser";
import RequireAdmin from "./Pages/RegisterLogin/RequireAdmin/RequireAdmin";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import NoPage from "./Pages/NoPage/NoPage";
import Payment from "./Pages/Dashboard/Payment";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/blog" element={<Blog></Blog>}></Route>
                <Route
                    path="/order/:productId"
                    element={
                        <RequireAuth>
                            <Purchase></Purchase>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyOrders />} />
                    <Route path="review" element={<Review />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="payment/:id" element={<Payment />} />
                    <Route
                        path="alluser"
                        element={
                            <RequireAdmin>
                                <AllUser />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manageorders"
                        element={
                            <RequireAdmin>
                                <ManageOrder />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="addproduct"
                        element={
                            <RequireAdmin>
                                <AddProduct />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manageproducts"
                        element={
                            <RequireAdmin>
                                <ManageProduct />
                            </RequireAdmin>
                        }
                    />
                </Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route
                    path="/forgotpass"
                    element={<ForgotPass></ForgotPass>}
                ></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="*" element={<NoPage></NoPage>}></Route>
            </Routes>
            <Toaster position="top-center" reverseOrder={true} />
            <Footer></Footer>
        </div>
    );
}

export default App;
