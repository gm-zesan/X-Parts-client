import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { orderId } = useParams();
    const [quantity, setQuantity] = useState(100);

    const handleIncrease = (e) => {
        setQuantity(quantity + 1);
    };
    const handleDecrease = (e) => {
        setQuantity(quantity - 1);
    };
    return (
        <div className="container my-5">
            <div className="row mb-5 align-items-center justify-content-center">
                <div className="col-md-6 text-center">
                    <img src="" alt="" />
                </div>

                <div className="col-md-6">
                    <p className="h2">Order Id:{orderId}</p>
                    <p className="h2">name</p>
                    <p className="h4">Price : $ price per KG</p>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos ipsa quis aliquid distinctio totam dolorem, maxime
                        cumque hic assumenda quibusdam.
                    </p>
                    <button onClick={handleDecrease} className="btn-custom">
                        -
                    </button>
                    <span
                        style={{
                            width: "80px",
                            display: "inline-block",
                        }}
                    >
                        <input
                            className="form-control text-center"
                            type="number"
                            name="quantity"
                            value={quantity}
                        />
                    </span>
                    <button onClick={handleIncrease} className="btn-custom">
                        +
                    </button>
                </div>
            </div>
            <div className="or-container">
                <div className="line-separator"></div>
                <div className="or-label">and</div>
                <div className="line-separator"></div>
            </div>
            <h2 className="text-center section-title mb-5">
                <span style={{ color: "#008037" }}>Information</span> for place
                order
            </h2>
            <Form>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <Form.Label className="h5">Name</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="name"
                                value={user.displayName}
                                disabled
                            />
                        </Form.Group>
                        <Form.Label className="h5">Email</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="email"
                                value={user.email}
                                disabled
                            />
                        </Form.Group>
                        <Form.Label className="h5">Phone Number</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="phone"
                                placeholder="Phone number"
                            />
                        </Form.Group>
                        <Form.Label className="h5">Address</Form.Label>
                        <Form.Group className="mb-3">
                            <textarea
                                class="form-control"
                                name="address"
                                placeholder="Type your address"
                                rows="3"
                            ></textarea>
                        </Form.Group>
                        <button type="submit" className="btn-custom w-100 mt-3 mb-5">
                            Place Order
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Purchase;
