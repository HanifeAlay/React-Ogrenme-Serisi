import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // jsx: "{ }" jsx dediğmiz yapı bu süslü parantezlerin içi oluyor aslında. JS ve HTML kodununu birleştirir bu süslü parantezler.
  // Buraya JavaScrip kodları yazılır.
  //let a = 15;
 
  let vize1 = 60;
  let vize2 = 40;

  let sonuc = false;

  let isimler = [
   "Ahmet",
   "Ayşe",
   "Fatma",
   "Ali"
  ]

  return (
    // HTML Kodalrı yazılır.
    <div>
     
     {
     isimler .map((isim, index) =>(
     <div key={index} style={{backgroundColor: "pink"}}> 
      {isim}
     </div>
     ))
     }
    </div>
  )
}

export default App
