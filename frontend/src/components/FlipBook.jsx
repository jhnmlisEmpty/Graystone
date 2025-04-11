import HTMLFlipBook from 'react-pageflip';
import React from 'react';

const FlipBook = () => {
return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
        <section className="bg-white" >
            <HTMLFlipBook width={500} height={600}>
                <div className="demoPage">
                    <img src="" alt="" />
                </div>
                <div className="demoPage">
                    <img src="EMS1.jpg" alt="Page 1" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 2" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 3" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 4" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 5" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 6" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 7" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 8" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 9" />
                </div>
                <div className="demoPage">
                    <img src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="Page 9" />
                </div>
            </HTMLFlipBook>
        </section>
    </div>
);
};

export default FlipBook;