import React from 'react'
import '../css/currency.css'
import { FaRegCircleRight } from "react-icons/fa6";
import { useState } from 'react';
import axios from "axios"

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_iVcI7Q8R0wf05XW3JKSlK3vPpR7Ni3AnIhLlIjBc";



function Currency() {
  const[amount, setAmound] = useState();
  const[fromCurrency, setFromCurrency] = useState('USD');
  const[toCurrency, setToCurrency] = useState('TRY');
  const[result, setResult] = useState(0);

  const exchange = async () => {
    //console.log(amount)
    //console.log(fromCurrency)
    //console.log(toCurrency)

   const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
  const result = (response.data.data[toCurrency] * amount).toFixed(2);
  setResult(result);
  }

  
  return (
    <div className='currency-div'>
        <div style={{background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)', backgroundClip: 'text', color: 'transparent', fontSize: '25px', marginTop: '-20px'}}>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div>
            <input
            value={amount}
            onChange={(e) => setAmound(e.target.value)}
            type="number" 
            className='amount'/>
      <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
        <option>USD</option>
        <option>EUR</option>
        <option>TRY</option>
      </select>
        <FaRegCircleRight style={{fontSize: '25px', color: 'white', marginRight: '10px'}} />
       <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
        
      </select>

      <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='amount'/>
        </div>

        <div >
            <button
            onClick={exchange}
            className='btn-grad'>ÇEVİR</button>
        </div>
    </div>
  )
}

export default Currency
