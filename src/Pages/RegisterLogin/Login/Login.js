import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import "./login.css";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    if (user) {
        const email = user?.user?.email;
        const currentUser = { email };
        const url = `https://calm-harbor-28456.herokuapp.com/login`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
            });
    }

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

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <>
            <div className="register p-5 mt-5">
                <h2 className="text-center text-info pb-3">Login Here</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className="input-form"
                            type="email"
                            placeholder="Enter email"
                            {...register("email", {
                                required: true,
                            })}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className="input-form"
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: true,
                            })}
                            required
                        />
                    </Form.Group>

                    <button className="btn-custom mt-3 w-100" type="submit">
                        Login
                    </button>
                    <div className="forgot-password mt-3">
                        <Link to="/forgotPass">Forgot Password</Link>
                    </div>
                </Form>
                {errorElement}
                <p className="text-center sign-toggle mt-3">
                    Don't Have account?
                    <Link to="/register" className="ps-2 text-info">
                        Register
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </>
    );
};

export default Login;
