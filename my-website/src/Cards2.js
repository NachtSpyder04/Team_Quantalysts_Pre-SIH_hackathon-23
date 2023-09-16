import { Search } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardActionArea, Grid, InputAdornment, TextField, Typography } from '@mui/material';
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </CardActionArea>
    
    </Grid>
  )
}

export default Cards2