import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/images.jpg";
import "../styles/notFound.css";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h4>404 Not Found</h4>
      <img
        src="https://cloud.mongodb.com/static/images/sadface.gif"
        alt="not-found"
      />
      <br />
      <a className="btn" onClick={() => navigate("/")}>
        <FaArrowLeft /> Go Back To Home
      </a>
    </div>
  );
};

export default Notfound;
