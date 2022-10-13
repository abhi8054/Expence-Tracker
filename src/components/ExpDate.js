import React from "react";
import "./ExpDate.css";

const ExpDate = (props) =>{

    let month=props.exDate.toLocaleString('en-US',{month:'short'});
    let day = props.exDate.toLocaleString('en-US',{day:'2-digit'});
    let year = props.exDate.getFullYear();

    return(
        <div className="date-container">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="day">{day}</div>
        </div>
    );

}

export default ExpDate;