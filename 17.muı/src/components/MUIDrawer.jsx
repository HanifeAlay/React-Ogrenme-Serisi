import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {
  return (
    <div>
      <Button>AÇ</Button>
      
        <Drawer open={true}>
           <Box sx={{width:'500px'}}> 
                <p>Lorem ipsum dolor sit amet.</p>
           </Box>
        </Drawer>
     
    </div>
  )
}

export default MUIDrawer
