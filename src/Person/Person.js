// to export js function as component we neeed to  add import  React  from " react"
import React from 'react';
import './Person.css'
const person = (props) => {
    return<div className="Person">
 <p onClick ={props.click}> I  am {props.name} and {props.age}  years old  </p>
 <input type = 'text' onChange  = {props.changed} value = {props.name}/>
    </div>
    

}

export default person;