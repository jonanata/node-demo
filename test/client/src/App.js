import React from "react";
import {useState} from 'react';
import { JsonToTable } from "react-json-to-table";

import './App.css'; 

const App = () => {
  
  const [data, setData] = useState(null);
  const [sname, setSname] = useState(''); 
  const [dlabel, setDlabel] = useState(''); 

  const handleChange = event => {
    setSname(event.target.value);
  };
  
  const handleClick = event => {
    event.preventDefault(); 
	
	setDlabel('Loading ...... '); 
	setData(null); 
    
	fetch('/api?name=' + sname) 
	  .then(res => res.json())
	  .then((data) => setData(data.d));

  }
  
  return (
    <div className="App">
      <header className="App-header">
        
		<p> 
		Explore the characters of the Star Wars universe <br/> Search Now ! 
		</p> 
		
		<p>
          <input type="text" id="sname" name="sname" onChange={handleChange} value={sname} autoComplete="off" placeholder="character (e.g. r2)"/> <button onClick={handleClick}>Search</button> 
        </p>
        
		{data ? data.length > 0 ? data.map(d => ( <p><JsonToTable json={d} /></p> )) : 'Result Not Found ' : dlabel} 
		
      </header>
    </div>
  );
}

export default App;
