import React from "react";
import noPage from "../../images/404.jpg";
import "./NoPage.css";
const NoPage = () => {
    return (
        <div className="container error">
            <div className="error-img">
                <img className="img-fluid" src={noPage} alt="" />
            </div>
        </div>
    );
};

export default NoPage;
