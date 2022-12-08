import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";

export const Species = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams()
  const [pages, setPages] = useState(0)
  const [records, setRecords] = useState(0)

  useEffect(() => {
    actions.getAllElements("species").then((reply) => {
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records)
      }
    })
  }, []);

  useEffect(() => {
    actions.getAllElements("species", {page:searchParams.get("page")}).then((reply) => {
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records)
      }
    })
  }, [searchParams.get("page")]);

  return (
    <div className="container">
      <div className="tittle d-flex justify-content-center">
        <h1 className="tittle-views">Species</h1>
      </div>
      <div className="small-counter">
        <small>{records} Species found</small>
      </div>
      <div className="container">
        <div className="row">
          {store.species.map((specie) => (
            <div key={specie.uid} className="col col-md-4">
              <EditableCards
                id={specie.uid}
                type="species"
                title={specie.name}
                text="A star wars universe specie"
                img={`https://starwars-visualguide.com/assets/img/species/${specie.uid}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
      <Pagination 
        pages={pages} 
        currentPage={searchParams.get("page") || "1"} 
        type={"species"}
        />
    </div>
  );
};
