import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Este hook nos permite capturar los parametros que se pasan a la url

import { Context } from "../store/appContext";
import "../../styles/index.css";

import { CardDetail } from "../component/CardDetail";

export const SpeciesDetail = () => {
	const { store, actions } = useContext(Context);
  const [data, SetData] = useState ({})
	const { specieid } = useParams() //Captura los parámetros pasados a la url que tiene planetid como ID

  useEffect(()=>{
    actions
    .getAllDetails("species", specieid)
    .then(reply=>SetData(reply))
  },[specieid])

	return (
		<div className="container">
      <div className="tittle d-flex justify-content-center">
        <h1 className="sub-tittle-views">{data.name}</h1>
      </div>
			<CardDetail 
			type = "species"
			img = {`https://starwars-visualguide.com/assets/img/species/${specieid}.jpg`}
			text = {<div>
        <h5>Species features</h5>
          <ul>
            <li>Classification: {data.classification}</li>
            <li>Designation: {data.designation}</li>
            <li>Language: {data.language}</li>
            <li>Skin colors: {data.skin_colors}</li>
            <li>Eye colors: {data.eye_colors}</li>
            <li>Average lifespan: {data.average_lifespan}</li>
          </ul>
      </div>}
      buttonBack = {`/species`}
			textButtonBack = "Back"
      buttonInfo = {`/people/${specieid}`}
			textButtonInfo = "More details here"
			/>
		</div>
	);
};
