import React from "react";

export const TopBar = (props) =>{
  return (
    <div style={{border: "solid 2px gray", borderLeft:"none", borderRight:"none", height:"60px", width:"1050px", margin:"auto"}}>
      <h1>{props.text}</h1>
    </div>
  )
}