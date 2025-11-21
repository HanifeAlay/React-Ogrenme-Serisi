import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';

function App() {

  
  return (
   <>
    <UserList/>
   </>
  )
}

export default App
