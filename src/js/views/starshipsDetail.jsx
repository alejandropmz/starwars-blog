import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Este hook nos permite capturar los parametros que se pasan a la url

import { Context } from "../store/appContext";
import "../../styles/index.css";

import { CardDetail } from "../component/CardDetail";

export const StarshipsDetail = () => {
	const { store, actions } = useContext(Context);
  const [data, SetData] = useState ({})
	const { starshipid } = useParams() //Captura los parámetros pasados a la url que tiene planetid como ID

  useEffect(()=>{
    actions
    .getAllDetails("starships", starshipid)
    .then(reply=>SetData(reply))
  },[])

	return (
		<div className="container">
			<h1>Starships</h1>
			<h2>{data.starship_class}</h2>
			<CardDetail 
			type = "starships"
			img = {`https://starwars-visualguide.com/assets/img/starships/${starshipid}.jpg`}
			title = {<h3>{data.model}</h3>}
			text = {<div>
        <h5>Starships features</h5>
          <ul>
            <li>Manufacturer: {data.manufacturer}</li>
            <li>Cost: {data.cost_in_credits}</li>
            <li>Lenght colors: {data.lenght}</li>
            <li>Passengers: {data.passengers}</li>
            <li>Crew: {data.crew}</li>
          </ul>
      </div>}
      buttonBack = {`/starships`}
			textButtonBack = "Back"
      buttonInfo = {`/starships/${starshipid}`}
			textButtonInfo = "More details here"
			/>
		</div>
	);
};
