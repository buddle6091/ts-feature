import React from "react";
import Carousel from "./components/Carousel";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline-offset-1">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
