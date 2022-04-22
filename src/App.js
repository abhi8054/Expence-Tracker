import "./App.css";
import React from "react";

import Expences from "./components/Expences";
import ExpNew from "./components/ExpNew";


let DUMMY_EXP = [];


const App = () => {
    const [expArray,setExpArray]=React.useState(DUMMY_EXP);
    const [editVal,setVal]=React.useState();



    function getData(){
        fetch("http://localhost/Rest%20API/php-fetchall-api.php")
        .then((responce) =>{
            return responce.json();
        }).then((data)=>{
            setExpArray(data);
        })
    }

    React.useEffect(()=>{
        getData();
    },[]);

    const getNewExpActual = (recievedNewExpActual) =>{
        
        const dataGet = JSON.stringify(recievedNewExpActual);
        fetch("http://localhost/Rest%20API/php-insert-api.php",{
            method:'POST',
            body:dataGet
        }).then(responce =>{
            getData();
        });
    };

    const getExpNewIdVal =(getid)=>{
        const obj={
            id:getid,
        }
        fetch("http://localhost/Rest%20API/php-delete-api.php",{
            method:'POST',
            body:JSON.stringify(obj)
        }).then(responce =>{
            getData();
        });
    }

   
    return(
        <div>
            <h1>My Expense Item Details</h1>
            <ExpNew getNewExpActualData = {getNewExpActual} />

                <Expences
                    item={expArray}
                    getExpNewId ={getExpNewIdVal}
                   >
                </Expences>
        </div>
    );
}

export default App;