import { useState } from 'react'
import './App.css';
import Button from './Components/Button';

function App() {
  
  
  return (
    <div className="App" id="quote-box">
      <h2 id="text"></h2>
      <h4 id="author"></h4>
     <Button buttonDisplayName="new-quote" id="new-quote"/>
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
