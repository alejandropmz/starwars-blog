import React, { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/demo.css";
import { EditableCards } from "../component/editableCards";
import { Pagination } from "../component/pagination";

export const People = () => {
  const { store, actions } = useContext(Context);
  const [searchParams, setSearchParams] = useSearchParams()
  const [pages, setPages] = useState(0)
  const [records, setRecords] = useState(0)

  useEffect(() => {
    actions.getAllElements("people").then((reply)=>{
      if(reply){
        setPages(reply.pages)
        setRecords(reply.records);
      }
    })
  }, []);

  useEffect(() => {
    actions.getAllElements("people", {page:searchParams.get("page")}).then((reply) => {
      if(reply){
        setPages(reply.pages)
      setRecords(reply.records);
      }
    });
  }, [searchParams.get("page")])

  return (
    <div className="container">
      <h1>People</h1>
      <div className="container">
        <div className="row">
          {store.people.map((person, index) => (
            <div className="col col-md-4" key={index}>
              <EditableCards
                id={person.uid}
                type="people"
                title={person.name}
                text=""
                img={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              />
            </div>
          ))}
        </div>
      </div>
      <Pagination 
        pages={pages} 
        currentPage={searchParams.get("page") || "1"} 
        type="people" 
        />
    </div>
  );
};
