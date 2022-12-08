import React from "react";
import { Link } from "react-router-dom";

export const FilmsCards = (props) => {
  return (
    <div className="film-card-container d-flex justify-content-center">
      <div className="film-text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      <Link to={`/${props.type}/${props.id}`} className="btn btn-warning">
          More details here
      </Link>
        <div className="small-text"><small className="small-text">FILMS</small></div>
      </div>
      <div className="film-img">
        <img src={props.img} />
      </div>
    </div>
  )
}