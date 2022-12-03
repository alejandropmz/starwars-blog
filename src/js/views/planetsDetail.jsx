import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // Este hook nos permite capturar los parametros que se pasan a la url

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const PlanetsDetail = () => {
	const { store, actions } = useContext(Context);
	const { planetid } = useParams() //Captura los parámetros pasados a la url que tiene planetid como ID

	return (
		<div className="container">
			<h1>Planets</h1>
			<h2>Planet number {planetid}</h2>
		</div>
	);
};
