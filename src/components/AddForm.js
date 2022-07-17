import "./AddForm.css";
import React,{useState} from "react";
import {useDispatch} from "react-redux"
import {addExpense,emptyState} from "../Redux/Slicers/expenseSlice"

const AddForm = () =>{
    const dispatch = useDispatch()

    const [titleValue,setTitleValue] = useState("");
    const [amountValue,setAmtValue] = useState("");
    const [dateValue,setDateValue] = useState("");

    const titleChangeHandler = (event)=>{
        setTitleValue(event.target.value);
    }

    const amountChangeHandler = (event)=>{
        setAmtValue(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        setDateValue(event.target.value);
    }
    const getData = () =>{
        dispatch(emptyState())
        fetch("http://localhost/API/php-fetchall-api.php",{
        method:"GET",
        }).then((response) =>{
            return response.json()
        }).then((data) =>{
            for(let i = 0;i<data.length;i++){
                dispatch(addExpense(data[i]))
            }
        })
    }

    const insertData =  (data) =>{
       fetch("http://localhost/API/php-insert-api.php",{
        method:"POST",
        body: JSON.stringify(data),
        }).then((response) =>{
            return response.json()
        }).then((data) =>{
            if(data.status){
                alert(data.message)
                getData()
            }
        })
    }

    const clickHandler = (event) =>{
        event.preventDefault();
        if(amountValue !="" || dateValue != "" || titleValue != ""){
            const newExpense = {
                expTitle : titleValue,
                expDate : new Date(dateValue),
                expRate : parseInt(amountValue)
            }

            insertData(newExpense)

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
                    <input type="text" placeholder="" value={titleValue} onChange={titleChangeHandler} required  />
                    <label> Enter Title </label>
                </div>
                <div className="exp-date center">
                    <input type=" " value={dateValue} onChange={dateChangeHandler} required/>
                    <label> Select Date </label>
                </div>
                <div className="exp-amt center">
                   
                    <input type="number" placeholder=" " value={amountValue} onChange={amountChangeHandler} required/>
                    <label> Enter Amount </label>
                </div>
                <div className="btnadd center">
                    <input type="submit" value="ADD Expense"/>
                </div>
            </div>
        </form>
    );
}
export default AddForm;