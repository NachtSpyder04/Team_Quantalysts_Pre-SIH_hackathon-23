import * as React from 'react';
import { CssBaseline, ImageList, ImageListItem } from '@mui/material';
import newpic from './assets/newpic.jpg'


export default function Images() {
  return (
   <CssBaseline>
    <ImageList cols={1}>
      <ImageListItem>
    <img src={newpic} alt='Lawpic' width={1920} /></ImageListItem>
    </ImageList>
    </CssBaseline>
  
  );
}

