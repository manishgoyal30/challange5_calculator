import React from "react";
import add, {sub, mult, div} from "./Calc";
function App(){
  return(
    <>
    <ul>
    <li>sum of two number is {add(40, 4)} </li>
    <li>sum of two number is {sub(40, 4)} </li>
    <li>sum of two number is {mult(40, 4)} </li>
    <li>sum of two number is {div(30, 4)} </li>
  </ul>
    </>
  );
}

export default App;