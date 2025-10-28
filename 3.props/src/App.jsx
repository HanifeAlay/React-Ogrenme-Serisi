import { useState } from 'react'

import './App.css'
import Product from './Product'

function App() {
  

  return (
    <div>
      <Product productName = "Ayakkabı" price = {3200} />
      <hr />
      <Product productName = "Pantolon" price = {950}/>
    </div>
       
  )
}

export default App
