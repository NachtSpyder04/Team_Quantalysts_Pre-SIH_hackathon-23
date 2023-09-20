import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'

import { Link } from 'react-router-dom';

const Titlepageheader=()=> {
  return (
    <CssBaseline>
   <AppBar sx={{background:'#333333'}} position='sticky'>
    <Toolbar sx={{padding:'20px'}}>
      

        <Typography variant='h3'> CaseSahayak </Typography>
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