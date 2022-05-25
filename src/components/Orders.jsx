import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`https://microbyte.herokuapp.com/orders`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  const deleteOrder = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://microbyte.herokuapp.com/orderd/${id}`;
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
            <th>Email</th>
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
              <td>{order.email}</td>
              <td>
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="btn btn-xs"
                >
                  Delete Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
