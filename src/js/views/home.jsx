import React from "react";
import "../../styles/home.css";
import { FilmsCards } from "../component/filmsCard";

export const Home = () => (
  <div className="text-center mt-5">
      <div className="tittle d-flex justify-content-center">
        <h1 className="sub-tittle-views"> Welcome to Star Wars blog</h1>
      </div>
    <p>
      <img
        style={{ background: "white" }}
        src="https://graffica.info/wp-content/uploads/2016/08/logo-actual-star-wars.jpg"
      ></img>
    </p>
  </div>
);

{
  /*        <Link to="/">
          <img src="https://img.icons8.com/ios/50/000000/star-wars.png"></img>
        </Link> */
}
