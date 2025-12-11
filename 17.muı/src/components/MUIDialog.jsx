import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);


  return (
    <div>
      <Button onClick={() => setDialogOpen(true)} >Dialog</Button>
      <Dialog open ={dialogOpen} onClose = {() => setDialogOpen(false)}>
        <DialogTitle>Sou</DialogTitle>
        <DialogContent>
            <DialogContentText>Başaracağına İnanıyormusun ??</DialogContentText>
        </DialogContent>

        <DialogActions>
            <Button>Evet</Button>
            <Button>Kesinlikle Evet</Button>
        </DialogActions>

      </Dialog>
    </div>
  )
}

export default MUIDialog
