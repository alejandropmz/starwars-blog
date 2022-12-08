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
  },[])

	return (
		<div className="container">
			<h1>Films</h1>
			<h2>{data.title} Film</h2>
			<CardDetail 
			type = "planets"
			img = {`https://starwars-visualguide.com/assets/img/films/${filmid}.jpg`}
			title = {<h3>{data.title}</h3>}
			text = {<div>
        <h5>Properties Films</h5>
          <ul>
            <li>Producer: {data.producer}</li>
            <li>Director: {data.director}</li>
            <li>Title: {data.title}</li>
            <li>Release date: {data.release_date}</li>
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
