import "./Expenses.css";
import React from "react";
import {useSelector} from "react-redux"
import ExpItem from "./ExpItem";

const Expenses = () =>{
    const myData = useSelector(allState => allState.expense.expenseItems)
    if(myData.length){
        return(
            <div className="expence-container">
               {
                   myData.map(
                       (item,index) =>(
                        <ExpItem 
                            key={index}
                            id={item.id}
                            title={item.expTitle} 
                            rate={item.expRate} 
                            date={item.expDate} /> 
                       )
                   )
               }
            </div>
        )
    }else{
        return(
            <div className="spinner">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
          
        )
    }
    
}
export default Expenses;