import React, { createContext, useState } from "react";
import "./App.css";
import Form from "./Form";

export const FormContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  city: "",
  college: "",
  course: "",
  address: "",
  message: "",
});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        handleChange,
        handleSubmit,
        theme,
        toggleTheme,
      }}
    >
      <div className={`app ${theme}`}>
        <Form />
      </div>
    </FormContext.Provider>
  );
}

export default App;