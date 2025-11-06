import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000";

function App() {
  const getAllUsers = async()=>{
   const response =  await axios.get(`${BASE_URL}/users`);
   console.log(response.data)
    }

    const getUserById = async (userId) => {
      const response = await axios.get (`${BASE_URL}/users/${userId}`);
      console.log(response.data)
    }

    const createUser = async (newUser) => {
      //Post : veri eklmek için kullanılır.
     const response =  await axios.post (`${BASE_URL}/users`,newUser);
      console.log("response", response.data);
    }

    // bilgi güncelleme işlemi
    const updateUser = async (userId, updatedUser) => {
      // put : veri güncellemek için kullanılır.
     await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
    }

    // bilgi silme 
    const deleteUserById = async(userId) => {
      const deleteResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
      console.log(deleteReponse.data);
    }


    useEffect (()=>{
      deleteUserById ("7403");
      // const newUser = {
      //  "username" : "Yusuf",
       // "password" : "6767"
      //}
      //createUser(newUser)
      //updateUser("5631", {
        //"username" : "Muhammed",
        //"password" : "1212"
      //})

    },[])

  return (
    <div>
      hanife
    </div>
  )
}

export default App
