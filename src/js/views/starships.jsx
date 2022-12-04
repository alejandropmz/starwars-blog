import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";

export const Starships = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=> actions.getAllElements("starships"),[])

	return (
		<div className="container">
			<h1>Starships</h1>
      <div className="container">
        <div className="row">
          {store.starships.map((starship)=>(
            <div key={starship.uid} className="col col-md-4">
              <EditableCards 
            id = {starship.uid}
            type = "starship"
            title = {starship.name}
            text = ""
            img = {`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
            />
            </div>
          ))}
        </div>
      </div>
		</div>
	);
};
