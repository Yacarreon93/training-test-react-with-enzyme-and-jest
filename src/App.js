import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const Title = ({ text }) => <div>{text}</div>;

export class Link extends React.Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>;
  }
}

class App extends React.Component {
  state = {
    on: false,
    color: 'blue',
    input: '',
    lifeCycle: '',
  };

  UNSAFE_componentWillReceiveProps() {
    this.setState({ lifeCycle: 'UNSAFE_componentWillReceiveProps' });
  }

  componentDidMount() {
    this.setState({ lifeCycle: 'componentDidMount' });
  }

  handleStrings(str) {
    return !!str;
  }

  render() {
   const {
      on,
      color,
      input,
      lifeCycle,
    } = this.state;

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
          <li className={color}></li>
          <li></li>
          <li></li>
        </ul>
        <Title text="Hello" />
        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
        <button onClick={() => this.setState({ on: !on })}>Click</button>
        <input type="text" onChange={e => this.setState({ input: e.currentTarget.value })} />
        <span className="lifeCycle">{lifeCycle}</span>
      </div>
    );
  }
}

export default App;
