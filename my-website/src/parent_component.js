import React from 'react'
import Header from './header'
import Tabswitch from './tab_switch'
import { Box } from '@mui/material'
import Cards from './Cards1'
import BasicTabs from './tab_switch'


const Parent_component = () => {
  return (
    <div>
        
        <Header/>
        
        <Box fixed sx={{bgcolor:'#F1F1F1'}}>
            <BasicTabs/>
               

            
                
        </Box>
        
        
    </div>
  )
}

export default Parent_component