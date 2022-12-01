import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Planets</h1>
		</div>
	);
};