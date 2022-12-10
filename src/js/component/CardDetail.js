import React from "react";
import { useNavigate, Link } from "react-router-dom"; // El componente useNavigate nos sirve para poder regresar a la página anterior y nos devuelva a donde estabamos
import "../../styles/index.css";

/*
type
img
title
text
smallText
buttonInfo
buttonBack
textbuttonBack
*/

const takeLoadError = (e) => {
  console.log(`Error in load ${e.target.src}`)
  e.target.src = "https://cdn.dribbble.com/users/490588/screenshots/3329226/star_wars_404.png"
}

export const CardDetail = (props) => {
  return (
    <div className="card mb-3 card-detail">
      <div className="row g-0 d-flex align-items-center">
        <div className="col-md-4 d-flex align-items-center card-body-left">
          <img
            style={{ height: "100%" }}
            src={props.img}
            className="img-fluid rounded-start"
            alt="..."
            onError={takeLoadError}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body card-body-right">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <p className="card-text">{props.text2}</p>
            <p className="card-text">
              <small className="text-muted">{props.smallText}</small>
            </p>
            <div className="d-flex justify-content-end">
              <Link to={-1} className="btn btn-light"> {/* el -1 es gracias al useNavigate para regresar a la página anterior */}
                {props.textButtonBack}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
