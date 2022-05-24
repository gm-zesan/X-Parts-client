import React from "react";
import { useNavigate } from "react-router-dom";
const SinglePart = ({product}) => {
    const navigate = useNavigate();

    const handleOrder = (id) => {
        navigate(`/order/${id}`);
    };
    return (
        <>
            <div className="col mb-4">
                <div className="card h-100 card-degine">
                    <img src="" className="card-img-top mx-auto" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title text-center mb-3">
                            {product.name}
                        </h3>
                        <h6 className="text-center">
                            Price: $ {product.price} / ps
                        </h6>
                        <h6 className="text-center">
                            Available: {product.availableQnt} ps
                        </h6>
                        <hr />
                        <p className="card-text">{product.description}</p>
                    </div>
                    <div className="card-footer text-center">
                        <button
                            onClick={() => handleOrder(`${product._id}`)}
                            className="btn-custom"
                        >
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePart;
