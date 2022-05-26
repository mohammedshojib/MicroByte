import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();

  const { total, email, _id } = orders;
  const id = _id;

  useEffect(() => {
    fetch("http://localhost:5000/create-payme/intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [total]);
  const successed = (event) => {
    event.preventDefault();
    setSuccess("pay successfully");

    const pay = true;
    const url = `https://microbyte.herokuapp.com/pay/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ pay }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Pay succsessfully");
      });
    navigate("/dashboard");
  };

  return (
    <div>
      <form onSubmit={successed}>
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
        <button type="submit" className="btn btn-primary mt-5">
          Pay
        </button>
        <p className="text-primary">{success}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
