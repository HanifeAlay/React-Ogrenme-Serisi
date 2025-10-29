import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  
  useEffect(() => {
    console.log("Her zaman Çalışır")
  }) // buraya arry koymazsanız eğer sayfanızda her değişiklik yaptıgınızda tekrardan çalışır.

  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")
  }, [])

  useEffect(() => {
    console.log("ilk render edildiğinde ve FİRSTNAME state değeri değiştiğinde çalışır")
  }, [firstName])

  useEffect(() =>{
    console.log("ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır")
  }, [lastName])

  return (
    <div>
      <div><button onClick={() => setFirstName("Hanife")}>Adı değiştir</button></div>
      <div><button onClick={() => setLastName("Alay")}>Soyismi değiştir</button></div>
    </div>
  )
}

export default App
