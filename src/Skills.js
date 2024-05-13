import React from 'react'
import './Style.css'
export default function Skills(props) {
  return (
    <>
      
      <div className="card" id='skills' style={{ width:"300px",height:'550px',border:'2px solid #00BFFF'}}>
        <img
          className="card-img-top"
          src={props.i}
          alt="Card image"
          style={{ width: "100%", height: "100%"}}
        />
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p className="card-text">{props.para}</p>
          <a href={props.link} className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
        
    </>
  )
}
