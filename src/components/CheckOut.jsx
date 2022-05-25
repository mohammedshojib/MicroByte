import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { productContext } from "../App";

const CheckOut = () => {
  const [products, setProducts] = useContext(productContext);
  const { id } = useParams();
  const product = products.find((product) => product._id == id);
  const [user, loading, errorHook] = useAuthState(auth);
  const navigate = useNavigate();
  const [disabledButton, setDisabledButtom] = useState(false);
  const [quantity, setQuantity] = useState(product.minquanitity);

  const HandleCheckout = (event) => {
    event.preventDefault();
    const CheckOut = {
      email: user.email,
      pricing: product.pricing,
      quantity: quantity,
      total: quantity * product.minquanitity,
      address: event.target.address.value,
      phone: event.target.phnumber.value,
      productName: product.name,
    };
    const url = "http://localhost:5000/checkout";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(CheckOut),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Order Placed succsessfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const correctQuantity = (event) => {
    const quantity = Number(event.target.value);
    setQuantity(quantity);

    if (quantity >= product.minquanitity && quantity <= product.quanitity) {
      setDisabledButtom(false);
    } else {
      setDisabledButtom(true);
    }
  };

  return (
    <div class="hero min-h-screen bg-base-200 mt-10">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">CheckOut</h1>
          <p class="py-6">
            Product Name: {product.name} <br />
            Price: ${product.pricing} <br /> Min Order:{product.minquanitity}{" "}
            <br />
            Max/available stock: {product.quanitity}
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form action="" onSubmit={HandleCheckout}>
            <div class="card-body">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                  value={user?.email}
                  disabled
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="address"
                  class="input input-bordered"
                  name="address"
                  required
                />
              </div>
              <div class="form-control">
                <input
                  type="number"
                  placeholder="+88017XXXXXXX"
                  class="input input-bordered"
                  name="phnumber"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity</span>
                </label>
                <input
                  type="number"
                  class="input input-bordered"
                  name="quantity"
                  onChange={correctQuantity}
                  defaultValue={product.minquanitity}
                />
                <p className="text-bold text-red-500 pt-2">
                  {quantity < product.minquanitity ||
                  quantity > product.quanitity
                    ? `You have to order Min ${product.minquanitity} Max ${product.quanitity}`
                    : ""}
                </p>
              </div>
              <h5 className="text-2xl">
                Total Cost: {quantity * product.pricing}
              </h5>
              <div class="form-control mt-6">
                <button class="btn btn-primary" disabled={disabledButton}>
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
