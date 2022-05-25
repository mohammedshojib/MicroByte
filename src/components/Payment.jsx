import axios from "axios";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L304aKiq1Hd4Iaf5onIBnDvQcDH6m1C7dnTlzulXFmNodSxx2GfDRvxquysd3L81Ah48j3pXNqPgArN0e56hyN800kTKrRVk7"
);

const Payment = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/payment/${id}`;
    const myItems = async () => {
      const { data } = await axios
        .get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accesToken")}`,
          },
        })
        .catch(function (error) {});
      setOrders(data);
    };

    myItems();
  }, []);
  console.log(orders);

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">{orders?.productName}</h1>
          <p class="py-6">
            Total Pay: ${orders.total} <br />
            Product Quantity: {orders.quantity}
          </p>
        </div>
        <div class="card flex-shrink-0 w-full w-md shadow-2xl bg-base-100">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm orders={orders} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
