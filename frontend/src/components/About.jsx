import React from 'react';

const About = () => {
return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full" src="GIPPODUIM.jpg" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Graystone Institute of the Philippines</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magnam facere dicta enim nobis maxime, debitis culpa ab nostrum provident. Natus architecto labore blanditiis at cumque nulla dolorum porro fugit.</p>
                    <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 mx-auto max-w-screen-xl">
                <div className="text-center">
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Organizational Chart</h2>
                    <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae eveniet nulla quae harum eos quis dolor amet laboriosam eum illum, quam minus maxime. Sint quibusdam cum necessitatibus consequuntur totam!.</p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 px-4 py-8 mx-auto max-w-screen-xl sm:grid-cols-1 md:grid-cols-2'>
                <img className="w-24 rounded-full flex justify-self-center col-span-2 h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center col-span-2 h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
                <img className="w-24 rounded-full flex justify-self-center h-24" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg" alt="dashboard image"/>
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>

        <section>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Location</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4403.544470239085!2d120.33975957570546!3d16.04581818463032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167c88c69d88b%3A0xf0d58d0c0cbe59dd!2sGRAYSTONE%20INSTITUTE%20of%20the%20PHILIPPINES%20(TRAINING%20%26%20ASSESSMENT%20CENTER)%20INC.!5e1!3m2!1sen!2sph!4v1739931622880!5m2!1sen!2sph"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className='justify-self-center'
                ></iframe>
            </div>
        </section>

        <section>
            <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Developer</h2>
                <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt facere maiores excepturi iure voluptates reiciendis eos! Modi sapiente expedita, minus adipisci quam necessitatibus atque magnam hic, quod voluptate incidunt amet.</p>
                <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6'>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <img className="w-25 h-25 rounded-full" src="https://sgimage.netmarble.com/images/netmarble/sololv/20240105/kpf91704430388393.jpg"/>
                        <blockquote>Developer 1</blockquote>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
};

export default About;