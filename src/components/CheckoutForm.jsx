import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { total, email } = orders;
  const totalAmount = Number(total);

  useEffect(() => {
    const paymentColect = async () => {
      const data = await axios.post(
        "https://microbyte.herokuapp.com/payment/create",
        {
          total: totalAmount,
        }
      );
      setClientSecret(data?.data.clientSecret);
    };
    paymentColect();
    console.log(clientSecret);
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
