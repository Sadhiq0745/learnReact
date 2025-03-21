import React from 'react'
import UserContext from '../context/UserContext'
import { useState,useContext } from 'react'

function Login() {
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName,password})
    }
  return (
    <div>
        <h2>Login Here</h2>
        <input type="text" 
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='username'/><br/>
        <input type="text" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'/><br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login