import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";

export const Planets = () => {
  const { store, actions } = useContext(Context); //Al traer en el store del flux la información, la podemos usar en cualquier componente que importemos el context
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(0)
  const [records, setRecords] = useState(0)


  /* useEffect(async() => {
    const reply = await actions.getAllElements("planets");
    if (reply){
      setPages(reply.pages)
      setRecords(reply.records)
    }
  }, []); */

  useEffect(()=>{
    actions.getAllElements("planets").then((reply)=>{
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records);
      }
    })
  },[])

  useEffect(()=>{
    actions.getAllElements("planets", {page:searchParams.get("page")}).then((reply)=>{
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records);
      }
    })
  }, [searchParams.get("page")])

  return (
    <div className="container">
      {/* <h1>Planets {JSON.stringify(searchParams.get("page"))} </h1> */}
      <div className="tittle d-flex justify-content-center">
        <h1 className="tittle-views">Planets</h1>
      </div>
      <div className="small-counter">
        <small>{records} Planets found</small>
      </div>
      <div className="container">
        <div className="row">
          {store.planets.map((planet) => (
            <div key={planet.uid} className="col col-md-4">
              <EditableCards
                id={planet.uid}
                type="planets"
                title={planet.name}
                text=""
                img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col">
            <Pagination
              pages={pages}
              currentPage={searchParams.get("page") || "1"}
              type={"planets"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
