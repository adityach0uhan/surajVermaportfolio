import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import myImage from '../../assets/logo2.png';
import cv from '../../assets/suraj.pdf'

// Link tag instead of a tag because using <a> page will refresh
//   which is not supposed in react Js


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0  ">
            <nav className=" border-[#EFECEC] shadow-md px-4 lg:px-6  py-2.5 bg-white">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* logo portion  */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={myImage}
                            className="h-16"
                            alt="Logo"
                        />
                    </Link>
                    {/* Rightmost Portion  */}
                    <div className="flex items-center lg:order-2">
                       
                        <a
                           href={cv}
                            download={cv}
                            className="text-white bg-orange-700 hover:opacity-90 hover:scale-105  focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Download CV
                        </a>
                    </div>
                    {/* Middle or menu Protion -> home , about....  */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-xl ">
                            <li>
                                <NavLink
                                    to= "/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-[#0C2D57]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to= "/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-[#0C2D57]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to= "/project"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-[#0C2D57]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Projects 
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to= "/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-[#0C2D57]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to= "/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-[#0C2D57]"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github 
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
  


