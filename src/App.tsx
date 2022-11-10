import React from "react";
import Carousel from "./components/Carousel";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Carousel />
      </header>
    </div>
  );
}

export default App;
