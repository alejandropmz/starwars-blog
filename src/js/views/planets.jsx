import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Planets = () => {
  const { store, actions } = useContext(Context); //Al traer en el store del flux la información, la podemos usar en cualquier componente que importemos el context

  return (
    <div className="container">
      <h1>Planets</h1>
      {/* a este boton se le pasa el evento onClick el cual acciona la función del flux llamada getPlanets */}
      <button className="btn btn-info" onClick={() => actions.getPlanets()}>
        Load planets
      </button>
      <ul>
        {store.planets.map((planet) => (
          <li>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};
