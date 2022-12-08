import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Este hook nos permite capturar los parametros que se pasan a la url

import { Context } from "../store/appContext";
import "../../styles/index.css";

import { CardDetail } from "../component/CardDetail";

export const PeopleDetail = () => {
	const { store, actions } = useContext(Context);
  const [data, SetData] = useState ({})
	const { peopleid } = useParams() //Captura los parámetros pasados a la url que tiene planetid como ID

  useEffect(()=>{
    actions
    .getAllDetails("people", peopleid)
    .then(reply=>SetData(reply))
  },[])

	return (
		<div className="container">
			<h1>People</h1>
			<h2>{data.name}</h2>
			<CardDetail 
			type = "people"
			img = {`https://starwars-visualguide.com/assets/img/characters/${peopleid}.jpg`}
			title = {<h3>{data.name}</h3>}
			text = {<div>
        <h5>People features</h5>
          <ul>
            <li>Name: {data.name}</li>
            <li>Gender: {data.gender}</li>
            <li>Height: {data.height}</li>
            <li>Skin color: {data.skin_color}</li>
            <li>Eye color: {data.eye_color}</li>
            <li>Birth year: {data.birth_year}</li>
          </ul>
      </div>}
      buttonBack = {`/people`}
			textButtonBack = "Back"
      buttonInfo = {`/people/${peopleid}`}
			textButtonInfo = "More details here"
			/>
		</div>
	);
};
