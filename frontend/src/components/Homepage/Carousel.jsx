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
      className="w-full max-w-4xl mx-auto py-4"
    >
      <div className="relative group">
        <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Logo" className="object-cover w-full h-auto" />
        <p className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Graytone Institute 1</p>
      </div>
      <div className="relative group">
        <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Logo" className="object-cover w-full h-auto" />
        <p className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Graystone Institute 2</p>
      </div>
      <div className="relative group">
        <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Logo" className="object-cover w-full h-auto" />
        <p className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Graystone Institute 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;