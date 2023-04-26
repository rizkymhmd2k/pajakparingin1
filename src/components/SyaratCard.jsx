'use client';
import { React, useState } from 'react'

import styles from '../styles';
import { motion } from 'framer-motion';
// import { urlFor } from '../../sanity';



const SyaratCard = ({ imgUrl, title, content, modalTitle,  click, syarats, downloadURL, downloadDesc, download1, downloadDesc1, download2, downloadDesc2, download3, downloadDesc3, linkCard, linkDesc }) => {
    const [showModal, setShowModal] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    // console.log('syarats', syarats);


    // <AiFillEye onClick={() => setShowModal(true)} className={`${styles.flexCenter} fill-white block mx-auto w-[50px] h-full  opacity-0 group-hover:opacity-100 transition-all duration-300`} />


    // console.log('download', downloadURL)

    return (
        <div className='justify-center items-center relative' >

            <motion.a
                whileHover={{ scale: 1.03 }}
                onClick={() => { setShowModal(!showModal); setShowPopup(!showPopup) }}
                href={click ? click : null}
                class="border border-black border-opacity-20 flex flex-col justify-center items-center rounded-3xl shadow-sm hover:shadow-md bg-white max-w-sm p-6 relative w-72 sm:w-96">

                {/* <img src={urlFor(imgUrl.asset._ref)} alt="icon" className="w-[20%] h-[20%] object-contain" /> */}
                <img src={imgUrl} alt="icon" className="w-[20%] h-[20%] object-contain" />


                <div class={`pt-3 ${styles.flexCenter} flex-col flex w-full`}>
                    <h5 class="text-gray-900 text-xl font-bold mb-2">{title}</h5>
                    <p class="text-gray-700 text-base ">{content}</p>

                </div>
            </motion.a>


            <>

                {showModal ? (
                    <>
                        <div
                            className="fixed inset-0 z-50 justify-center w-full  items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                        >
                            {/* <div className="relative w-auto my-6 mx-auto max-w-7xl"> */}

                            <div className="relative  mx-4 w-[85%] my-32 lg:w-[55%]  h-[auto]">
                            
                                {/*content*/}
                                <div className='relative h-12 bg-white border-b-2 rounded-t-lg'>
                                    <div className='m-2 absolute z-[100] right-0 top-[0]'>
                                        <button onClick={() => setShowModal(false)} type="button" class="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span class="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 max-h-[69vh] overflow-y-auto px-0 py-4 md:p-10 border-0 rounded-b-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}

                                    {/* cols and row */}
                                    <div className='flex px-4 flex-col md:flex-row md:gap-[1.75rem] justify-center items-center'>
                                        <div className={`inline-flex items-center justify-end `}>
                                            <img src={imgUrl} alt="icon" className="w-[80px] mx-auto object-contain" />
                                        </div>
                                        <div className='flex items-center justify-center  flex-col md:items-center'>
                                            <h2 className={`mt-[8px] text-center sm:text-left font-bold md:text-[40px] text-[20px]  text-black`}
                                            > {title}
                                            </h2>
                                        </div>

                                    </div>

                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b" />

                                        <div className=''>
                                            <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">{modalTitle}</p>
                                            <ul className="list-disc flex justify-end items-start flex-1 flex-col pl-10">
                                                {syarats?.map((tool) =>
                                                    <li
                                                        key={tool}>
                                                        <p className='lg:text-[20px] text-slate-700 text-[14px]'>{tool}</p>
                                                    </li>
                                                )}
                                            </ul>

                                            <div className='flex-col inline-flex '>
                                                {!linkCard ? <a href={`${downloadURL}?dl=`} download className=" my-[15px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                                    <span>{downloadDesc}</span>
                                                </a> : null

                                                }

                                                {download1 && download1 ? <a href={download1} download className="my-[15px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                                    <span>{downloadDesc1}</span>
                                                </a> : null}
                                                {download2 && download2 ? <a href={download2} download className="my-[15px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                                    <span>{downloadDesc2}</span>
                                                </a> : null}
                                                {download3 && download3 ? <a href={download3} download className="my-[15px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                                    <span>{downloadDesc3}</span>
                                                </a> : null}
                                                {linkCard && linkCard ? <a href={linkCard} className="my-[15px] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                                                    <span>{linkDesc}</span>
                                                </a> : null}



                                            </div>


                                        </div>







                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>




        </div>
    )
}

export default SyaratCard