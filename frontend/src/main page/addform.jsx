import { Avatar, Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

import DateTime from './Datetime';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const typecases = [
    {
      value: '0',
      label: 'Criminal',
    },
    {
      value: '1',
      label: 'Civil',
    },
    {
      value: '2',
      label: 'Family',
    },
   
  ];





function Addform() {
  return (
    <Container maxWidth='lg' sx={{backgroundColor:'#F1F1F1',}}> 
         <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main',marginTop:'20px' }}>
            <AddBoxIcon /> 
          </Avatar>
          <Typography component='h2' variant='h5'> Add Cases </Typography>
          <Container>
          <TextField label="Case number" fullWidth variant='filled' sx={{marginTop:'20px'}} size='normal'/>
          <TextField label="Name of the case" fullWidth variant='filled' sx={{marginTop:'20px'}} size='normal'/>
          <TextField label="Brief introduction of case" fullWidth variant='filled' sx={{marginTop:'20px'}} multiline rows={5}/>
          <TextField
           label="Type of case"  variant='filled' sx={{marginTop:'20px',}} size='normal' select fullWidth
        >
            
          {typecases.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <DateTime />

        
       
          </Container>
         
         <Link to="/main">
          <Button variant='contained' color='secondary' sx={{marginTop:'10px', marginBottom:'20px'}}>
            <Typography variant='h5'> Submit </Typography>
        </Button></Link>
    
          

        </Box>
     
    </Container>
  )
}

export default Addform