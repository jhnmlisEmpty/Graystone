import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Announcement = () => {
    return(
        <div>
            <div className='mx-auto max-w-screen-xl text-center'>
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Announcement</h2>
                <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, adipisci! Sunt, sit? Voluptatibus, quas voluptates repellat dolore harum iste quos nostrum impedit assumenda earum! Necessitatibus nesciunt dicta provident expedita quasi.</p>
            </div>
            <Carousel
                  showThumbs={false}
                  autoPlay
                  infiniteLoop
                  showStatus={false}
                  showIndicators={false}
                  className="w-full max-w-4xl mx-auto"
                >
                <div className="relative group">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full dark:hidden" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Announcement 1</h2>
                            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim, delectus nobis numquam porro velit consequuntur qui eum voluptate iusto natus debitis, incidunt ad et consequatur cum. Dolor, obcaecati facere.</p>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full dark:hidden" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Announcement 2</h2>
                            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim, delectus nobis numquam porro velit consequuntur qui eum voluptate iusto natus debitis, incidunt ad et consequatur cum. Dolor, obcaecati facere.</p>
                        </div>
                    </div>
                </div>
                  
                </Carousel>
        </div>
    );
};

export default Announcement;


