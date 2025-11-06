import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const BASE_URL = "http://localhost:3002";

function App() {
  // 1. İşlem Veri Tabanından Veri Çağırma 
  const getAllstudents = async () => {
    const response = await axios.get(`${BASE_URL}/students`);
    console.log(response)
  }

  // 2. İşlem ID ile veri Çağırma
  const getStudenById = async (studentId) => {
    const response = await axios.get(`${BASE_URL}/students/${studentId}`);
    console.log(response.data)
  }
   
  // 3. İşlerm Yeni veri ekleme 
  const createStudent = async (newStudent) => {
    const response = await axios.post(`${BASE_URL}/students`, newStudent);
    console.log("response" + response.data);
  }

  // 4.İşlem  Veri güncelleme 
  const updateStudent = async (studentId, updateStudent) => {
    const response = await axios.put(`${BASE_URL}/students/${studentId}`, updateStudent);
    console.log(response.data)
  }

  // 5. İşlem Veri silme
  const deleteStudentById = async (studentId) => {
    await axios.delete(`${BASE_URL}/students/${studentId}`);
    console.log(deleteResponse.data);
  }

  useEffect (() => {
    // getAllstudents(); : Tüm veriyi çağırma.
    // getStudenById(3); : ID ile veri çağırma.
    
   // const newStudent = { : Yeni bir veri ekleme.
     // "studentName" : "Yusuf",
      //"password" : "1111"
    //}
    // createStudent(newStudent); : Eğer bunu u şekilde veriden sonra eklemezsen yanlış çalışır.

    //updateStudent ("7c57", {  : Veri güncelleme
      //"studentName" : "Muhammed",
      //"password" : "9898"
    // })

    // deleteStudentById ("7c57"); :  ID ile veri silme 


  },[]);

  return (
    <div>
      Hanife
    </div>
  )
}

export default App
