import React from "react"
import './App.css';
import ComA from './Components/ComA';
import { FirstName, LastName } from "./Context";

const App = () => {
  return (
    <FirstName.Provider value={"Akshay"}>
      <LastName.Provider value={"Sajgule"}>
        <ComA />
      </LastName.Provider>
    </FirstName.Provider>
  );
}


export default App;

