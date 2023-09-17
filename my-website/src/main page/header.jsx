import { AppBar, Box, Button, CssBaseline, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import GavelIcon from '@mui/icons-material/Gavel';
import { Link } from 'react-router-dom';



const Header = () => {
    
    
  return (
   <React.Fragment>
    <CssBaseline>
    <AppBar sx={{background:'#000125'}} position='sticky'>
        <Toolbar>
            <GavelIcon sx={{marginRight:'10px'}}/>
            <Typography>
                MY_WEBSITE
            </Typography>
            <Box sx={{marginLeft:'auto'}}>
            <Link to="/add">
            <Button sx={{marginLeft:'auto'}}variant="contained"> 
            <AddIcon/>
            Add</Button>
            </Link>
            </Box>
            
           
        </Toolbar>
      
        
      
    </AppBar>
    </CssBaseline>
   </React.Fragment>
  )
}

export default Header