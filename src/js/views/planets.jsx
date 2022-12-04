import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";

export const Planets = () => {
  const { store, actions } = useContext(Context); //Al traer en el store del flux la información, la podemos usar en cualquier componente que importemos el context

  useEffect(()=> actions.getAllElements("planets"),[])
  

  return (
    <div className="container">
      <h1>Planets</h1>
      <div className="container">
        <div className="row">
          {store.planets.map((planet)=>(
            <div key={planet.uid} className="col col-md-4">
              <EditableCards 
                id = {planet.uid}
                type = "planets"
                title = {planet.name}
                text = ""
                img = {`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* a este boton se le pasa el evento onClick el cual acciona la función del flux llamada getPlanets */}

    </div>
  );
};
