import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import "./SocialLogin.css";
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let loadingElement;
    let errorElement;

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        loadingElement = (
            <div>
                <p className="text-info">Loading...</p>
            </div>
        );
    }
    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }
    return (
        <div>
            <div className="or-container">
                <div className="line-separator"></div>
                <div className="or-label">or</div>
                <div className="line-separator"></div>
            </div>
            {loadingElement}
            {errorElement}
            <div className="row">
                <div className="col-md-12">
                    <button
                        onClick={() => signInWithGoogle()}
                        className="d-block mx-auto my-2 loginBtn-google"
                    >
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;
