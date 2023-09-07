import React from "react";
import img2 from '../img/image 2.png'
import img3 from '../img/image 3.png'
import img4 from '../img/image 4.png'

const Services = () => {
  return (
    <>
      <hr />

      <div class="row d-flex align-items-center">
        <div class="col-md-6 my-5">
          <div class="img">
            <img src={img2} alt="" width="100%" height="500px" />
          </div>
        </div>

        <div class="col-md-6 my-5">
          <h1 class="main-heading fs-1">Expert consultations.</h1>
          <p class="hero-para">
            Our experienced interior designers will work with you to create a
            personalized design plan tailored to your unique needs and style.
          </p>
        </div>
      </div>

      <div class="row d-flex align-items-center">
        <div class="col-md-6 my-5">
          <h1 class="main-heading fs-1">Customized packages.</h1>
          <p class="hero-para">
            Choose from a range of custom packages that fit your needs, from
            single room design services to full house design plans.
          </p>
        </div>

        <div class="col-md-6 my-5">
          <div class="img">
            <img src={img3} alt="" width="100%" height="500px" />
          </div>
        </div>
      </div>

      <div class="row d-flex align-items-center">
        <div class="col-md-6 my-5">
          <div class="img">
            <img src={img4} alt="" width="100%" height="500px" />
          </div>
        </div>

        <div class="col-md-6 my-5">
          <h1 class="main-heading fs-1">Online platform.</h1>
          <p class="hero-para">
            Take advantage of our online platform to collaborate remotely with
            your designer, share ideas and get real-time feedback on your design
            project.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
