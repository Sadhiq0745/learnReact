import { useState } from 'react'
import './App.css'
import Card from  './components/Card'


function App() {
 

  return (
  <>
  <h1 className='bg-lime-200 text-black p-4 rounded-xl font-light'> Tailwind Test</h1>
  <Card userName="Mary Jane" btn="Check out here"/>
  <Card userName="Mary" btn="Visit us"/>
  <Card userName=" Jane  " btn="click me" />
  </>
  
  )
}

export default App
