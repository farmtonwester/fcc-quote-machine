import { useState } from 'react'
import './App.css';
import Button from './Components/Button';

function App() {
  return (
    <div className="App" id="quote-box">
        <Button buttonDisplayName="New Quote" clickHandler={nextQuoteClickHandler}/>
      </div>
      //Button is currently not rendering to the DOM, I am not sure why yet.
      //Fixed! The parentheses vs curly bracket syntax was not matching what the tutorial did. With parens, the return is implicit
      //Next step is creating clickHandler to be passed to Button component
      );
    }
    
function nextQuoteClickHandler() {
  console.log("Clicked!");
}

// function GetQuote() {
//   const [quote, setQuote] = useState(null);
  
//   fetch("https://api.quotable.io/random")
//   .then(resp => resp.json())
//   .then((data) => {
//       setQuote(data.content);
//       console.log(data);
//     })
//   .catch((error) => console.log(error));
  
//   return (
//       <div>
//         <h2>Quote of the Day: </h2>
//         <p>{quote}</p>
//       </div>
//   )
// }

export default App;
