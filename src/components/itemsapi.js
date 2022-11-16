import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

const Itemsapi = ({urlpersonage}) => {

  const [personage, setPersonage] = useState();
   
  useEffect(() => {
    
    axios.get(urlpersonage)
    .then((res) => setPersonage(res.data));

     return
  }, [urlpersonage]);
  
       console.log("personage++++++++");   
       console.log(personage); 
  return (
        <div className="listresidents2">
            <li>Name: {personage?.name}</li>  
            <li>
            <img src={personage?.image} alt="img_personage"></img> 
            </li>
            <li>Status: {personage?.status}</li>
            <li>Species: {personage?.species}</li>
            <li>Name: {personage?.origin?.name}</li>   
            <li>Episode: {personage?.episode?.length}</li>
        </div>
  );
};

export default Itemsapi;
