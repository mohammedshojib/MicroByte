import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../App";

const ProductDetails = () => {
  const [products, setProducts] = useContext(productContext);
  const { id } = useParams();
  const product = products.find((product) => product._id == id);
  const navigate = useNavigate();
  return (
    <div className="w-4/5 m-auto">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={product.img} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">{product.name}</h1>
            <h2 class="text-2xl font-bold text-primary mt-2">
              ${product.pricing}
            </h2>
            <p class="py-6">{product.description}</p>

            <p class=" ">Quantity: {product.quanitity}</p>
            <p class=" ">Min Order: {product.minquanitity}</p>
            <button
              class="btn btn-primary"
              onClick={() => navigate(`/checkout/${product._id}`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
