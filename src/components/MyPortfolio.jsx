import React from "react";

const MyPortfolio = () => {
  return (
    <>
      <div className=" min-h-screen mt-16">
        <div class="card w-96 bg-base-100 shadow-xl m-auto">
          <div class="card-body">
            <h2 class="card-title">Nmae: Mohammed shojib</h2>
            <p>Email: asmdshojib11@gmail.com</p>
            <p>Education: HSC 2022 Chaddgram Gov college</p>
            <p>
              Tech: ReactJS, Mern, Javascript, tailwind, boostrap, Wordpress
            </p>
            <a href="https://car-hunter-11431.web.app/">
              Car Hunter <button className="btn btn-sm">Live</button>
            </a>
            <a href="https://todo-by-shojib.web.app/">
              My Special todo <button className="btn btn-sm">Live</button>
            </a>
            <a href="https://zipline-trainee.web.app/">
              Zipline trainnee <button className="btn btn-sm">Live</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
