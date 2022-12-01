import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [links, setLinks] = useState([
    {text:"Home", link:"/"},
    {text:"Films", link:"/films"},
    {text:"People", link:"/people"},
    {text:"Planets", link:"/planets"},
    {text:"Species", link:"/species"},
    {text:"Starships", link:"/starships"},
    {text:"Vehicles", link:"/vehicles"},
  ]
  )
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src="https://img.icons8.com/ios/50/000000/star-wars.png"></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {
          links.map(link=>(
            <li className="nav-item">
              <Link className="nav-link" to={link.link}>{link.text}</Link>
            </li>
          ))
        }
  
        <li className="nav-item dropdown ml-auto">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
