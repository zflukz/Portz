import React from 'react'
import './Usercard.css'

function Usercard(props) {
  return (
    <div className="card">
        <img src={props.avatar} alt={props.name} style={{width:"100%"}}/>
        <div className="container">
            <h4><b>{props.fname} {props.lname}</b></h4> 
            <p>{props.username}</p> 
        </div>
    </div>
  )
}

export default Usercard