import React from "react";

export const TopBar = (props) =>{
  return (
    <div className="topbar">
      <h1 className="topbar-text">{props.text}</h1>
    </div>
  )
}