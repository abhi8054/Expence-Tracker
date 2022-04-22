import "./ExpNew.css";
import React from "react";

import AddForm from "./AddForm";

const ExpNew = (props) =>{

    const getNewExpence = (recievedNewExpence)=>{
        props.getNewExpActualData(recievedNewExpence);
    }

    return(
        <div className="form">
            <AddForm getNewExpenceData={getNewExpence}></AddForm>
        </div>
    );
}
export default ExpNew;