import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';






export default function StickyFooter() {
  return (    
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            
            backgroundColor:'#000524' , 
              position:'fixed', left:0, bottom:0, width:1920,  
          }}
        >
          
            <Typography variant="body1"sx={{color:'#FFFFFD'}}>
              footer can be found here.
            </Typography>
           
          
            </Box>
  );
}