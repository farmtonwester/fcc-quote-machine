import React, { Component } from 'react'
import './App.css';
import Button from './Components/Button';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  nextQuoteClickHandler() {
    console.log("Clicked!");
  }

  render() {
    return (
      <div className="App" id="quote-box">
          <Button buttonDisplayName="New Quote" clickHandler={this.nextQuoteClickHandler} id="new-quote"/>
      </div>
    );
  }
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
