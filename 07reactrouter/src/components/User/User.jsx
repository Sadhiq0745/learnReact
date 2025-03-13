import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()

   // Extract the user ID from the URL parameter
  return (
    <div className='text-center bg-slate-400 text-2xl text-amber-90 p-3'> User : {userid}</div>
  )
}

export default User