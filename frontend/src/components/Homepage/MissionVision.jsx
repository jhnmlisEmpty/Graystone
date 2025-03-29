import React from 'react';

const MissionVision = () => {
  return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
        <section className="bg-white ">
            <div className="text-center gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Mission</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg ">We provide quality needs-based learning programs that are geared towards helping students achieve their professional and career goals.</p>
                </div>
                <img className="w-full" src="imahe4.png" alt="dashboard image"/>
            </div>
        </section>

        <section className="bg-white">
            <div className="text-center gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full" src="imahe5.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Vision</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">Graystone Institute of the Philippines (Training & Assessment Center), Inc. envisions to have acclaimed students and to be a leader and management training provider</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default MissionVision;