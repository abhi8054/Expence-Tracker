import "./Expences.css";
import React from "react";

import ExpItem from "./ExpItem";

const Expences = (props) =>{

    const getExpId =(id,type)=>{
        props.getExpNewId(id,type);
    }
    const upData =(val)=>{
        props.updata(val);
    }
    
    if(props.item.length){
        return(
            <div className="expence-container">
               {
                   props.item.map(
                       (expence) =>(
                        <ExpItem 
                            updata = {upData}
                            getIdNew = {getExpId}
                            key={expence.id}
                            id = {expence.id}
                            title={expence.expTitle} 
                            rate={expence.expRate} 
                            date={expence.expDate} /> 
                       )
                   )
               }
            </div>
        )
    }else{
        return(
            <div>
                <h1>Expense Container is Empty</h1>
            </div>
        )
    }
    
}
export default Expences;