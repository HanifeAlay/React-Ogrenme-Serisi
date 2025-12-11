import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function MUITextField() {
  return (
    <div>
        <div style={{margin:'15px'}}>
            <TextField label="isim" variant='outlined' /> 
        </div>

        <div style={{margin:'15px'}}>
            <TextField label="isim" variant='filled' color='warning' /> 
        </div>

        <div style={{margin:'15px'}}>
            <TextField label="Şifre giriniz" variant='standard' color='error' helperText = 'Kİmseye gösterme' /> 
        </div>

        <div style={{margin:'15px'}}>
            <TextField label="Hanife Alay" 
                    variant='standard' 
                    color='error' 
                    helperText = 'Kİmseye gösterme'
                    disabled /> 
        </div>

        <div style={{margin:'15px'}}>
            <TextField label = 'Gülümse Tatlım' InputProps= {{
                endAdornment : <InputAdornment position='enn'><AddReactionIcon/></InputAdornment>
                
            }} variant='outlined'  /> 
        </div>




    </div>

  )
}

export default MUITextField
