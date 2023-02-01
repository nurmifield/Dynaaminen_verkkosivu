
import './App.css';

import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [beer, setBeer] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const calculateBloodAlcoholLevel = () => {
    const litres = beer * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result;
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    
    setResult(result.toFixed(2));
  };

  return (
    
    <div id='iidee'> 
      <h1>Alkometri</h1>
      <div>
        <label>Paino (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
      <label> Sukupuoli
        <br></br>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
          Mies
        </label>
        <br />
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
          Nainen
        </label>
      </div>
      <div>
        <label>Oluiden määrä:</label>
        <input
          type="number"
          value={beer}
          onChange={(e) => setBeer(e.target.value)}
        />
      </div>
      <div>
        <label>Aika (Tunti):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateBloodAlcoholLevel}>Laske</button>
      <div>
        <h2>Tulos:</h2> 
        <p>{result} promillea</p>
      </div>
    </div>
    
  );
};

export default App;

