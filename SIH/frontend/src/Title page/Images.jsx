import * as React from 'react';
import img1 from './assets/img1.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import SimpleImageSlider from 'react-simple-image-slider';

export default function App() {
  const sliderImages = [
    {
      url: img1,
    },
    {
      url: img3,
    },
    {
      url: img4,
    },
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '0px' }}>
      <SimpleImageSlider
        width={1520}
        height={700}
        images={sliderImages}
        showNavs={true}
        navStyle={{ background: '#333', borderRadius: '50%', color: '#fff' }}
        navSize={25}
        navMargin={5}
        slideDuration={0.5}
        showBullets={false}
        style={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}
      />
    </div>
  );
}