import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Este hook nos permite capturar los parametros que se pasan a la url

import { Context } from "../store/appContext";

import "../../styles/index.css";
import { CardDetail } from "../component/CardDetail";

export const PlanetsDetail = () => {
	const { store, actions } = useContext(Context);
  const [data, SetData] = useState ({})
	const { planetid } = useParams() //Captura los parámetros pasados a la url que tiene planetid como ID

  useEffect(()=>{
    actions
    .getAllDetails("planets", planetid) //se ejecuta la función del flux la cual trae la información de los parametros vinculados aquí
    .then(reply=>SetData(reply)) // espera que se cumpla la promesa y luego guarda la data dentro del estado useState
  },[])

	return (
		<div className="container">
			<h1>Planets</h1>
			<h2>{data.name} Planet</h2>
			<CardDetail 
			type = "planets"
			img = {`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
			title = {<h3>{data.name}</h3>}
			text = {<div>
        <h5>Properties planet</h5>
          <ul>
          <li>Diameter: {data.diameter}</li>
          <li>Gravity: {data.gravity}</li>
          <li>Population: {data.population}</li>
          <li>Terrain: {data.terrain}</li>
          <li>Climate: {data.climate}</li>
          </ul>
      </div>}
      buttonBack = {`/planets`}
			textButtonBack = "Back"
      buttonInfo = {`https://www.swapi.tech/api/planets/${planetid}`}
			textButtonInfo = "More details here"
			/>
		</div>
	);
};
