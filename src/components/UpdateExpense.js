import React,{useEffect, useState} from 'react'
import "./UpdateExpense.css"
import { Cancel } from "@material-ui/icons";
import { useDispatch,useSelector } from "react-redux";
import {handleTab} from "../Redux/Slicers/updateSlice"
import {addExpense,emptyState} from "../Redux/Slicers/expenseSlice"


function UpdateExpense() {
    
    const dispatch = useDispatch()
    const myId = useSelector(allState => allState.status.id)
    
    const getSingleData = () =>{
        const data ={
            id:myId
        }
        fetch("http://localhost/API/php-fetchone-api.php",{
            method:"POST",
            body:JSON.stringify(data)
            }).then((response) =>{
                return response.json()
            }).then((data) =>{
                setUpDateValue(data[0].expDate)
                setupTitleValue(data[0].expTitle)
                setupAmtValue(data[0].expRate)
            })
    }

    useEffect(() =>{
        getSingleData()
    },[])

    const [upTitleValue,setupTitleValue] = useState("");
    const [upAmountValue,setupAmtValue] = useState("");
    const [dateUpValue,setUpDateValue] = useState("");

    const titleChangeHandler = (event)=>{
        setupTitleValue(event.target.value);
    }

    const amountChangeHandler = (event)=>{
        setupAmtValue(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        setUpDateValue(event.target.value);
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

    const upHandler = (event) =>{
        event.preventDefault();
        const newData = {
            id:myId,
            expTitle : upTitleValue,
            expDate : new Date(dateUpValue),
            expRate : parseInt(upAmountValue)

        }

        fetch("http://localhost/API/php-update-api.php",{
            method:"POST",
            body:JSON.stringify(newData)
            }).then((response) =>{
                return response.json()
            }).then((data) =>{
                console.log(data)
                if(data.status){
                    alert(data.message)
                    getData()
                }
            })
    }

    const hideTab = () =>{
        dispatch(handleTab(false))
    }

  return (
    <div className="container-update">
        <div className='wrapper'>
        <form className='myForm' onSubmit={upHandler}>
            <div className="form-container-up">
                <div className="exp-title center">
                    <input type="text" placeholder="" value={upTitleValue} onChange={titleChangeHandler} required  />
                    <label> Enter Title </label>
                </div>
                <div className="exp-date center">
                    <input type=" " value={dateUpValue} onChange={dateChangeHandler} required/>
                    <label> Select Date </label>
                </div>
                <div className="exp-amt center">
                   
                    <input type="number" placeholder=" " value={upAmountValue} onChange={amountChangeHandler} required/>
                    <label> Enter Amount </label>
                </div>
                <div className="btnadd center">
                    <input type="submit" value="UPDATE"/>
                </div>
                <span className="cancel">
                    <button className='can' type='button' onClick={hideTab}><Cancel /></button>
                </span>
            </div>
        </form>
        </div>
    </div>
  )
}

export default UpdateExpense