import * as React from 'react';
import { CssBaseline } from '@mui/material';
import newpic from './assets/newpic.jpg'


export default function Images() {
  return (
   <CssBaseline>
    <img src={newpic} alt='Lawpic' width={1920} />
    
    </CssBaseline>
  
  );
}

