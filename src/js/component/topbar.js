import React from "react";

export const TopBar = (props) =>{
  return (
    <div className="topbar">
      <h1>{props.text}</h1>
    </div>
  )
}