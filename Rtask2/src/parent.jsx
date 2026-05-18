import React from "react";
import Child from "./child";

export default function Parent() {

  const name1 = "Kohli";
  const age1 = 30;
  const city1 = "Banglore";

  const name2 = "Ms Dhoni";
  const age2 = 35;
  const city2 = "Chennai";

  const name3 = "Rohith sharma";
  const age3 = 32;
  const city3 = "Mumbai";

  const name4 = "Kl Rahul";
  const age4 = 29;
  const city4 = "Delhi";

  const name5 = "Shreyas iyer";
  const age5 = 28;
  const city5 = "punjab";

  return (

    <>

      <h1>Personal Details</h1>

      <Child name={name1} age={age1} city={city1} />

      <Child name={name2} age={age2} city={city2} />

      <Child name={name3} age={age3} city={city3} />

      <Child name={name4} age={age4} city={city4} />

      <Child name={name5} age={age5} city={city5} />

    </>

  );
}