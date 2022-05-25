import React, { useEffect, useState } from "react";
import SinglePart from "./SinglePart";

const Parts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <div className="container">
                <h2 className="mb-5 section-title">
                    Featured<span> Products</span>
                </h2>
                <div className="row row-cols-1 row-cols-md-3">
                    {products.map((product) => (
                        <SinglePart
                            key={product._id}
                            product={product}
                        ></SinglePart>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Parts;
