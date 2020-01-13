import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const Title = ({ text }) => <div>{text}</div>;

export class Link extends React.Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

function App() {
  const [on, setOn] = useState(false);
  const [input, setInput] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <h2>{input}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul className="custom-list">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Title text="Hello" />
      <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
      <button onClick={() => setOn(!on)}>Click</button>
      <input type="text" onChange={e => setInput(e.currentTarget.value)} />
    </div>
  );
}

export default App;
