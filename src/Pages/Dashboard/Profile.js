import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const Profile = () => {
    const [user] = useAuthState(auth);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/user/${email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setInfo(data));
    }, [user,info]);
    const hanldeProfile = (event) => {
        event.preventDefault();
        const email = user.email;
        const name = user.displayName;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const designation = event.target.designation.value;
        const url = `http://localhost:5000/user/${email}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name,
                phone,
                address,
                designation,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);

                toast.success("Information update successfully");
                event.target.reset();
            });
    };
    return (
        <div className="container">
            <h2 className="my-5 text-center">
                Pro<span style={{ color: "#008037" }}>file</span>
            </h2>
            <div class="row gutters-sm align-items-center">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center p-5">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    alt="Admin"
                                    class="rounded-circle"
                                    width="150"
                                />
                                <div class="mt-3">
                                    <h4>{user.displayName}</h4>
                                    <p class="text-secondary mb-1">
                                        {info.designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row mt-3">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Full Name</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {user.displayName}
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Email</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    {user.email}
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Phone</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <p>{info.phone}</p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">Address</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">
                                    <p>{ info.address }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="or-container">
                <div className="line-separator"></div>
                <div className="or-label">and</div>
                <div className="line-separator"></div>
            </div>
            <h2 className="text-center section-title mb-5">
                <span style={{ color: "#008037" }}>Update</span> Information
            </h2>

            <Form className="my-5" onSubmit={hanldeProfile}>
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <Form.Label className="h5">Phone Number</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="phone"
                                required
                            />
                        </Form.Group>

                        <Form.Label className="h5">Designation</Form.Label>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="designation"
                                required
                            />
                        </Form.Group>

                        <Form.Label className="h5">Address</Form.Label>
                        <Form.Group className="mb-3">
                            <textarea
                                class="form-control"
                                name="address"
                                rows="3"
                                required
                            ></textarea>
                        </Form.Group>

                        <div class="row">
                            <div class="col-sm-12 mb-3 text-center">
                                <button class="btn-custom">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Profile;
