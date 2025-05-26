import React, { useState } from "react";
import UserContext from "./userContext";
import Child from "./Child"

function App(){
  
const [name]= useState("Sadhiq...")
  return(
    <UserContext.Provider value={name}>
    <div>
      <h1> Hi we are Testing the "Conext"....</h1>
      <Child/>
    </div>
    </UserContext.Provider>

  )
}
export default App