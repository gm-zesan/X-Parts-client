import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Purchase = () => {
    const { orderId } = useParams();
    const [quantity, setQuantity] = useState(100);

    const handleIncrease = (e) => {
        setQuantity(quantity+1);
    };
    const handleDecrease = (e) => {
        setQuantity(quantity - 1);
    };
    return (
        <div className="container my-5">
            <h2>Order Id:{orderId}</h2>
            <button className="btn px-3 btn-info" onClick={handleDecrease}>
                -
            </button>
            <span
                className="text-center"
                style={{ width: "70px", display: "inline-block" }}
            >
                {quantity}
            </span>
            <button className="btn px-3 btn-info"  onClick={handleIncrease}>
                +
            </button>
            {/* <div className="row align-items-center justify-content-center">
                <div className="col-md-6 text-center">
                    <img src={product.image} alt="" />
                </div>

                <div className="col-md-6">
                    <p className="h2">{product.name}</p>
                    <p className="h4">Price : $ {product.price} per KG</p>
                    <p className="h4 quantity">
                        Quantity : {product.quantity} kg
                    </p>
                    <p className="desc">{product.description}</p>
                    <p className="text-right">
                        <small>Supplier : {product.supplier}</small>
                    </p>
                    {product.quantity > 0 ? (
                        <button onClick={handleDecrease} className="btn-custom">
                            Delever a Product
                        </button>
                    ) : (
                        <p>SOLD-OUT</p>
                    )}
                    <div className="or-container">
                        <div className="line-separator"></div>
                        <div className="or-label">or</div>
                        <div className="line-separator"></div>
                    </div>
                    <Form onSubmit={increaseQuantity}>
                        <div className="row">
                            <Form.Label>Add Quantity</Form.Label>
                            <div className="col-md-7">
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        type="number"
                                        name="quantity"
                                        placeholder="Increase your product quantity"
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-5">
                                <button className="btn-custom-special btn">
                                    Add quantity
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div> */}
        </div>
    );
};

export default Purchase;
