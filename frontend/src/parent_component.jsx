import React from 'react'
import Header from './main page/header'

import { Box } from '@mui/material'

import BasicTabs from './tab_switch'
import StickyFooter from './main page/stickyfooter'


const Parentcomponentmainpage = () => {
  return (
    <div>
        
        <Header/>
        
        <Box fixed sx={{bgcolor:'#F1F1F1'}}>
            <BasicTabs/>   
        </Box>
        <Box sx={{position:'stick'}}>
        <StickyFooter/>
        </Box>
        
        
    </div>
  )
}

export default Parentcomponentmainpage