import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";

export const Species = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllElements("species");
  }, []);

  return (
    <div className="container">
      <h1>Species</h1>
      <div className="container">
        <div className="row">
          {store.species.map((specie) => (
            <div key={specie.uid} className="col col-md-4">
              <EditableCards
                id={specie.uid}
                type="species"
                title={specie.name}
                text={`specie number ${specie.uid}`}
                img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
      <Pagination 
        pages={4} 
        currentPage={1} 
        type="vehicles" 
        />
    </div>
  );
};
