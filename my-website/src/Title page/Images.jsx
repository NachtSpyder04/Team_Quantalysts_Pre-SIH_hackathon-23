import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CssBaseline } from '@mui/material';



export default function Images() {
  return (
   <CssBaseline>
    <ImageList sx={{  height: 500}} cols={4} rowHeight={500}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format0`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
         
        </ImageListItem>
        
      ))}
    </ImageList>
    </CssBaseline>
    

    
    
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e',
    title: '0',
  },
  {
    img: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33',
    title: '1',
  },
  {
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    title: '2',
  },
  {
    img: 'https://images.unsplash.com/photo-1447968954315-3f0c44f7313c',
    title: '3',
  },
  
];