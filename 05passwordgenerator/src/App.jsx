import { useState,useCallback,useEffect } from "react"

function App() {
  const[length,setlengh]=useState(8);
  const[numAllowed,setNumAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "@#$&*()-+=?";

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);


    }
    setPassword(pass)

   

  } ,[length,numAllowed,charAllowed,setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
  <>
  <div className="w-full max-w-md mx-auto shadow-md
  rounded-lg px-4 my-10 py-3 text-violet-600 bg-slate-200">
    <h1 className="text-black text-center mb-3"> Password generator..</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-3"> 
    <input type="text" 
    
    value={password}
    className="outline-none w-full py-1 px-3 "
    placeholder="Password"
    readOnly/>
    <button 
  onClick={() => {
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => alert("Password copied to clipboard! ✅"))
        .catch(err => console.error("Failed to copy: ", err));
    }
  }}
  className="outline-none px-3 py-0.5 shrink-0 bg-blue-300 text-black hover:bg-blue-400"
>
Copy
</button>

    </div>
    <div className="flex items-sm gap-x-2">
      <div className="flex items-cenyer gap-x-1">
        <input type="range"
        min={8}
        max={50}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{setlengh(e.target.value)}} />

        <label> Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1"> 
        <input type="checkbox"
        defaultChecked={numAllowed}
        id="numberInput"
        onChange={()=>{
          setNumAllowed((prev) => !prev);    
          }} />
        <label htmlFor="numberInput"> Numbers</label>
      </div>
      <div className="flex items-center gap-x-1"> 
        <input type="checkbox"
        defaultChecked={charAllowed}
        id="charInput"
        onChange={()=>{
          setCharAllowed((prev) => !prev);    
          }} />
        <label htmlFor="characterInput">Character</label>
      </div>
    </div>

  
  </div>


  </>
  )
}

export default App
