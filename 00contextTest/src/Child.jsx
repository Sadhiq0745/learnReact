import React from "react";
import UserContext from "./userContext";
import { useContext } from "react";

function Child(){

    const userName = useContext(UserContext)
    return <h1>Hello {userName}</h1>
}

export default Child