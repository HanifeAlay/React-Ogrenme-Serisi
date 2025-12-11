import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MUISelect() {


  return (
    <div>
         <FormControl>
            <InputLabel>Para Birimi</InputLabel>
            <select>
                <MenuItem>Türk Lirası</MenuItem>
            </select>
         </FormControl>
    </div>
  )
}

export default MUISelect
