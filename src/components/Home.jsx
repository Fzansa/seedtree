import React from "react";
import img from "../img/image 1.png";
import avatar from "../img/Ellipse 1.svg";

const Home = () => {
  return (
    <div class="row">
      <div class="col-md-6 my-5">
        <h1 class="main-heading">Design your dream home with Seedtree.</h1>
        <p class="hero-para">
          Custom interior design packages for single rooms or entire homes with
          expert consultations.
        </p>
        <button class="button my-4">Book a call</button>
        <div class="row">
          <div class="col-2 d-flex justify-content-center align-items-center">
            <img src={avatar} alt="first avatar" />
          </div>
          <div class="col-9">
            <h6 class="">
              “Seedtree made my home renovation project enjoyable and
              stress-free. I highly recommend their interior design services to
              anyone looking for an expert design plan.” David Greene
            </h6>
          </div>
        </div>
      </div>
      <div class="col-md-6 my-5">
        <div class="img">
          <img src={img} alt="Main Image" width="100%" height="500px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
