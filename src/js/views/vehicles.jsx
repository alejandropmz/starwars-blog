import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=> actions.getAllElements("vehicles"),[])

	return (
		<div className="container">
			<h1>Vehicles</h1>
      <div className="container">
        <div className="row">
        {store.vehicles.map((vehicle)=>(
          <div className="col col-md-4">
            <EditableCards 
              id = {vehicle.uid}
              type  = "vehicles"
              title = ""
              text = {vehicle.name}
              img = {`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
            />
          </div>
        ))}
        </div>
      </div>
		</div>

	);
};
// some
// smoe
