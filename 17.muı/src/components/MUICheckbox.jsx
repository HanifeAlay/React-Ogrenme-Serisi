import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Checkbox } from '@mui/material';

function MUICheckbox() {
  return (
  
      <FormControl component="fieldset">
        <FormLabel>Eğitim Durumu</FormLabel>
            <FormGroup>
                <FormControlLabel
                    value="top"
                    control={<Checkbox/>}
                    label="ilkokul"
                    labelPlacement="end"
                />
           </FormGroup>
      </FormControl>
    
  )
}

export default MUICheckbox
