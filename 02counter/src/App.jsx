import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*

// IN this code the the counter value doesnt update in the UI....
//to change using the JS the dom, manipilate nad blaww bakw.....
let counter =0;
const addValue =()=>{
  console.log("The button is clicked....",Math.random()*10)
  counter = counter+1;
}
function App(){
  return(
    <>
    <h1> Counter: {counter}</h1>
    <h3 onClick={addValue}>add value </h3>
    <h3>dec value</h3>
    </>
  )
}
*/


// HOOKS helps us for UI updation in the REACT 
//there are many hooks....
//REACT GITHUB....


function App() {
  
  let [counter,setCounter]=useState(10)

  let AddValue = ()=>{
    if(counter>19){
      console.log("reached the max limit"+counter)
    }else{
      counter = counter+1
      setCounter(counter)
    }
  }


  let DecValue = ()=>{
    if(counter<1){
      console.log("reached the min limit"+counter)
    }else{
      counter = counter-1
      setCounter(counter)
    }
  }





  return(
    <>
    <h1>Counter Game </h1>
    <p>Click the below Buttons to Play Game</p>
    <h3>Counter:{counter}</h3>
    <button onClick={AddValue}>Increment the Value</button>
    <button onClick={DecValue}>Decrement the Value</button>
    </>
  )
  
}


export default App
