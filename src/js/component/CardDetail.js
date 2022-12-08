import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/index.css'

/*
type
img
title
text
smallText
buttonInfo
buttonBack
textbuttonBack
*/

export const CardDetail = (props) => {
  return (
    <div className="card mb-3 card-detail">
    <div className="row g-0 d-flex align-items-center">
      <div className="col-md-4 d-flex align-items-center card-body-left">
        <img style={{height:"100%"}} src={props.img} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body card-body-right">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <p className="card-text">{props.text2}</p>
          <p className="card-text"><small className="text-muted">{props.smallText}</small></p>
          <div className="d-flex justify-content-end">
            <Link to={props.buttonBack} className="btn btn-light">{props.textButtonBack}</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}