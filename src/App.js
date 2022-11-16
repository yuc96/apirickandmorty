import axios from "axios";
import { useEffect, useState } from "react";
import Itemsapi from "./components/itemsapi";
import "./index.css";
import "./App.css";

function App() {
  const [dimensionType, setdimensionType] = useState([]);
  const [typeId, setTypeId] = useState("");
  const randomId = Math.floor(Math.random() * 127) + 1;
   useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then((res) => setdimensionType(res.data));
   }, []);

 const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/?name=${typeId}`)
        .then((res) => setdimensionType(res.data.results?.[0]));
        
   };
  
 console.log("dimensionType/*/*/***");  
 console.log(dimensionType);
 console.log("los residentes");
 console.log(dimensionType.residents);  

  return (
     <div className="App">
       <div className="dimensonname">
          <h1>{dimensionType.name}</h1>
       </div>
          <ul className="datadimension">
            <li>Type: {dimensionType.type}</li>
            <li>Dimension: {dimensionType.dimension} </li>
            <li>Population: {dimensionType.residents?.length} </li>
          </ul>
         
      <div className="searchdiv">
          <input className="searchinput"
            type="text"
            value={typeId}
            placeholder="Write a Dimension Name"
            onChange={(e) => setTypeId(e.target.value)}
          />
          <button onClick={searchType}>Search</button>  
      </div>
        <ul  className="listresidents" key={dimensionType.name}>
         {
              dimensionType.residents?.map((urlpersonage1) => (
              < Itemsapi urlpersonage={urlpersonage1} />
            ))
         }
       </ul>  
     </div>
  )
};

export default App;