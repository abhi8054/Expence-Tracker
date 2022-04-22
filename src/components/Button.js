import "./Button.css";
import React from "react";
import { Delete } from "@material-ui/icons";

const Button = (props) =>{

    const actionCall =()=>{
        props.getId(props.keyValue);
    }
        return(
            <div className="btn">
                <button  onClick={actionCall}><Delete></Delete></button>
            </div>
        )
    
}

export default Button;