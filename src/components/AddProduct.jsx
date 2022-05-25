import React from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const addProduct = (event) => {
    event.preventDefault();

    const product = {
      name: event.target.name.value,
      description: event.target.description.value,
      pricing: event.target.pricing.value,
      minquanitity: event.target.minquanitity.value,
      quanitity: event.target.quanitity.value,
      img: event.target.img.value,
    };
    //<===== UPLOAD PRODUCT ====>
    const url = "http://localhost:5000/add-products";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Todo added succsessfully");
      });
  };

  return (
    <div className="card w-96 m-auto bg-base-100 shadow-xl">
      <h2 className="text-bold text-xl mt-5 uppercase">Add Product</h2>
      <form action="" onSubmit={addProduct}>
        <div class="card-body">
          <div class="form-control">
            <input
              type="text"
              placeholder="Product Name"
              class="input input-bordered"
              name="name"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Description"
              class="input input-bordered"
              name="description"
            />
          </div>
          <div class="form-control">
            <input
              type="number"
              placeholder="price"
              class="input input-bordered"
              name="pricing"
            />
          </div>
          <div class="form-control">
            <input
              type="number"
              placeholder="Min Order"
              class="input input-bordered"
              name="minquanitity"
            />
          </div>
          <div class="form-control">
            <input
              type="number"
              placeholder="Max/Total Quantity"
              class="input input-bordered"
              name="quanitity"
            />
          </div>
          <div class="form-control">
            <input
              type="text"
              placeholder="Product Image Link"
              class="input input-bordered"
              name="img"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
