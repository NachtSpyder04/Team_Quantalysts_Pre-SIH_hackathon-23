import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'
import GavelIcon from '@mui/icons-material/Gavel';
import { Link } from 'react-router-dom';

const Titlepageheader=()=> {
  return (
    <CssBaseline>
   <AppBar sx={{background:'#333333'}} position='sticky'>
    <Toolbar sx={{padding:'20px'}}>
      <GavelIcon sx={{scale:'inherit'}}/>

        <Typography variant='h3'> My-website </Typography>
        <Box sx={{marginLeft:'auto'}}>
        <Link to="/signin"> 
        <Button sx={{marginLeft:'auto',marginRight:'5px'}}variant="contained"  > 
         
             Login </Button> </Link>
             <Link to="/signup">
         <Button variant="contained" sx={{marginLeft:'5px'}}> 
             Register </Button></Link></Box>
    </Toolbar>
   </AppBar>
   </CssBaseline>
  )
}

export default Titlepageheader