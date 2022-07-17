import "./App.css";
import React,{useEffect} from "react";
import Expenses from "./components/Expenses";
import ExpNew from "./components/ExpNew";
import {useDispatch} from "react-redux"
import {addExpense,emptyState} from "./Redux/Slicers/expenseSlice"


const App = () => {
    const dispatch = useDispatch();

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

    useEffect(() => {
        getData()
    },[])
    
    return(      
        <div>
            <h1>My Expense Item Details</h1>
            <ExpNew />
            <Expenses />
        </div>
    );
}
export default App;