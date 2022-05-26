import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);
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
          toast.success("Order Deleted succsessfully");
        });
    }
  };

  const makePaid = (id) => {
    const pay = true;
    const url = `http://localhost:5000/pay/${id}`;
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
  };
  const makeSipped = (id) => {
    const shipped = true;
    const url = `http://localhost:5000/shipped/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ shipped }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Shipped succsessfully");
      });
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
            <th>Delete</th>
            <th>Pay</th>
            <th>Paid ?</th>
            <th>Shipped</th>
            <th>Shipped</th>
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
              <td>
                {order.pay ? (
                  "paid"
                ) : (
                  <button
                    onClick={() => makePaid(order._id)}
                    className="btn btn-xs"
                  >
                    Paid
                  </button>
                )}
              </td>
              <td>{order.pay ? "paid" : "non paid"}</td>
              <td>
                {!order?.shipped && (
                  <button
                    onClick={() => makeSipped(order._id)}
                    className="btn btn-xs"
                  >
                    Shipped
                  </button>
                )}
              </td>
              <td>{order?.shipped ? "shipped" : "panding"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
