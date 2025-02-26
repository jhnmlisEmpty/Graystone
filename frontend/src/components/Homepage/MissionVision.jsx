import React from 'react';

const MissionVision = () => {
  return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
        <section className="bg-white dark:bg-gray-900">
            <div className="text-center gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim, delectus nobis numquam porro velit consequuntur qui eum voluptate iusto natus debitis, incidunt ad et consequatur cum. Dolor, obcaecati facere.</p>
                </div>
                <img className="w-full dark:hidden" src="imahe4.png" alt="dashboard image"/>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="text-center gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full dark:hidden" src="imahe5.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Vision</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias enim, delectus nobis numquam porro velit consequuntur qui eum voluptate iusto natus debitis, incidunt ad et consequatur cum. Dolor, obcaecati facere.</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default MissionVision;