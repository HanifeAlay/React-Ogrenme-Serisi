import { useState } from 'react'

import './App.css'
import Login from './login' 
// import etmek için kullandıgımız login ismini dileğimiz gibi değiştirebilirz.

import { users } from './login'
import Hello from './Hello'
// sadece export yaptıgınızda bu şekilde belirtmelisiniz.


function App() {

  return (
    <div>
      {/* <Login/> */}
      <Hello/>
      
      
    </div>
  )
}

export default App
