import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
  const [links, setLinks] = useState([
    { text: "Home", link: "/" },
    { text: "Films", link: "/films" },
    { text: "People", link: "/people" },
    { text: "Planets", link: "/planets" },
    { text: "Species", link: "/species" },
    { text: "Starships", link: "/starships" },
    { text: "Vehicles", link: "/vehicles" },
  ]);

  const [menu, setMenu] = useState([
    { menu: "Log in / Sign up", url: "/logInpage" },
    { menu: "Interactive", url: "/interactive" },
    { menu: "Blog", url: "*" },
  ]);


  return (

    <nav className="navbar navbar-expand-lg d-flex navbar-dark" style={{backgroundColor:"black", marginBottom:"20px"}}>
{/*           <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex" style={{backgroundColor:"black"}}>
 */}
      <div className="container-fluid naved">
 {/*        <Link to="/">
          <img src="https://img.icons8.com/ios/50/000000/star-wars.png"></img>
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown"> 
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li key={index} className="nav-item" style={{padding:"10px"}}>
                <Link className="nav-link" to={link.link}>
                  {link.text}
                </Link>
              </li>
            ))}

            <li className="nav-item dropdown ml-auto">
              <Link
                className="nav-link dropdown-toggle more-options"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More options
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {menu.map((menu, index) => (
                  <li key={index}>
                    <Link style={{padding:"10px"}} className="dropdown-item d-flex justify-content-center" to={menu.url}>
                      {menu.menu}
                    </Link>
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
