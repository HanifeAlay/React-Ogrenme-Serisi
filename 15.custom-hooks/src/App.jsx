import { useState } from 'react'
import './App.css'
import useToggle from './hooks/useToggle'

function App() {
  const {open, change} = useToggle();

  return (
    <div>
      {open && <div style={{width:'100px', height:'100', backgroundColor:'pink'}}>Çalış çalış boş yapma</div>}
      
      <button onClick={change}>{open ? 'Gizle' : 'göster'}</button>
    </div>
  )
}

export default App
