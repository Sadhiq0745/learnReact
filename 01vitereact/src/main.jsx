import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// In this we can create fcuntiin in the main.jsx and run here it self
// we can use the global declared variable also in the any function ...
const userVaiable ="Here we used the Varibale that has been created to use ,to show in the output "

function MyApp(){
  return(
    <h3>Here im created the function in Same Main Jsx , where rendering is done ....!! /n
      {userVaiable}
    </h3>
  )
}


// In the reactt js eeven if we create the tree sturcture and pass it for rendering it wiil not procees
// beacues they have some syntax , just how it is defined below....
// we cann even creae new elements ....
// babel is the bunlder that will parse ... md turnn it into the tree...
const reactElement = React.createElement(
  'a',
  {href: 'http://google.com', target: '_blank'},
  'click me' 

  /* 'p',
  {color:'green'},
  'My name is sadhiq',
  userVaiable */
)
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App/>
  </StrictMode>
  
  //reactElement
  
)
