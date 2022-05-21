import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import Header from "../../Shared/Header/Header";
import Loading from "../../Shared/Loading/Loading";
const Register = () => {
    const [terms, setTerms] = useState(false);
    const navigate = useNavigate();

    let errorElement;
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification :true});

    const [updateProfile] = useUpdateProfile(auth);

    
    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }
    
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate("/");
    };
    return (
        <div>
            <Header></Header>
            <div className="my-5 mx-auto">
                <div className="register p-5">
                    <h2 className="text-center text-info pb-3">Registration</h2>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                onClick={() => setTerms(!terms)}
                                type="checkbox"
                                label="Accept terms and conditions"
                            />
                        </Form.Group>
                        <Button
                            disabled={!terms}
                            className="btn-custom-special"
                            type="submit"
                        >
                            Register
                        </Button>
                    </Form>
                    {errorElement}
                    <p className="text-center sign-toggle mt-3">
                        Already have an account?
                        <Link to="/login" className="ps-2">
                            Login
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
