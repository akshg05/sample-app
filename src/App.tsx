import React from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from './components/SampleComponent';
import { Button } from '@material-ui/core';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactJS
        </a>
        <SampleComponent/>
        <TestComponent/>
        <Button className='box' variant='contained' color='primary'>Hello</Button>
      </header>
      
    </div>
  );
}

export default App;
