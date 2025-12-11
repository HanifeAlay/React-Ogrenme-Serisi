import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import Tesla from '../image/tesla2.jpg';

function MUICard() {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Tesla"
                height="200"
                
                image={Tesla}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Tesla
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Satın Al</Button>
                <Button size="small">İncele</Button>
            </CardActions>
        </Card>

    )
}

export default MUICard
