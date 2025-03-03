import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      className="w-full max-w-auto mx-auto"
    >
      <div className="relative group">
        <img src="imahe2.png" alt="Logo" className="object-cover w-full h-auto" />
        <div className='absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        </div>
      </div>
      <div className="relative group">
        <img src="imahe1.png" alt="Logo" className="object-cover w-full h-auto" />
      </div>
      <div className="relative group">
        <img src="imahe3.png" alt="Logo" className="object-cover w-full h-auto" />
      </div>
    </Carousel>
  );
};

export default MyCarousel;