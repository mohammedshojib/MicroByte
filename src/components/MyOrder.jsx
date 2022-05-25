import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

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

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/deleteo/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((pd) => pd._id !== id);
          setOrders(remaining);
          toast.success("Order canceled succsessfully");
        });
    }
  };
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
            <th>Pay</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
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
              <td>
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="btn btn-xs"
                >
                  Canceled Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
