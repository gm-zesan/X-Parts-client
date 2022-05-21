import { async } from "@firebase/util";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../../firebase.init";
import Header from "../../Shared/Header/Header";

const ForgotPass = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const SendPasswordReset = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);
        toast.success("Mail has been sent");
        event.target.reset();
    };

    return (
        <div>
            <Header></Header>
            <div className="register p-5 mt-5">
                <h2>FOrgot PAssword</h2>
                <Form onSubmit={SendPasswordReset}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="input-form"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Button className="btn-custom-special mt-3" type="submit">
                        Send email for reset password
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default ForgotPass;
