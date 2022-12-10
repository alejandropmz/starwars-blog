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
    .getAllDetails("starships", starshipid) //se ejecuta la función del flux la cual trae la información de los parametros vinculados aquí
    .then(reply=>SetData(reply)) // espera que se cumpla la promesa y luego guarda la data dentro del estado useState
  },[starshipid])

	return (
		<div className="container">
      <div className="tittle d-flex justify-content-center">
        <h1 className="sub-tittle-views">{data.model}</h1>
      </div>
			<CardDetail 
			type = "starships"
			img = {`https://starwars-visualguide.com/assets/img/starships/${starshipid}.jpg`}
			title = {<h3>{data.model}</h3>}
			text = {<div>
        <h5>Starships features</h5>
          <ul>
            <li>Model: {data.model}</li>
            <li>Manufacturer: {data.manufacturer}</li>
            <li>Length: {data.length}</li>
            <li>Cargo capacity: {data.cargo_capacity}</li>
            <li>Consumables: {data.consumables}</li>
            <li>Max atmosphering speed: {data.max_atmosphering_speed}</li>
          </ul>
      </div>}
      buttonBack = {`/starships`}
			textButtonBack = "Back"
      buttonInfo = {data.url}
			textButtonInfo = "More details here"
			/>
		</div>
	);
};
