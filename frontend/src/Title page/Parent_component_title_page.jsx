import React from 'react'
import Titlepageheader from './title_page_header'
import Images from './Images'
import { Box, Toolbar, Typography } from '@mui/material'
import BasicTabs from '../tab_switch'
import FooterTitle from './FooterTitle'


const Parentcomponenttitlepage = () => {
  return (
    <React.Fragment>
      <Titlepageheader />
      <Images />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#F1F1F1',
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Typography variant='h3' sx={{ marginBottom: '20px', color: '#333333', fontFamily: 'Times' }}>
          Case Contents
        </Typography>
        <BasicTabs />
      </Box>

      <FooterTitle />
    </React.Fragment>
  );
};

export default Parentcomponenttitlepage