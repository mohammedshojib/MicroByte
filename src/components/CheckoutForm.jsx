import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { total, email } = orders;

  useEffect(() => {
    const paymentColect = async () => {
      const { data } = await axios.post(
        "http://localhost:5000/payment/create",
        { total }
      );
    };
    paymentColect();
  }, []);

  return (
    <div>
      <form>
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
          type="submit"
          className="btn btn-primary mt-5"
          disabled={!stripe}
        >
          Pay
        </button>
        {/* <p className="text-error">{cardError}</p>
        <p className="text-error">{success}</p> */}
      </form>
    </div>
  );
};

export default CheckoutForm;
