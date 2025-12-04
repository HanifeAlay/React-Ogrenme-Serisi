import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSchemas';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout (() =>{
            action.resetForm();
        }, 2000)
    }

   const { values, errors, handleChange, handleSubmit } = useFormik({
     initialValues: {
       name : '',
       email: '',
       age: '',
       password: '',
       confirmPassword: '',
       term: '',
     },
     validationSchema : registerFormSchemas,
     onSubmit: submit
   });

   return (
    <div>
        <form onSubmit={handleSubmit}>

            <div className='inputDiv'>
            <label>Name SurName</label>
            <input type="text" 
                    id='name' 
                    placeholder='İsim Soyisim Giriniz'
                    value={values.name}
                    onChange={handleChange}/>
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
           </div>


           <div className='inputDiv'>
            <label>Email</label>
            <input type="text" 
                    id='email' 
                    placeholder='Email giriniz'
                    value={values.email}
                    onChange={handleChange}/>
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
           </div>

           <div className='inputDiv'>
            <label>Yaş</label>
            <input type="number" 
                    id='age' 
                    placeholder='Yaşınızı giriniz'
                    value={values.age}
                    onChange={handleChange}/>  
                    {errors.age && <p style={{color: 'red'}}>{errors.age}</p>}          
           </div>

           <div className='inputDiv'>
            <label>Şifre</label>
            <input type="password" 
                    id='password' 
                    placeholder='Yaşınızı giriniz'
                    value={values.password}
                    onChange={handleChange}/>
                    {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}            
           </div>

           <div className='inputDiv'>
            <label>Şifre Tekrar</label>
            <input type="password" 
                    id='confirmPassword' 
                    placeholder='Şİfrenizi tekrar giriniz'
                    value={values.confirmPassword}
                    onChange={handleChange}/>
                    {errors.confirmPassword && <p style={{color: 'red'}}>{errors.confirmPassword}</p>}            
           </div>

           <div className='inputDiv'>
           
            <input type="checkbox" 
                    id='term' 
                    
                    value={values.term}
                    onChange={handleChange}/>     
            <label>Kullanıcı sözmesini kabul ediyorum</label>
            {errors.term && <p style={{color: 'red'}}>{errors.term}</p>}       
           </div>

           <div>
                <button type='submit' className='btn-grad'>Kaydet</button>
           </div>
        </form>
    </div>
  )
}

export default RegisterForm
