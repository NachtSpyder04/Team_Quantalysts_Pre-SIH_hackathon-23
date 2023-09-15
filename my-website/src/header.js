import { AppBar, Button, CssBaseline, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import GavelIcon from '@mui/icons-material/Gavel';


const Header = () => {
    
    
  return (
   <React.Fragment>
    <CssBaseline>
    <AppBar sx={{background:'#000125'}} position='stick'>
        <Toolbar>
            <GavelIcon sx={{marginRight:'10px'}}/>
            <Typography>
                MY_WEBSITE
            </Typography>
            
            <Button sx={{marginLeft:'auto'}}variant="contained"> 
            <AddIcon/>
            Add</Button>
            
           
        </Toolbar>
      
        
      
    </AppBar>
    </CssBaseline>
   </React.Fragment>
  )
}

export default Header