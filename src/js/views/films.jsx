import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import { EditableCards } from "../component/editableCards";


import "../../styles/demo.css";

export const Films = () => {
  const { store, actions } = useContext(Context); //Al traer en el store del flux la información, la podemos usar en cualquier componente que importemos el context

  useEffect(()=>{ 
  actions.getAllElements("films");
  },[])

  return (
    <div className="container">
      <h1>Films</h1>
      <div className="container">
        <div className="row">
        {store.films.map((film,index) => (
          <div className="col col-md-4" key={index}>
            <EditableCards
            id = {film.uid}
            type  = "films"
            title = {film.properties.title}
            text = {film.properties.director}
            text2 = {film.properties.producer}
            img = {`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
            />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

{/* <ul>
{store.films.map((film,index) => (
  <li key={index}>{film.properties.title}</li> // aquí varía porque la data de la api de films es distinta a la de planets
))}
</ul>
 */} // Versión anterior del mapeo sin la card