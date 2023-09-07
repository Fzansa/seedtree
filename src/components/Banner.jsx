import React from "react";
import avatar2 from "../img/Ellipse 2.svg";

const Banner = () => {
  return (
    <>
      {" "}
      <hr />
      <div class="row bannerlike d-flex align-items-center justify-content-center my-5">
        <div class="col-12 text-center px-md-5 py-5">
          <p>
            "The customized package from Seedtree was exactly what I needed to
            bring my vision to life. I'm thrilled with my new home design!
          </p>
        </div>
        <div class="col-12">
          <div class="row mb-3">
            <div class="col-6 d-flex justify-content-end">
              <img src={avatar2} width="60px" alt="Photo" class="" />
            </div>
            <div class="col-6 d-flex align-items-center pt-3">
              <p>Alessio Belcastro</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
