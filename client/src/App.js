import logo from "./logo.svg";
import "./App.css";
import Spinner from "./components/Spinner";
import { useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <div className="App">
      <Spinner isLoading={isLoading} />
      <img src={logo} className="App-logo" alt="logo" />
      <button type="button" onClick={() => setLoading(!isLoading)}>
        Show Spinner
      </button>
    </div>
  );
}

export default App;
