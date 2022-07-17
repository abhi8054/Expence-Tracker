import "./Button.css";
import React from "react";
import { Delete } from "@material-ui/icons";
import {useDispatch} from "react-redux"
import {addExpense,emptyState} from "../Redux/Slicers/expenseSlice"

const Button = (props) =>{
    const dispatch = useDispatch()
    const data = {
        id:props.id
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

    const deleteData =()=>{
        fetch("http://localhost/API/php-delete-api.php",{
        method:"DELETE",
        body:JSON.stringify(data)
        }).then((response) =>{
            return response.json()
        }).then((data) =>{
            if(data.status){
                alert(data.message)
                getData()
            }
        })

    }
        return(
            <div className="btn">
                <button className="del" onClick={deleteData}><Delete /></button>
            </div>
        )
    
}

export default Button;