import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<ul className="nav justify-content-center p-0 mb-3">
		<li className="nav-item"><Link to={"#"} className="nav-link px-2 text-muted">Home</Link></li>
		<li className="nav-item"><Link to={"#"} className="nav-link px-2 text-muted">Features</Link></li>
		<li className="nav-item"><Link to={"#"} className="nav-link px-2 text-muted">Pricing</Link></li>
		<li className="nav-item"><Link to={"#"} className="nav-link px-2 text-muted">FAQs</Link></li>
		<li className="nav-item"><Link to={"#"} className="nav-link px-2 text-muted">About</Link></li>
		</ul>
		<p style={{border:"none"}} className="text-center text-muted">© 2021 Company, Inc</p>
  </footer>

);
