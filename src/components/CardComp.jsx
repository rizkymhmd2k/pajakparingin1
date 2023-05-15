'use client';
import { React, useState } from 'react'

import styles from '../styles';
import { motion } from 'framer-motion';
import { YoutubeEmb } from '.';



const CardComp = ({ imgUrl, title, content, popUp, ytLink, modalTitle, modalTitle1, ytLink1, click }) => {
    const [showModal, setShowModal] = useState(false);
    const [showPopup, setShowPopup] = useState(false);






    return (
        <div className='justify-center items-center relative' >


            <motion.a
                whileHover={{ scale: 1.03 }}
                onClick={() => { setShowModal(!showModal); setShowPopup(!showPopup) }}
                href={click ? click : null}
                className="border border-black border-opacity-20 flex flex-col justify-center items-center rounded-3xl shadow-sm hover:shadow-md bg-white max-w-sm p-6 relative w-72 sm:w-96">

                <img src={imgUrl} alt="icon" className="w-[20%] h-[20%] object-contain" />

                <div className={`pt-3 ${styles.flexCenter} flex-col flex w-full`}>
                    <h5 className="text-gray-900 text-lg md:text-xl font-bold mb-2">{title}</h5>
                    {popUp && showPopup ?
                        <div className="relative mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" >
                            <div className="py-1 flex items-center justify-center flex-row divide-x divide-zinc-500" role="none">
                                <a href={popUp?.[0]?.popLink} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="">{popUp?.[0]?.name}</a>
                                <a href={popUp?.[1]?.popLink} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="">{popUp?.[1]?.name}</a>
                                <a href={popUp?.[2]?.popLink} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="">{popUp?.[2]?.name}</a>
                            </div>
                        </div> : <p className="text-gray-700 text-base ">{content}</p>}

                </div>
            </motion.a>


            <>

                {!click && !popUp && showModal ? (
                    <>
                        <div
                            className="fixed inset-0 z-50 justify-center w-full items-center flex overflow-x-hidden outline-none focus:outline-none"
                        >
                            {/* <div className="relative w-auto my-6 mx-auto max-w-7xl"> */}

                            <div className="relative mt-[8rem] my-6 mx-4 w-[85%] h-[85%] ">
                                {/*content*/}
                                <div className='relative h-12 bg-white border-b-2 rounded-t-lg'>
                                    <div className='m-2 absolute z-[100] right-0 top-[0]'>
                                        <button onClick={() => setShowModal(false)} type="button" className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 max-h-[69vh] overflow-y-auto px-0 py-4 md:p-10 border-0 rounded-b-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}


                                    {/* cols and row */}
                                    <div className='flex flex-col lg:flex-row md:gap-[1.75rem] '>
                                        <div className={`flex-1 lg:w-1/2 w-full items-center justify-center `}>
                                            <img src={imgUrl} alt="icon" key={imgUrl} className="w-[20%] md:w-[40%] mx-auto object-contain" />
                                        </div>
                                        <div className='flex items-center justify-center flex-1 flex-col md:items-start'>
                                            <h2 className={`mt-[8px] font-bold md:text-[60px] text-[20px]  text-black`}
                                            > {title}
                                            </h2>

                                            <p className="my-[16px] font-normal lg:text-[20px] text-[10px] md:text-[14px] text-slate-700">{content}</p>


                                        </div>

                                    </div>

                                    {/*body*/}
                                    <div className="relative p-8 flex-auto">
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b" />
                                        <div className='mb-[39px] md:mb-48'>
                                            <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">{modalTitle}</p>
                                            <YoutubeEmb embedId={ytLink} />
                                        </div>

                                        {ytLink1 && ytLink1 ?
                                            <div>
                                                <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">{modalTitle1}</p>
                                                <YoutubeEmb embedId={ytLink1} />
                                            </div>
                                            : null
                                        }



                                        {/* <div className='flex flex-col md:flex-row gap-[15rem]'>
                                            <div className='my-6'>
                                                <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">
                                                    Features :
                                                </p>

                                                <ul className="list-disc flex justify-end items-start flex-1 flex-col">
                                                    wkwkwk
                                                </ul>
                                            </div>
                                            <div className='my-6'>
                                                <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">
                                                    Tools :
                                                </p>
                                                <ul className="list-disc flex justify-end items-start flex-1 flex-col">
                                                    kwkwk
                                                </ul>
                                            </div>
                                        </div> */}


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

export default CardComp