import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Card } from "react-bootstrap";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L2kPeGhSvDcXypEJNFD3UGHLqnTqsiIlviYGH3LolxSTlgTmf4crNnlNvbMYSLPQCFgfkssOWXvYihoMuMbhxik00AGOy4MuD"
);
const Payment = () => {
    const { id } = useParams();
    const url = `https://calm-harbor-28456.herokuapp.com/myorder/${id}`;
    const { data: myorder, isLoading } = useQuery(["myorder", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="d-flex align-items-center justify-content-around my-5">
            <Card className="p-3" style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{myorder.product}</Card.Title>
                    <Card.Subtitle className="mb-2 text-info">
                        {myorder.name}
                    </Card.Subtitle>
                    <Card.Text>
                        <p>Quantity : {myorder.quantity}</p>
                        <p>Price : {myorder.totalPrice}</p>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: "20rem" }}>
                <Card.Body>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myorder={myorder} />
                    </Elements>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Payment;
