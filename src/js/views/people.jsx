import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";

export const People = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {actions.getAllElements("people")}, []);

  return (
    <div className="container">
      <h1>People</h1>
      <div className="container">
        <div className="row">
          {store.people.map((person, index) => (
            <div className="col col-md-4">
				<EditableCards 
				  id = {person.uid}
				  type = "people"
				  title = {person.name}
				  text = ""
				  img = {`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
				/>
			</div>
          ))}
        </div>
      </div>
    </div>
  );
};
