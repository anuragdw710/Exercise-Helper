import { logDOM } from "@testing-library/react";
import "./App.css";
import Bodymap from "./bodymap.js";
import Diagnosis from "./diagnosis.js";
import stretchImage from "./newstretch.jpg"
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Exercise Helper</title>
        <button className="Sign-up-button"> Sign up </button>
        <button className="Log-in-button"> Log in </button>
      </header>
      <div className="inspo-header">
        <div className="inspo-text">
          <h2>personalized stretching guidance</h2>
          <h3>at your fingertips.</h3>
        </div>
        <div className="inspo-image">
          <img src={stretchImage} alt="Stretch-Image"></img>
        </div>
      </div>

      <div className="App-diagram">
        <Bodymap />
        <Diagnosis />
      </div>
      <ScrollRestoration />
    </div>
  );
}

export default App;
