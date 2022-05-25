import React from "react";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";

const AddProduct = () => {
    const handleProduct = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const image = event.target.image.value;
        const url = `https://calm-harbor-28456.herokuapp.com/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({
                name,
                price,
                quantity,
                description,
                image,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                toast.success("Product added successfully");
                event.target.reset();
            });
    };
    return (
        <div className="addproduct mx-auto">
            <h2 className="text-center text-info pb-3">Add a Product</h2>
            <Form onSubmit={handleProduct}>
                <Form.Group className="mb-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Product name will be here"
                        required
                    />
                </Form.Group>
                <div className="row">
                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="$ pre ps"
                                required
                            />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="mb-3">
                            <Form.Label>Product Quantity</Form.Label>
                            <Form.Control
                                type="text"
                                name="quantity"
                                placeholder="Enter quantity in ps"
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Add a description</Form.Label>
                    <textarea
                        className="form-control"
                        rows="5"
                        type="text"
                        name="description"
                        placeholder="Write somthing"
                        required
                    />
                </Form.Group>
                <div className="row">
                    <div className="col-md-12">
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="Image url"
                                required
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="mt-5">
                    <button className="btn-custom w-100" type="submit">
                        Add Product
                    </button>
                </div>
            </Form>
        </div>
    );
};

export default AddProduct;
