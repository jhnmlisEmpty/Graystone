import React from 'react';

const Programs = () => {
  return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
         <section className="bg-gray-100 dark:bg-gray-900" >
            <div className="gap-4  text-center items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" >
                <div className="font-light text-gray-900 sm:text-lg dark:text-gray-400 col-span-2" >
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Programs Offered</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptates facilis doloribus qui blanditiis unde error, accusantium saepe nulla cum ut quos itaque, dolorum vero ipsam cumque esse impedit animi!</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8" >
                    <img className="w-full rounded-lg" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="office content 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="office content 2"/>
                    <img className="w-full rounded-lg" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="office content 1"/>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8" >
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="office content 2"/>
                    <img className="w-full rounded-lg" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="office content 1"/>
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="office content 2"/>
                    
                </div>
                
            </div>
        </section>
    </div>
  );
};

export default Programs;