import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'



const Cards3 = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Case number 5-64
        </Typography>
        <Typography variant="h5" component="div">
            Sample Case
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          X vs Y
        </Typography>
        <Typography variant="body2">
          brief description
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Cards3