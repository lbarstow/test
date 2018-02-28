import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import StringField from './StringField';
import StringDisplay from './StringDisplay';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      word: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({word: event.target.value });
  }

  render() {
    let title = "Let's Make a Palindrome";
    let rev = title.split("").reverse().join("");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title} {rev}</h1>
        </header>
        <div className="words">
          <StringField
            value={this.state.word}
            onChange={this.handleChange}
          />
          <StringDisplay
            value={this.state.word}
          />
        </div>
      </div>
    );
  }
}

export default App;
