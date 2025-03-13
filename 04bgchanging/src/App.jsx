import { useState } from "react"


function App() {

  
  const [color, setColor] = useState("black")
  const [text , setText] = useState("yellow")
  

  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="justify-center flex items-center w-screen h-screen font-semibold font-sans">{text}</div>
  
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl"> 
          <button 
          onClick={()=> {
            setColor("red")
            setText("RED")
          }}
          className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"red"}}>Red
          </button>

          <button 
           onClick={()=> {
            setColor("green")
            setText("GREEN")
          }}
           className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"green"}}>Green
          </button>

          <button
           onClick={()=> {
            setColor("orange")
            setText("ORANGE")
          }}
           className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"orange"}}>Orange
          </button>

          <button 
           onClick={()=> {
            setColor("blue")
            setText("BLUE")
          }}
           className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"blue"}}>Blue
          </button>

          <button 
           onClick={()=> {
            setColor("pink")
            setText("PINK")
          }}
          className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"pink"}}>Pink
          </button>

          <button 
           onClick={()=> {
            setColor("violet")
            setText("VIOLET")
          }}
          className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"violet"}}>Violet
          </button>

          <button 
           onClick={()=> {
            setColor("yellow")
            setText("YELLOW")
          }}
          className="outline-none  px-4 py-1 rounded-lg" 
          style={{backgroundColor:"yellow"}}>Yellow
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App