import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import Button from './Components/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }
  
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(quotes => this.setState({ quotes }, () => {
      this.setState({ selectedQuoteIndex: this.selectQuoteIndex() })
    }));
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1)
  }

  render() {
    console.log(this.state.selectedQuoteIndex);
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
