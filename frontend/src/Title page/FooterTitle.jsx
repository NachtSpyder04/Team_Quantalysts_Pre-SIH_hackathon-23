import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function FooterTitle() {
  return (    
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: '#000524',
        position: 'sticky',
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
        © 2023 All Rights Reserved
      </Typography>
    </Box>
  );
}