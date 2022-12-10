import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Este hook nos permite capturar los parametros que se pasan a la url

import { Context } from "../store/appContext";
import "../../styles/index.css";

import { CardDetail } from "../component/CardDetail";

export const FilmsDetail = () => {
	const { store, actions } = useContext(Context);
  const [data, SetData] = useState ({})
	const { filmid } = useParams() //Captura los parámetros pasados a la url que tiene planetid como ID

  useEffect(()=>{
    actions
    .getAllDetails("films", filmid)
    .then(reply=>SetData(reply))
  },[filmid])

	return (
		<div className="container">
      <div className="tittle d-flex justify-content-center">
        <h1 className="sub-tittle-views">{data.title} Film</h1>
      </div>
			<CardDetail 
			type = "films"
			img = {`https://starwars-visualguide.com/assets/img/films/${filmid}.jpg`}
			text = {<div>
        <h5>Properties Film</h5>
          <ul>
            <li>Producer: {data.producer}</li>
            <li>Director: {data.director}</li>
            <li>Title: {data.title}</li>
            <li>Release date: {data.release_date}</li>
            <li>Episode id: {data.episode_id}</li>
          </ul>
      </div>}
      buttonBack = {`/films`}
			textButtonBack = "Back"
      buttonInfo = {`https://www.swapi.tech/api/films/${filmid}`}
			textButtonInfo = "More details here"
			/>
		</div>
	);
};
