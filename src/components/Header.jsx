import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const dropdownRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const handleScroll = () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 0) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        }
        setIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className='bg-slate-200 fixed w-full z-50 shadow-lg'>
            <header id="header" className="flex bg-gray-800 text-black py-4 relative transition-all duration-500 ">
                <div className="flex items-center w-full justify-between">
                    {isMobile && (
                        <button
                            className="block md:hidden text-black focus:outline-none ml-7"
                            onClick={toggleMenu}
                            ref={menuButtonRef}
                        >
                            <svg
                                className="h-6 w-6 hover:text-orange-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h10"
                                    />
                                )}
                            </svg>
                        </button>
                    )}
                    <div className={`${isMobile ? 'ml-5' : 'ml-20'} text-lg font-bold`}>
                        LOGO
                    </div>
                    <div className="container flex justify-end ">
                        <nav
                            ref={dropdownRef}
                            className={`absolute top-full left-0 right-0 md:relative md:flex md:space-x-6 ${isOpen || !isMobile ? 'block ml-5' : 'hidden'} md:space-x-6 mt-4 md:mt-0 z-10 rounded-lg overflow-hidden`}
                        >
                            <div className={`bg-slate-200 py-2 ${isMobile ? 'w-40 rounded-lg rounded-br-3xl text-center' : 'flex flex-row'}`}>
                                {['home', 'about me', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                                    <Link
                                        key={section}
                                        to={section}
                                        spy={true}
                                        smooth={true}
                                        offset={isMobile ? -70 : -60}
                                        duration={50}
                                        onClick={() => setIsOpen(false)} // Close dropdown on link click
                                        activeClass={`text-orange-500 ${isMobile ? '' : "underline"}`}
                                        className={`block mx-2 md:inline-block cursor-pointer hover:text-orange-500 ${isMobile ? 'border border-gray-300 rounded-md rounded-br-2xl bg-white m-3' : ''}`}
                                    >
                                        {section.toUpperCase()}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Header;
