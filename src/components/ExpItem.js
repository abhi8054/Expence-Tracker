import "./ExpItem.css";
import React from "react";

import ExpDate from "./ExpDate";
import Button from "./Button";
const ExpItem = (props) => {



    const getExpId =(id)=>{
        props.getIdNew(id);
    }
   
    const upData = (val)=>{
        props.updata(val);
    }

    return(
        <div className="expItem-container">
            <div className="date-style">
                <ExpDate
                    exDate={new Date(props.date)}>
                </ExpDate>
            </div>
            <div className="description">
                <h3>{props.title}</h3>
                <div className="rsStyle">${props.rate}</div> 
            </div>
            <div>
                <Button keyValue ={props.id}
                        getId={getExpId}
                ></Button>
               
            </div>
        </div>
    );
}

export default ExpItem;