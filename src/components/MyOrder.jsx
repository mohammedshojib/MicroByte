import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { productContext } from "../App";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user, loading, errorHook] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;

    const myItems = async () => {
      const url = `http://localhost:5000/my-order?email=${email}`;
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
  }, [user]);
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Address</th>
            <th>Total</th>
            <th>Quantity</th>
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.productName}</td>
              <td>{order.address}</td>
              <td>{order.total}</td>
              <td>{order.quantity}</td>
              <td>
                {order.total && (
                  <Link
                    to={`/dashboard/payment/${order._id}`}
                    className="btn btn-xs"
                  >
                    Pay
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
