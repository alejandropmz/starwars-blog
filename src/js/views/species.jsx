import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Species = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Species</h1>
		</div>
	);
};
