import { useState } from 'react'

import './App.css'

function App() {
  /* const[firstName, setFirstname] = useState('Hanife');
 const handleChange = () => {
    setFirstname("Ayşenur")
  }*/
    const [count, setCount] = useState(0);

    const arttir = () => {
      setCount (count + 1)
    }
    const azalt = () => {
      setCount (count - 1)
    }

    console.log("component render edildi")
    
  return (
    <div>
      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div> <hr />
      <div><button onClick={azalt}>Azalt</button></div>
      {/*<div><button onClick={()=>{setFirstname("Ayşenur")}}>Değiştir</button></div>*/}
      {/*<div><button onClick={handleChange}>Değiştir</button></div>*/}


    </div>
  )
}

export default App
