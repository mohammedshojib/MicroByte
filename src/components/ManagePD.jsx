import React, { useContext } from "react";
import { toast } from "react-toastify";
import { productContext } from "../App";

const ManagePD = () => {
  const [products, setProducts] = useContext(productContext);

  const deletePD = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://microbyte.herokuapp.com/productd/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((pd) => pd._id !== id);
          setProducts(remaining);
          toast.success("Peoduct deleted succsessfully");
        });
    }
  };

  return (
    <table class="table w-full">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Min quanitity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.quanitity}</td>
            <td>{product.minquanitity}</td>
            <td>{product.pricing}</td>
            <td>
              <button
                className="btn btn-sm"
                onClick={() => deletePD(product._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManagePD;
