import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDark, setMode] = useState(false)
  function modeChange(event){
    setMode(!isDark)
    console.log(isDark)
  }
  const appClass = isDark ? "App dark" : "App light"
  const buttonText = isDark ? "Light Mode" : "Dark Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={modeChange}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
