import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [name, setName] = useState("Your Name");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <div className="App">
      <h1 className="title">E2E Testing with Playwright</h1>
      <div className="form">
        <div>
          <Input handleChange={handleChange} />
          <button id="btn" href="http://localhost:3000">
            Get Started
          </button>
        </div>
        <h1 id="name">{name}</h1>
      </div>
    </div>
  );
}

export default App;
