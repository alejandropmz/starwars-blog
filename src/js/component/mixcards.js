import React from "react";
import '../../styles/demo.css'

/*
img
text
rightimg1
righttext1
rightimg2
righttext2
rightimg3
righttext3
*/
/*
rojo: contenedor padre
azul: contenedor izquierda

*/
export const MixCards = (props) => {
  return (
    <div className="container d-flex space-between align-items-center container-mixcard">
      <div className="left-card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
      <div className="right-cards">
        <div className="card d-flex">
          <div className="img-card d-flex"> {/* <-- aqui */}
            <img className="img" src={props.rightimg1} />
            {props.righttext1}
          </div>
        </div>
        <div className="card">
          <div className="img-card d-flex"> {/* <-- aqui */}
            <img className="img" src={props.rightimg2} />
            {props.righttext2}
          </div>
        </div>
        <div className="card">
          <div className="img-card d-flex"> {/* <-- aqui */}
            <img className="img" src={props.rightimg3} />
            {props.righttext3}
          </div>
        </div>
      </div>
    </div>
  );
};
