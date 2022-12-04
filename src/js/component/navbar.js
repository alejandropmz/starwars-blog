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
  ])

  const [menu, setMenu] = useState([
    {menu:"Log in / Sign up", url:"*"},
    {menu:"Interactive", url:"*"},
    {menu:"Blog", url:"*"}
  ])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"><img src="https://img.icons8.com/ios/50/000000/star-wars.png"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {
          links.map((link,index)=>(
            <li key={index} className="nav-item">
              <Link className="nav-link" to={link.link}>{link.text}</Link>
            </li>
          ))
        }
  
        <li className="nav-item dropdown ml-auto">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More options
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            {menu.map((menu,index)=>(
              <li key={index}>
                <Link className="dropdown-item" to={menu.links}>{menu.menu}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};
