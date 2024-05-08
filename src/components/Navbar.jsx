import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="main">
        <nav className="py-5">
          <ul className="flex justify-around  ">
            <div className="hidden md:flex" >
              <img
                src={logo}
                alt="Hyggex"
                className="h-auto sm:w-[150px] md:w-[191px] cursor-pointer "
              />
            </div>
            <div className="md:gap-x-10 sm:gap-x-5 items-center hidden md:flex cursor-pointer ">
              <li className="hover:text-[#06286E] font-bold" >Home</li>
              <li className="hover:text-[#06286E] font-bold" >Flashcard</li>
              <li className="hover:text-[#06286E] font-bold" >Contact</li>
              <li className="hover:text-[#06286E] font-bold" >FAQ</li>
              <button className="py-[13px] px-[40px]  text-white rounded-[32px] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0]">
                Login
              </button>
              {/* #164EC0 */}
            </div>
          </ul>
          <div className="md:hidden flex justify-around ">
          <div>
              <img
                src={logo}
                alt="Hyggex"
                className="h-auto w-[120px]  xsm2:w-[150px] md:w-[191px] cursor-pointer "
              />
            </div>
            <span
              className="text-3xl cursor-pointer "
              onClick={() => setOpen(!open)}
            >
              {open ? <HiOutlineX /> : <HiMenu />}
            </span>
          </div>
          {open && (
            <>
              <ul
                className={`flex flex-col md:hidden cursor-pointer absolute z-10 top-[5.7rem]  w-full text-center  gap-[20px] font-bold bg-white  `}
              >
               
                  <li
                    className="hover:text-[#06286E]  "
                    onClick={() => setOpen(false)}
                  >
                    HOME
                  </li>
                
                
                  <li
                    className="hover:text-[#06286E]"
                    onClick={() => setOpen(false)}
                  >
                    Flashcard
                  </li>
                
                
                  <li
                    className="hover:text-[#06286E]"
                    onClick={() => setOpen(false)}
                  >
                  Contact
                  </li>
                  <li
                    className="hover:text-[#06286E]"
                    onClick={() => setOpen(false)}
                  >
                  FAQ
                  </li>

                  <button className="py-[13px] px-[40px] mb-4  text-white rounded-[32px] font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0]">
                Login
              </button>
               
              </ul>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
