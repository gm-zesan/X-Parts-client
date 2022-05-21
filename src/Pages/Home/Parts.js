import React from "react";
import { Link } from "react-router-dom";
import SinglePart from "./SinglePart";

const Parts = () => {
    return (
        <div>
            <div className="container">
                <h2 className="mb-5 section-title">
                    Featured<span> Products</span>
                </h2>
                <div className="row row-cols-1 row-cols-md-3">
                    <SinglePart></SinglePart>
                </div>
            </div>
        </div>
    );
};

export default Parts;
