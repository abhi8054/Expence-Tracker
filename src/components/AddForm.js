import "./AddForm.css";
import React from "react";

const AddForm = (props) =>{

    let [titleValue,setTitleValue] = React.useState("");
    let [amountValue,setAmtValue] = React.useState("");
    let [dateValue,setDateValue] = React.useState("");

    const titleChangeHandler = (event)=>{
        setTitleValue(event.target.value);
    }

    const amountChangeHandler = (event)=>{
        setAmtValue(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        setDateValue(event.target.value);
    }

    let clickHandler = (event) =>{
        event.preventDefault();
        if(amountValue !="" || dateValue != "" || titleValue != ""){
            const newExpence ={
                expTitle : titleValue,
                expDate : new Date(dateValue),
                expRate : parseInt(amountValue)
            }
            props.getNewExpenceData(newExpence);
            setDateValue("");
            setTitleValue("");
            setAmtValue("");
        }else{
            alert("Please Enter Required Details");
        }    
    }

    return(
        <form onSubmit={clickHandler}>
            <div className="form-container">
                <div className="exp-title center">
                    <label>Enter Title : </label>
                    <input type="text" placeholder="Title" value={titleValue} onChange={titleChangeHandler}/>
                </div>
                <div className="exp-date center">
                    <label>Select Date : </label>
                    <input type="date" value={dateValue} onChange={dateChangeHandler}/>
                </div>
                <div className="exp-amt center">
                    <label>Enter Amount : </label>
                    <input type="number" placeholder="Amount" value={amountValue} onChange={amountChangeHandler}/>
                </div>
                <div className="btnadd center">
                    <input type="submit" value="ADD Expence"/>
                </div>
            </div>
        </form>
    );
}
export default AddForm;