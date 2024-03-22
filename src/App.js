import { useEffect, useState } from 'react'
import './App.css';

function App() {

  return (
    <div className="App">
      <button onClick={GetQuote}>Click</button>
    </div>
  );
}

function GetQuote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {

    fetch("https://api.quotable.io/random")
    .then(resp => resp.json())
    .then((data) => {
      setQuote(data[0].quote)
      console.log(data);
    })
    .catch((error) => console.log(error));
  }, []);

    return (
      <div>
        <h2>Quote of the Day: </h2>
        <p>{quote}</p>
      </div>
    )
}
export default App;
