import React from "react";
import { FaRegStar } from "react-icons/fa";

const Reviews = ({ review }) => {
  return (
    <div class="card w-90 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{review.title}</h2>
        <p>{review.review}</p>
        <p>
          <span className="flex items-center">
            <FaRegStar /> <span> </span>
            {review.star}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Reviews;
