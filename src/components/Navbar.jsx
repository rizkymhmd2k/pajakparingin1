'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import styles from '../styles';
import { navVariants, navPhone } from '../utils/motion';
import { navLinks, navLinksAlt } from "../constants";





const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);


    const pathname = usePathname();
    // console.log('where', pathname);
    const [path, setPath] = useState(false);
    // console.log('pathwork', path);
    useEffect(() => {
        if (pathname === '/') { setPath(true) }
    }, []);



    //scrollNavbarGlass
    const [navbar, setNavbar] = useState(false);

    const changeNavbar = () => {
        // console.log('navbarwkwk', navbar);
        if (window.scrollY >= 0.1) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNavbar);
    }, []);

    //scrollSpy
    useEffect(() => {
        var sections = document.querySelectorAll("section");


        window.addEventListener("scroll", () => {

            let current = "";
            sections.forEach((section) => {

                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;



                if (scrollY >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute("id");
                }

            });

            setActive(current)

        });

    }, []);




    return (

        <nav className={`${navbar ? 'shadow border-b border-gray-400 border-opacity-25 backdrop-filter bg-white ' : 'none'} sticky top-0 z-50 w-full  flex ${styles.xPaddings} py-6 justify-between items-center navbar ${!path ? 'shadow border-b border-gray-400 border-opacity-25 backdrop-filter bg-white ' : 'none'}`}>




            <a href="/#home" className="font-extrabold text-[14px] leading-[30.24px] text-black">
                pajak paringin
            </a>

            {path ? (<ul className="list-none sm:flex hidden justify-end items-center flex-1">

                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[20px] ${active === nav.id ? "text-[black]" : "text-[#767676]"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>) : (<ul className="list-none sm:flex hidden justify-end items-center flex-1">

                {navLinksAlt.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.id ? "text-[#B0B0B0]" : "text-black"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>)}



            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? '/close.svg' : '/menu.svg'}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain z-50"
                    onClick={() => setToggle(!toggle)}
                />

                <motion.div
                    variants={navPhone}
                    initial={false}
                    animate={toggle ? "show" : "hidden"}
                    className='p-8 border border-gray-400 border-opacity-25 rounded-l-xl w-[60%] h-screen shadow-2xl absolute top-[78px] right-0  min-w-[140px] z-50 bg-white ' >


                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[20px] ${active === nav.title ? "text-black" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-8"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </nav>

    )
}


export default Navbar;
