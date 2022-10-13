import "./ExpItem.css";
import React from "react";
import { Update } from "@material-ui/icons";
import ExpDate from "./ExpDate";
import Button from "./Button";
import UpdateExpense from "./UpdateExpense";
import { useDispatch,useSelector } from "react-redux";
import {handleTab,handleId} from "../Redux/Slicers/updateSlice"


const ExpItem = (props) => {
    const dispatch = useDispatch(0)
    const flag = useSelector((allState) => (allState.status.flag))

    const updateHandle = (val) =>{
        dispatch(handleTab(true))
        dispatch(handleId(val))
    }

    return(
    <>
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
            <div className="btn-control">
                <Button id={props.id}></Button>

                <button className="up-date" onClick={() =>updateHandle(props.id)}><Update /></button>
            </div>
        </div>
        {flag && <UpdateExpense />}
    </>
    );
}

export default ExpItem;