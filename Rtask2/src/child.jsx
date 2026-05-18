import React from "react";

export default function Child({ name, age, city }) {

  return (

    <div className="box">

      <h3>Name : {name}</h3>

      <h3>Age : {age}</h3>

      <h3>City : {city}</h3>

    </div>

  );
}