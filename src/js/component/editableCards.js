import React, { useState } from "react";
import { Link } from "react-router-dom";

import '../../styles/index.css'

export const EditableCards = (props) => {
  /* props:
  id
  type => es el tipo de elemento que se carga, ej. planets, film, people 
  title
  text
  img
  */
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt={props.type.toUpperCase()+" "+props.title}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
        <p className="card-text">
          {props.text2}
        </p>
        {/* La concatenación de type y id nos genera un enlace entre el componente (type) y su id (id) */}
        <Link to={`/${props.type}/${props.id}`} className="btn btn-warning">
          More details here
        </Link>
      </div>
    </div>
  );
};
