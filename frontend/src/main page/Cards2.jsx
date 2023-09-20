
import {  Card, CardContent, CardActionArea, Grid, TextField, Typography } from '@mui/material';
import React from 'react'



const Cards2 = () => {
  return (
    <Grid>
      
      <TextField fullWidth label="Search here" variant="filled"/>
      
    <CardActionArea>

    
    <Card  varient="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Case number 2-45
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
      
    </Card>
    </CardActionArea>
    <CardActionArea>    
    <Card  varient="outlined"sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Case number 2-45
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
    
    </Card>
    </CardActionArea>
    
    </Grid>
  )
}

export default Cards2