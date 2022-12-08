import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";

export const Starships = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(0)
  const [records, setRecords] = useState(0)

  useEffect(() => {
    actions.getAllElements("starships").then((reply) => {
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records)
      }
    })
  }, []);

  useEffect(() => {
    actions.getAllElements("starships", {page:searchParams.get("page")}).then((reply) => {
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records)
      }
    })
  }, [searchParams.get("page")]);

  return (
    <div className="container">
      <div className="tittle d-flex justify-content-center">
        <h1 className="tittle-views">Starships</h1>
      </div>
      <div className="small-counter">
        <small>{records} Starships found</small>
      </div>
      <div className="container">
        <div className="row">
          {store.starships.map((starship) => (
            <div key={starship.uid} className="col col-md-4">
              <EditableCards
                id={starship.uid}
                type="starships"
                title={starship.name}
                text=""
                img={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col">
        <Pagination 
          pages={pages} 
          currentPage={searchParams.get("page") || "1"} 
          type={"starships"} 
        />
        </div>
      </div>
    </div>
  );
};
