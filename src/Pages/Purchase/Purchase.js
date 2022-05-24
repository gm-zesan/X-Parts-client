import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/order/${productId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [productId]);

    const hanldeOrder = (event) => {
        event.preventDefault();
        const product = event.target.product.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const totalPrice = price * quantity;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;

        const url = `http://localhost:5000/order`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                product,
                quantity,
                totalPrice,
                name,
                email,
                phone,
                address,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Review posted successfully");
                event.target.reset();
            });
    };
    return (
        <div className="container my-5">
            <div className="row mb-5 align-items-center justify-content-center">
                <div className="col-md-6 text-center">
                    <img src="" alt="" />
                </div>

                <div className="col-md-6">
                    <p className="h2">Order Id:{productId}</p>
                    <p className="h2">{product.name}</p>
                    <p className="h4">Price : $ {product.price} per ps</p>
                    <p className="desc">{product.description}</p>
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
            <Form onSubmit={hanldeOrder}>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <Form.Label className="h5">Product</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="product"
                                value={product.name}
                                disabled
                            />
                        </Form.Group>
                        <Form.Label className="h5">Quantity</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="quantity"
                                placeholder="Enter quantity minimum 100 ps"
                                required
                            />
                        </Form.Group>
                        <Form.Label className="h5">
                            Price pre product
                        </Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="price"
                                value={product.price}
                                disabled
                            />
                        </Form.Group>
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
                                required
                            />
                        </Form.Group>
                        <Form.Label className="h5">Address</Form.Label>
                        <Form.Group className="mb-3">
                            <textarea
                                className="form-control"
                                name="address"
                                placeholder="Type your address"
                                rows="3"
                                required
                            ></textarea>
                        </Form.Group>
                        <button
                            type="submit"
                            className="btn-custom w-100 mt-3 mb-5"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Purchase;
