import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pages, setPages] = useState(0);
  const [records, setRecords] = useState(0);

  useEffect(() => {
    actions.getAllElements("vehicles").then((reply) => {
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records)
      }
    })
  }, []);

  useEffect(() => {
    actions.getAllElements("vehicles", {page:searchParams.get("page")}).then((reply) => {
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records)
      }
    })
  }, [searchParams.get("page")]);


  return (
    <div className="container">
      <div className="tittle d-flex justify-content-center">
        <h1 className="tittle-views">Vehicles</h1>
      </div>
      <div className="small-counter">
       <small>{records} Vehicles found</small>
      </div>
      <div className="container">
        <div className="row">
          {store.vehicles.map((vehicle) => (
            <div className="col col-md-4">
              <EditableCards
                id={vehicle.uid}
                type="vehicles"
                title=""
                text={vehicle.name}
                img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
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
          type={"vehicles"} />
        </div>
      </div>
    </div>
  );
};
// some
// smoe
