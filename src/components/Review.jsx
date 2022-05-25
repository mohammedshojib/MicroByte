import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Review = () => {
  const [user, loading, errorHook] = useAuthState(auth);
  const navigate = useNavigate();

  const HandleReview = (event) => {
    event.preventDefault();
    const Review = {
      email: user.email,
      title: event.target.title.value,
      review: event.target.review.value,
      star: event.target.star.value,
    };
    const url = "http://localhost:5000/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Review Added succsessfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div class="hero ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div class="card-body">
            <form action="" onSubmit={HandleReview}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="title"
                  class="input input-bordered"
                  name="title"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Review</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Review"
                  class="input input-bordered"
                  name="review"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Stars</span>
                </label>
                <select
                  name="star"
                  class="select select-bordered w-full max-w-xs"
                >
                  <option selected>1 Star</option>
                  <option>2 Star</option>
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>

              <div class="form-control mt-6">
                <input type="submit" className="btn" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
