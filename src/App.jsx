import React from "react";
import Navbar from "./components/navbar"
import Body from "./components/body"


// const [array, setArray] = React.useState()


function App() {
  return ( 
    <div>
      <header>
        <Navbar />
      </header>
      <article>
        <Body/>
      </article>
      <footer>
       made by @pankaj
      </footer>
    </div>
   
  )
}

export default App