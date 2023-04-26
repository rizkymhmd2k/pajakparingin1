'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn, boxes } from '../utils/motion';


const Hero = () => (

    <section id="home" >

        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="bg-white relative px-4 pt-16  lg:py-20 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full flex lg:flex-row flex-col ">

            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-1 lg:ml-16  flex justify-center items-center ">
                <div className="mb-16 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div className='flex justify-center lg:justify-start items-center'>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                website
                            </p>
                        </div>
                        <div className='flex justify-center lg:justify-start items-center lg:items-start flex-col'>
                        <h2 className="max-w-lg mb-1 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-none">
                            KP2KP Paringin
                            <br className="hidden md:block" />
                            {/* Paringin{' '} */}
                            <span className="inline-block text-deep-purple-accent-400">
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-xl text-center lg:text-left">
                            Selamat datang di website resmi Kantor Pajak Paringin. Temukan kemudahan dalam memenuhi kewajiban pajak di Kantor Pajak Paringin.
                        </p>
                        </div>

                    </div>
                    <div className="flex items-center justify-center lg:justify-start">
                        <a
                            href="/#contact"
                            className="inline-flex bg-yellow-500 hover:bg-blue-800 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Hubungi Kami
                        </a>
                        

                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex-1 flex justify-center items-center'>
                {/* <div className="flex justify-center w-full h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end"> */}
                <div className="flex justify-center w-3/5 h-[100%] lg:overflow-visible lg:w-3/3 xl:w-[60%] ">

                    <div className='w-full'>
                        <div className="flex items-center h-6 rounded-t bg-gray-200 border-b border-gray-500 text-center text-black" id="headerTerminal">
                            <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                            </div>
                            <div className="ml-2 border-yellow-900 bg-yellow-500  shadow-inner rounded-full w-3 h-3" id="minbtn">
                            </div>
                            <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                            </div>
                        </div>



                        <img
                            //   src="https://kitwind.io/assets/kometa/full-browser.png"
                            src="tuguparingin.png"

                            className="object-cover object-right-bottom	 w-[100%] h-[full] max-w-xl -mb-16 rounded shadow-2xl lg:ml-0 xl:ml-0 lg:-mb-24 xl:-mb-0 lg:h-auto lg:max-w-screen-md"
                            alt=""
                        />

                    </div>

                </div>
            </motion.div>


        </motion.div>

    </section>



);

export default Hero;

{/* <section id="home" className={`${styles.yPaddings} relative flex-col flex hero-gradient`}>
<div className='flex flex-col justify-center items-center  '>
    <h2 className={`${styles.heroHeading} `}>Pajak Paringin</h2>
    <p className='pb-5'>website layanan pepajakan cihuy mantap</p>
    <motion.a
        whileHover={{ scale: 1.1 }}
        href="#contact" className="bg-slate-300 py-3 px-5 text-sm font-medium text-center text-black rounded-lg items-center justify-center w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >Contact Me
    </motion.a>


</div>
<div className='flex w-full pt-10 items-center justify-center z-10'>
    <img
        src="/hero-pajak.png"
        alt="pajak-paringin"
        className="w-full sm:w-[65%] flex object-contain"
    />
</div>
<div className='hero-clip z-0' />

</section> */}




//pecobaan1

    // <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
    //     <div className="max-w-xl mx-auto lg:max-w-screen-xl">
    //         <div className="mb-16 lg:max-w-lg lg:mb-0">
    //             <div className="max-w-xl mb-6">
    //                 <div>
    //                     <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
    //                         Brand new
    //                     </p>
    //                 </div>
    //                 <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
    //                     The quick, brown fox
    //                     <br className="hidden md:block" />
    //                     jumps over{' '}
    //                     <span className="inline-block text-deep-purple-accent-400">
    //                         a lazy dog
    //                     </span>
    //                 </h2>
    //                 <p className="text-base text-gray-700 md:text-lg">
    //                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //                     accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    //                     quae. explicabo.
    //                 </p>
    //             </div>
    //             <div className="flex items-center">
    //                 <a
    //                     href="/"
    //                     className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
    //                 >
    //                     Get started
    //                 </a>
    //                 <a
    //                     href="/"
    //                     aria-label=""
    //                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    //                 >
    //                     Learn more
    //                 </a>
    //             </div>
    //         </div>
    //     </div>

    //     {/* <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end"> */}
    //     <div className="justify-center w-full h-full  mx-auto block overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">


    //         <div className='max-w-max'>
    //             <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
    //                 <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
    //                 </div>
    //                 <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
    //                 </div>
    //                 <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
    //                 </div>
    //             </div>

    //             <img
    //                 src="/tuguparingin.png"
    //                 //   src="https://kitwind.io/assets/kometa/full-browser.png"
    //                 //   className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
    //                 className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml- xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"

    //                 alt=""
    //             />

    //         </div>


    //     </div>
    // </div>
