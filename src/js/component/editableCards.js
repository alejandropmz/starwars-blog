import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/index.css";

export const EditableCards = (props) => {
  /* props:
  id
  type => es el tipo de elemento que se carga, ej. planets, film, people 
  title
  text
  img
  */

  const {store, actions} = useContext(Context);

 const takeLoadError = (e) =>{
  console.log(`Error in load: ${e.target.src}`) //imprime el error en consola al cargar la imagen mal
  e.target.src = "https://i.pinimg.com/originals/82/53/cb/8253cb96d29d1f79b4b4d52bb958598d.png" // nos imprime esta imagen en caso de no cargar correctamente
 }


  return (
    <div className="card">
      <img
        src={props.img}
        className="card-img-top"
        alt={props.type.toUpperCase() + " " + props.title}
        onError = {takeLoadError} // llamamos a la función para que cuando presente el error se cargue
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text">{props.text2}</p>
        {/* La concatenación de type y id nos genera un enlace entre el componente (type) y su id (id) */}
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/${props.type}/${props.id}`} className="btn btn-warning">
            More details here
          </Link>
          <i onClick={()=>actions.changeFavorite({ // creo un evento guarde la info que quiero mostrar en los favoritos
            name:props.title,
            link:`/${props.type}/${props.id}`,
            img:<img src={props.img} style={{height:"20px", width:"20px"}} onError={takeLoadError}/>,
          })} className="icons bi bi-bookmark-heart"></i>
        </div>
      </div>
    </div>
  );
};
