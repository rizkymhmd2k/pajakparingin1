'use client';
// 'use strict';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import styles from '../styles';
import { fadeIn, slideIn, boxes } from '../utils/motion';

const fetcher = async (url) => {
    if (!url) {
        return null;
    }

    console.log('Fetching data from:', url);
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data from Google Sheets API. Please try again later.');
    }
    const data = await res.json();
    console.log('Fetched data:', data);
    return data;
};

const Track = () => {

    const [npwp, setNpwp] = useState('');
    const [npwp1, setNpwp1] = useState('');
    const [showModal, setShowModal] = useState(false);
    // console.log('modalbang', showModal)



    // const { data, error } = useSWR(`/api/sheet?npwp=${123}`, fetcher);
    // const { data, error } = useSWR(`/api/sheet/`, fetcher);
    const { data, error, isValidating } = useSWR(npwp1 ? `/api/sheet/${npwp1}` : null, fetcher);

    useEffect(() => {
        if (data) {
            setShowModal(true);
        }
    }, [data]);

    console.log('Fetched data Nama:', data?.data.nama);
    console.log('Fetched data Permohonan:', data?.data.permohonans);



    const handleSearch = (e) => {
        e.preventDefault();
        // console.log('NPWP:', npwp);
        // Send data to query
        setNpwp1(npwp);
        setShowModal(true);

    };



    return (
        <section id='track' class="bg-zinc-50 ">
            <div class="pt-16 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 pb-[1px] lg:px-12">

                <h1 class="mb-4 mt-20 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
                    Cek Status Permohonanmu
                </h1>
                <p class="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 xl:px-48 ">
                    Pantau status permohonanmu tanpa keluar rumah! Cukup gunakan nomor NPWP-mu dan dapatkan informasinya sekarang juga.
                </p>
                <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                    <form class="flex items-center w-full mx-auto justify-center" onSubmit={handleSearch}>
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-3/5 ">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                placeholder="Ketik nomor NPWP disini"
                                required
                                value={npwp}
                                onChange={(event) => setNpwp(event.target.value)}
                            />
                        </div>
                        <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border border-yellow-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </form>




                </div>

            </div>

            <>

                {showModal ? (
                    <>
                        <div
                            className="fixed inset-0 z-50 justify-center w-full  items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
                        >
                            {/* <div className="relative w-auto my-6 mx-auto max-w-7xl"> */}

                            <div className="relative  mx-4 w-[auto] my-32 lg:w-[auto] min-w-[300px] h-[auto]">

                                {/*content*/}
                                <div className='relative h-12 bg-white border-b-2 rounded-t-lg'>
                                    <div className='m-2 absolute z-[100] right-0 top-[0]'>
                                        <button onClick={() => setShowModal(false)} type="button" className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-1 max-h-[80vh] min-h-[200px] overflow-y-auto px-0 py-0 border-0 rounded-b-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}

                                    {/* cols and row */}


                                    {/*body*/}
                                    <div className="relative p-12 flex-auto">

                                        <div className=''>
                                            {error ?
                                                <div className="flex items-center flex-col justify-center h-full">
                                                    <div className="animate-pulse">
                                                        <FaRegTimesCircle className=" text-8xl" />
                                                    </div>
                                                    <div className="mt-4 text-gray-900 font-bold">Permohonan tidak ditemukan !!</div>
                                                    <div className="mt-4 text-gray-900 font-medium text-center max-w-md">Agar dapat memperoleh informasi anda lebih lanjut mengenai status permohonan, silakan klik tombol di bawah ini.</div>

                                                    <a href="https://wa.me/6282311837808?text=NPWP%20%3A%0APermohonan%3A%0AHalo%20min%2C%20mohon%20bantu%20cek%20status%20permohonan%20saya%20ya!" className="mt-5 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded inline-flex items-center">
                                                        <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                                                        <span>Chat on WhatsApp</span>
                                                    </a>


                                                </div>
                                                : null}
                                            {isValidating ? (
                                                <div className="flex flex-col justify-center items-center ">
                                                    <div className="animate-spin rounded-full w-20 h-20 border-t-2 border-b-2 border-gray-900"></div>
                                                    <div className="mt-4 text-gray-900 font-bold">Loading...</div>
                                                </div>


                                            ) : null}

                                            {/* <p className="my-4 text-slate-700 lg:text-[20px] text-[14px] font-bold	 leading-relaxed">Status nyawa</p> */}


                                     {data && (
                                                <div>
                                                    <p className="lg:text-[20px] mb-5 text-slate-700 text-[14px] font-bold leading-relaxed text-center">
                                                        Status Permohonan {data?.data.nama}
                                                    </p>
                                                    {data?.data.permohonans.map((item) => (
                                                        <ul key={item} className="border border-gray-300 shadow p-2 rounded-sm divide-y divide-gray-300">
                                                            <li>
                                                                <p className="lg:text-[20px] text-slate-700 text-[14px]">{item}</p>
                                                            </li>
                                                        </ul>
                                                    ))}
                                                </div>
                                            )}       




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

        </section>




    );
}

export default Track;



