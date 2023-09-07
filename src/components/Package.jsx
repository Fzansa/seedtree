import React from "react";
import screen1 from "../img/Screenshot 2023-04-26 173934-1.png";
import screen2 from "../img/Screenshot 2023-04-26 173916-2.png";
import avatar3 from "../img/Ellipse 3.svg";
import avatar4 from "../img/Ellipse 4.svg";
import avatar5 from "../img/Ellipse 5.svg";
import avatar6 from "../img/Ellipse 6.svg";
import avatar7 from "../img/Ellipse 7.svg";
import avatar8 from "../img/Ellipse 8.svg";
import avatar10 from "../img/Ellipse 10.svg";
import avatar11 from "../img/Ellipse 11.svg";

const Package = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-4 my-5">
          <p class="px-md-5 package text-center fs-3 py-3">Plaining package</p>
          <img src={screen1} width="100%" alt="" />
        </div>

        <div class="col-md-4 my-5">
          <p class="px-md-5 package text-center fs-3 py-3">Decor package</p>
          <img src={screen2} width="100%" alt="" />
        </div>

        <div class="col-md-4 my-5">
          <p class="px-md-5 package text-center fs-3 py-3">Execution package</p>
          <img src={screen1} width="100%" alt="" />
        </div>
      </div>
      <hr />
      <div class="row lastContainer">
        <div class="flex-container">
          <div class="flex-items">
            <img src={avatar3} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar4} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar5} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar6} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar7} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar8} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar10} alt="" />
          </div>
          <div class="flex-items">
            <img src={avatar11} alt="" />
          </div>
        </div>
        <div class="col-12">
          <h1 class="lastHeading">Start designing your dream home today.</h1>
        </div>
        <div class="col d-flex justify-content-center">
          <button class="button1 my-4">Book a call</button>
        </div>
      </div>
    </>
  );
};

export default Package;
