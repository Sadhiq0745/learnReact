import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
import Login from './Login'

function Profile() {
    const {user} = useContext(UserContext)
    
    if(!user) return <div>Pleaseee login....</div>

    return <div>Welcome {user.userName}</div>
}

export default Profile