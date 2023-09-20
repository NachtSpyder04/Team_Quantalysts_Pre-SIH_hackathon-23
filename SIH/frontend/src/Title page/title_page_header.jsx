import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TitlePageHeader = () => {
  return (
    <CssBaseline>
      <AppBar sx={{ background: '#333333' }} position='sticky'>
        <Toolbar sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography variant='h5' sx={{ fontFamily: 'Arial', color: '#ffffff' }}>
              CaseSahayak
            </Typography>
            <Typography variant='caption' sx={{ fontFamily: 'Arial', color: '#ffffff' }}>
            One Stop Location for all Pre Trial Information
            </Typography>
          </div>
          <Box>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ marginRight: '10px', backgroundColor: '#ff5722', color: '#ffffff' }}>
                Login
              </Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ backgroundColor: '#4caf50', color: '#ffffff' }}>Register</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </CssBaseline>
  );
};

export default TitlePageHeader;