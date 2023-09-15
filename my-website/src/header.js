import { AppBar, Button, Drawer, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'




const Header = () => {
    const[value,setValue]= useState();
    
  return (
   <React.Fragment>
    <AppBar sx={{background:'#000125'}}>
        <Toolbar>
            <Typography>
                Test
            </Typography>
            <Tabs textColor="inherit"indicatorColor="secondary" value={value} onChange={(e,value)=>setValue(value)} sx={{marginLeft:'100px'}}>
                <Tab label="1111"/>
                <Tab label="222"/>
                <Tab label="3333"/>

            </Tabs>
            <Button sx={{marginLeft:'auto'}}variant="contained"> Login {" "}</Button>
            <Button sx={{marginLeft:'20px'}}variant="contained"> Signup{" "} </Button>
           
        </Toolbar>
      
        
      
    </AppBar>
   </React.Fragment>
  )
}

export default Header