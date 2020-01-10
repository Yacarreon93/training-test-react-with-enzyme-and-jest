import React from 'react';
import logo from './logo.svg';
import './App.css';

export const Title = ({ text }) => <div>{text}</div>;

export class Link extends React.Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
    </div>
  );
}

export default App;
