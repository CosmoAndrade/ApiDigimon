import { useState } from 'react'
import axios from 'axios';
import './App.css'

const api = "https://digimon-api.vercel.app/api/digimon"


 function App() {

  const [digimon, setDigimon] = useState([]);

  axios 
    .get(`${api}`)
    .then((response) =>  setDigimon(response.data.slice(0,12) ))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    
 
  return (
    <div className="App">

    

      {digimon.map((dig) => {
        return(
          <div>
            <img src={dig.img} alt="" />
            <h2>
            {dig.name}
            </h2>
            <p>
              {dig.level}
            </p>
          </div>
        )
      })}

     
    
     
    </div>
  )
}

export default App
