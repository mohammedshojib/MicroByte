import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../App";
import HeroIMG from "../assets/heroIll.jpg";
import ProductCard from "./ProductCard";
import Reviews from "./Reviews";

const Home = () => {
  const [products, setProducts] = useContext(productContext);
  const [myreviews, setReviews] = useState([]);
  // <<====REVIEWS====>>
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <>
      <div class="hero lg:min-h-screen mt-10 lg:mt-0 text-center lg:text-left  bg-accent">
        <div class="hero-content mt-10 flex-col lg:flex-row-reverse">
          <img src={HeroIMG} class="max-w-sm" />
          <div>
            <h1 class="text-2xl lg:text-5xl font-bold text-text-c">
              Expert Technical Support High-Performance Machines Profitable
              Solutions
            </h1>
            <p class="py-6">Custom Solutions to Suit Your Need</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="text-center font-bold mt-10">
        <h2 className="text-3xl">Industries We Serve</h2>
        <p>
          Manufacturer's high end manufacturing services are a perfect
          complement
          <br /> to today's high tech industries.
        </p>
        <div className="grid grid-cols-3 lg:grid-rows-3 mt-10">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 m-auto lg:grid-cols-3 mb-10">
        {products.map((pd) => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
      <div className="w-4/5 m-auto">
        <h2 className="text-center text-4xl">All Revies</h2>
        <div className="grid gap-5 grid-cols-1 m-auto lg:grid-cols-3 mb-10">
          {myreviews.map((review) => (
            <Reviews key={review._id} review={review} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
