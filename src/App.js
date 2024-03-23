import { useState } from 'react'
import './App.css';

function App() {
  
  
  return (
    <div className="App">
     <button onClick={GetQuote}>New Quote</button>
    </div>
  );
}

function GetQuote() {
  const [quote, setQuote] = useState(null);
  
  fetch("https://api.quotable.io/random")
  .then(resp => resp.json())
  .then((data) => {
      setQuote(data.content);
      console.log(data);
    })
  .catch((error) => console.log(error));
  
  return (
      <div>
        <h2>Quote of the Day: </h2>
        <p>{quote}</p>
      </div>
  )
}

export default App;
