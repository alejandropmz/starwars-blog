import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";



export const Films = () => {
  const { store, actions } = useContext(Context); //Al traer en el store del flux la información, la podemos usar en cualquier componente que importemos el context
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(0)
  const [records, setRecords] = useState(0)


  useEffect(()=>{ 
  actions.getAllElements("films").then((reply)=>{
    if(reply){
      setPages(reply.pages)
      setRecords(reply.records);
    }
  })
  },[])

  useEffect(()=>{
    actions.getAllElements("fillms", {page:searchParams.get("page")})
  },[searchParams.get("films")])

  return (
    <div className="container">
      <h1>Films</h1>
      <div className="container">
        <div className="row">
        {store.films.map((film,index) => (
          <div className="col col-md-4" key={index}>
            <EditableCards
            id = {film.uid}
            type  = "films"
            title = {film.properties.title}
            text = {film.properties.director}
            text2 = {film.properties.producer}
            img = {`https://starwars-visualguide.com/assets/img/films/${film.uid}.jpg`}
            />
          </div>
          ))}
          <div className="row">
            <div className="col">
              <Pagination 
              pages = {pages}
              currentPage = {searchParams.get("page") || "1"}
              type = "films"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* <ul>
{store.films.map((film,index) => (
  <li key={index}>{film.properties.title}</li> // aquí varía porque la data de la api de films es distinta a la de planets
))}
</ul>
 */} // Versión anterior del mapeo sin la card