import React from "react";

export const MiddleInfo = (props) =>{
  return (
<div style={{marginBottom:"40px"}}>
  <h1 className="d-flex justify-content-center">{props.title}</h1>
  <h3 className="d-flex justify-content-center">{props.text}</h3>
  <button style={{margin:"auto"}} className="btn btn-success d-flex justify-content-center">{props.button}</button>
</div>
  )
}

