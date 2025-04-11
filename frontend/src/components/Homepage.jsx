import React from 'react';
import MyCarousel from './Homepage/Carousel';
import MissionVision from './Homepage/MissionVision';
import Announcement from './Homepage/Annoucement';
import MyCalendar from './Homepage/Calendar';
import Programs from './Homepage/Programs';
import FlipBook from './FlipBook';



const Homepage = () => {
    return (
        <div>
            <MyCarousel/>
            <MissionVision/>
            {/* <Announcement/> */}
            {/* <MyCalendar/> */}
            <Programs/>
            {/* <FlipBook/> */}
        </div>
    );
};

export default Homepage;