import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISnackbar() {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClick = () => {
        setOpenSnackbar(true)
    }

    const handleClose = (event, reason) => {
        if (reason ==='clickaway') {
            return;
        }
        setOpenSnackbar(false);
    }

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>Kapat</Button>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    
        </>
    )
  return (
    <div>
        <Button onClick={handleClick}>Bana Dokun</Button>
        <Snackbar
            message = {"Ben Sana İnanıyorum"}
            open={ openSnackbar }
            action = {action}
            onClose={handleClose}
            
        />
      
    </div>
  )
}

export default MUISnackbar
