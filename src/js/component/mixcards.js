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
    <div className="container d-flex justify-content-center" style={{width:"1050px",  flexWrap:"wrap", height:"600px", border:"red solid 2px", marginTop:"40px"}}>
      <div className="left-card" style={{ width: "50%", border:"blue 2px solid", height:"100%"}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
      <div className="right-cards" style={{width:"50%", flexDirection:"column", border:"solid green 2px", height:"100%"}}>
        <div className="card d-flex">
          <div className="img-card" style={{border:"orange solid 2px"}}>
            <img src={props.rightimg1} style={{height:"50%"}} />
            {props.righttext1}
          </div>
        </div>
        <div className="card">
          <div className="img-card" style={{border:"orange solid 2px"}}>
            <img src={props.rightimg2} style={{height:"50%"}} />
            {props.righttext2}
          </div>
        </div>
        <div className="card d-flex">
          <div className="img-card" style={{border:"orange solid 2px"}}>
            <img src={props.rightimg3} style={{height:"50%"}} />
            {props.righttext3}
          </div>
        </div>
      </div>
    </div>
  );
};
