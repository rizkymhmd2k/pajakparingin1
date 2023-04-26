'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, slideIn, boxes } from '../utils/motion';

const Phone = () => (
    <section id="contact" className={`${styles.yPaddings} ${styles.xPaddings} relative flex-col flex bg-white`}>


        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} relative mx-auto flex lg:flex-row flex-col gap-8 md:justify-center md:items-center`}>

            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className={`flex-[1] ${styles.flexCenter}`}>
                <div className='relative '>
                    <div className={`w-full relative z-10 flex items-center justify-center lg:justify-center`}>
                        <img
                            src="/hape3.png"
                            alt="get-started"
                            className="w-[66%] block object-contain"
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] xl:w-[440px] xl:h-[440px] rounded-full bg-yellow-400"></div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className={`flex-[1] justify-start items-start flex flex-col mb-28 md:mb-0 lg:py-28`}>
                {/* <h2 className={`mt-[8px] font-bold md:text-[65px] text-[40px] text-black `}>
                    Konsultasi perpajakan secara online disini</h2> */}
                <div className='flex justify-center lg:justify-start items-center lg:items-start flex-col'>
                    <h2 className="max-w-lg mb-4 lg:mb-16 font-sans text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-[2.75rem] sm:leading-none">
                        Konsultasikan masalah {' '}

                        <br className="hidden md:block" />
                        perpajakan anda disini{' '}

                        

                    </h2>

                    <p className="text-base max-w-[40rem] md:max-w-none text-gray-700 md:text-lg mb-10 lg:mb-6 text-center lg:text-left">
                    Butuh konsultasi perpajakan tapi tidak punya waktu untuk datang ke kantor? Kami menyediakan layanan konsultasi perpajakan secara online yang dapat diakses dari mana saja. </p>
                </div>



                


                <div className='flex flex-wrap justify-center items-center lg:justify-start md:items-start flex-row w-full'>
                    <a type="button" href='https://wa.me/6282311837808' className="filter grayscale hover:filter-none text-gray-900  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 flex flex-row justify-center items-center w-62">
                        <img src='/whatsapp1.svg' alt='next' className='w-[50px] pr-4 ' />
                        Nomor layanan 1</a>
                    <a type="button" href='https://wa.me/62811507353' className=" filter grayscale hover:filter-none text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 flex flex-row justify-center items-center w-62">
                        <img src='/whatsapp1.svg' alt='next' className='w-[50px] pr-4' />
                        Nomor layanan 2</a>
                    <a type="button" href="https://play.google.com/store/apps/details?id=com.kp2kpparingin.yudijosse" className="filter grayscale hover:filter-none text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 flex flex-row justify-center items-center w-62">
                        <img src='/playstore.svg' alt='next' className='w-[45px] pr-4' />
                        Aplikasi Pajak</a>

                </div>





            </motion.div>
        </motion.div>


    </section>
);

export default Phone;
