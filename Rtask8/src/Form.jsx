import React, { useContext } from "react";
import { FormContext } from "./App";
import InputFields from "./InputFields";

function Form() {
  const { handleSubmit, theme, toggleTheme } = useContext(FormContext);

  return (
    <div className={`form-container ${theme}`}>
      <div className="header">
        <h1>Feedback Form</h1>
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <InputFields />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;