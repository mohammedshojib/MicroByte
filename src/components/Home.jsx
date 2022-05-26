import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { productContext } from "../App";
import HeroIMG from "../assets/heroIll.jpg";
import About from "./About";
import FootBar from "./FootBar";
import ProductCard from "./ProductCard";
import Reviews from "./Reviews";
import SpBar from "./SpBar";

const Home = () => {
  const [products, setProducts] = useContext(productContext);
  // <<====REVIEWS====>>
  const { isLoading, error, data } = useQuery("review", () =>
    axios.get("https://microbyte.herokuapp.com/reviews")
  );

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
        <div className=" mt-10 my-10">
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Costomer</div>
              <div class="stat-value">31K+</div>
              <div class="stat-desc">Jan 1st 21 - Jan 1st 22</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">New Users</div>
              <div class="stat-value">4,200</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">New Registers</div>
              <div class="stat-value">1,200</div>
              <div class="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 m-auto lg:grid-cols-3 mb-10">
        {products.map((pd) => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
      <SpBar />
      <div className="w-4/5 m-auto">
        <h2 className="text-center text-4xl">All Revies</h2>
        <div className="grid gap-5 grid-cols-1 m-auto lg:grid-cols-3 mb-10">
          {data?.data.map((review) => (
            <Reviews key={review._id} review={review} />
          ))}
        </div>
      </div>{" "}
      <FootBar />
    </>
  );
};

export default Home;
