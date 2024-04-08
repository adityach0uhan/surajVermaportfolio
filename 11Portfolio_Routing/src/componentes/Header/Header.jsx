import React from "react";
import { Link, NavLink } from "react-router-dom";
import myImage from "../../assets/logo2.png";
import cv from "../../assets/suraj.pdf";
import { ThemeProvider } from "../../Context/Context";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import { useEffect, useState } from "react";

// Link tag instead of a tag because using <a> page will refresh
//   which is not supposed in react Js

export default function Header() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <header className="shadow sticky z-50 top-0  ">
        <nav className=" border-[#EFECEC] shadow-md px-4 lg:px-6 py-1 md:py-2.5 bg-white dark:bg-[#171717] ">
          <div className="flex flex-wrap justify-between items-center mx-auto xl:max-w-screen-xl max-w-screen-lg">
            {/* logo portion  */}
            <Link to="/" className="flex items-center">
              <img src={myImage} className="h-16 " alt="Logo" />
            </Link>
            {/* Rightmost Portion  */}
            <div className="flex items-center order-2">
              <a
                href={cv}
                download={cv}
                className="text-white bg-orange-700 dark:bg-[#DA0037] hover:opacity-90 hover:scale-105  focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none md:scale-90 sm:scale-75 lg:scale-95"
              >
                Download CV
              </a>

              <div className=" lg:pl-14 lg:right-14 xl:pl-0 xl:-mr-20 relative xl:right-0">
                <ThemeBtn />
              </div>
            </div>
            {/* Middle or menu Protion -> home , about....  */}
            <div
              className=" justify-between flex items-center lg:flex lg:w-auto order-1 "
              id=""
            >
              <ul className="flex text-lg  font-medium flex-row space-x-0  lg:space-x-8 mt-0 lg:text-xl ">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#0C2D57]"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "dark:text-[#DA0037]" : "dark:text-[#EDEDED]"
                      }  dark:hover:text-[#DA0037]`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#0C2D57]"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "dark:text-[#DA0037]" : "dark:text-[#EDEDED]"
                      } dark:hover:text-[#DA0037]`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#0C2D57]"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "dark:text-[#DA0037]" : "dark:text-[#EDEDED]"
                      } dark:hover:text-[#DA0037]`
                    }
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#0C2D57]"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#DA0037]  lg:p-0 ${
                        isActive ? "dark:text-[#DA0037]" : "dark:text-[#EDEDED]"
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-[#0C2D57]"
                      } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "dark:text-[#DA0037]" : "dark:text-[#EDEDED]"
                      } dark:hover:text-[#DA0037]`
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
    </ThemeProvider>
  );
}
