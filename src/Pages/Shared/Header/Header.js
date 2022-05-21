import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomeLink/CustomeLink";
// import logo from "../../../logo.png";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    };
    const navigteLogIn = () => {
        navigate("/login");
    };

    return (
        <>
            <Navbar
                sticky="top"
                collapseOnSelect
                expand="lg"
                variant="light"
                bg="white"
            >
                <Container>
                    <Navbar.Brand to="/">X-Parts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className="nav-link" to="/">
                                Home
                            </CustomLink>
                            <CustomLink className="nav-link" to="/blog">
                                Blog
                            </CustomLink>
                            {/* {user && (
                                <>
                                    <CustomLink
                                        className="nav-link"
                                        to="/items"
                                    >
                                        Manage-Item
                                    </CustomLink>
                                    <CustomLink
                                        className="nav-link"
                                        to="/myitems"
                                    >
                                        My-Item
                                    </CustomLink>
                                    <CustomLink
                                        className="nav-link"
                                        to="/additem"
                                    >
                                        Add-Item
                                    </CustomLink>
                                </>
                            )} */}
                            <CustomLink className="nav-link" to="/about">
                                Dashboard
                            </CustomLink>
                        </Nav>
                        <Nav className="ms-auto">
                            {user ? (
                                <button
                                    className="nav-link log-detail"
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </button>
                            ) : (
                                <button
                                    className="nav-link log-detail"
                                    onClick={navigteLogIn}
                                    to="/login"
                                >
                                    Login
                                </button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
