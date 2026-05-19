import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <div className="card">
        <h1>Counter Application</h1>

        <h2 className="count">{count}</h2>

        <div className="button-group">
          <button className="increment" onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button className="decrement" onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          Change Theme
        </button>

        <p className="theme-text">
          Current Theme: {darkMode ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </div>
  );
}

export default App;