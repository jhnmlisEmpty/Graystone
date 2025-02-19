import React from 'react';
import MyCarousel from './Homepage/Carousel';
import MissionVision from './Homepage/MissionVision';
import Announcement from './Homepage/Annoucement';
import MyCalendar from './Homepage/Calendar';
import Programs from './Homepage/Programs';
import Carousel from './Carousel1';

const slides = [
    "https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg",
    "https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg",
    "https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg",
    "https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg",
    "https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"
]



const Homepage = () => {
    return (
        
        <div>
            
            <MyCarousel/>
            <MissionVision/>
            <Announcement/>
            <MyCalendar/>
            <Programs/>

            {/* <section>
            <main className='Homepage'>
            <div className="max-w-lg">
            <Carousel autoslide={true}>
                {slides.map((s) => (
                    <img src={s} />
                ))}
            </Carousel>
         </div>

        </main>
            </section> */}
        </div>
    );
};

export default Homepage;