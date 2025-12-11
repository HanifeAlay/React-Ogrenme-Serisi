import React from 'react'
import Grid from '@mui/material/GridLegacy';

function MUIGrid() {
  return (
    <div>
        <Grid container>
            <Grid xs={12} sm = {6} md = {8} lg = {9}>Item</Grid>
            <Grid xs={12} sm = {6} md = {4} lg = {3}>Item</Grid>
            

            
        </Grid>
    </div>
  )
}

export default MUIGrid
