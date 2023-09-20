import React from 'react'
import Titlepageheader from './title_page_header'
import Images from './Images'
import { Box, Toolbar, Typography } from '@mui/material'
import BasicTabs from '../tab_switch'
import FooterTitle from './FooterTitle'


const Parentcomponenttitlepage = () => {
  return (
    <React.Fragment>
    <div>    
      <Titlepageheader/>
      <Images/>
    
      <Box
          sx={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'#F1F1F1',
            paddingTop:'5px',
            paddingBottom:'5px'

          }}>
            <Toolbar>
             <Typography variant='h3'sx={{alignItems:'center'}}> Let's get started </Typography>
             </Toolbar>
             <BasicTabs/>

          </Box>
          <FooterTitle />
          
    </div>
    </React.Fragment>

    
  )
}

export default Parentcomponenttitlepage