import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ myorder }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate();

    const { _id, totalPrice, name, email } = myorder;

    useEffect(() => {
        fetch("https://x-parts.onrender.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ totalPrice }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            setSuccess("Congrats! Your payment is completed.");

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`https://x-parts.onrender.com/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    navigate("/dashboard");
                    toast.success("Payment Successfully");
                });
        }
    };
    return (
        <div className="p-2">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-success btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret || success}
                >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success && (
                <div className="text-success">
                    <p>{success} </p>
                    <p>
                        <span className="text-success fw-bold">
                            Payment successfully done.
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
