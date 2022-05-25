import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../../images/social-icon/facebook.png";
import Git from "../../../images/social-icon/github.png";
import Google from "../../../images/social-icon/google.png";
import "./Footer.css";
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="mt-5">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="widget_box social_icons">
                                <h6>Let's Connect</h6>
                                <Link to="/">
                                    <img
                                        className="icon"
                                        src={Facebook}
                                        alt=""
                                    />
                                </Link>
                                <Link to="/" className="pl-3">
                                    <img className="icon" src={Git} alt="" />
                                </Link>
                                <Link to="/" className="pl-3">
                                    <img className="icon" src={Google} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget_box">
                                <h6>Provide</h6>
                                <ul>
                                    <li>
                                        <span>Organic</span>
                                    </li>
                                    <li>
                                        <span>Always Punctual</span>
                                    </li>
                                    <li>
                                        <span>Health</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget_box">
                                <h6>Services</h6>
                                <ul>
                                    <li>
                                        <span>Free Delevery</span>
                                    </li>
                                    <li>
                                        <span>Quality Food</span>
                                    </li>
                                    <li>
                                        <span>Product Service</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget_box">
                                <h6>ReadMe</h6>
                                <ul>
                                    <li>
                                        <span>About Us</span>
                                    </li>
                                    <li>
                                        <span>My Blogs</span>
                                    </li>
                                    <li>
                                        <span>Products</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row mx-5">
                        <div className="col-12 col-md-6">
                            <p className="text-dark">
                                Copyright &copy; {year} All rights reserved.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-right">
                            <p className="text-dark">
                                <Link to="/">Privacy Policy</Link> and{" "}
                                <Link to="/"> Terms of Service</Link> apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
