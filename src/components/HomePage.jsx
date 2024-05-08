import React, { useState } from 'react'
import navi from "../assets/navigation.png"
import midLogo from "../assets/midLogo.png"
import vector from "../assets/Vector.png"
import study from "../assets/study.png"
import "../style/main.css"
import { HiChevronDown, HiChevronUp, HiMiniPlusCircle } from 'react-icons/hi2'
import { FaPlusCircle } from "react-icons/fa";

const HomePage = () => {
    let List = ["Study","Qviz","Test","Game","Others"]
    const [list, setList] = useState("Study")

    const [faq1, setfaq1] = useState(false);
    const [faq2, setfaq2] = useState(false);
    const [faq3, setfaq3] = useState(false);
  return (
    <div className="home mx-5 xsm2:mx-[1rem] sm:mx-[5rem]  md:mx-[10rem] lg:mx-[15rem] ">
        <div className="header">
            <img className=' mt-6 lg:w-[487px] md:w-[350px] sm:w-[250px] w-[200px] '  src={navi} alt="navigatrion" />
        </div>
        {/* Second section */}
        <div className='mt-10' >
           <h1 className='gradient-text  md:text-[24px] text-[18px] sm:text lg:text-[32px] ' >Relations and Functions ( Mathematics )</h1>
        </div>
 
        
        <div className='w-full flex flex-col justify-center mt-[3rem]  lg:ml-[7rem] xl:ml-[9rem]  ' >
            <div className='flex flex-row xsm2:gap-x-5 gap-x-2 md:gap-x-10 w-[546px] justify-start  md:justify-center ' >
            {List.map((item, index) => {
                  const isActive = list.includes(item);
                  return (
                    <button
                      key={index}
                      onClick={() => setList(item)}
                      className={` ${
                        isActive
                          ? "text-[#06286E] underline "
                          : " text-gray-400 "
                      }  text-[16px] font-[600] text-center flex-wrap flex flex-row justify-center content-center  `}
                    >
                      {item}
                    </button>
                  );
                })}
            </div>
            <div className='my-10' >
              {
                list === "Study" && ( 
                  <div>
                    <img src={study} alt="not found" />
                  </div>
                )
              }
            </div>
            <div>
              {
                list === "Qviz" && ( 
                  <div>
                   <p>Qviz is progress</p>
                  </div>
                )
              }
            </div>
            <div>
              {
                list === "Test" && ( 
                  <div>
                   <p>Test is progress</p>
                  </div>
                )
              }
            </div>
            <div>
              {
                list === "Game" && ( 
                  <div>
                   <p>Game is progress</p>
                  </div>
                )
              }
            </div>
            <div>
              {
                list === "Others" && ( 
                  <div>
                   <p>Others is progress</p>
                  </div>
                )
              }
            </div>
        </div>

        {/* Third */}
        <div className="third w-full mt-8 ">
            <div className='flex justify-between' >
                <img className=' w-[100px] sm:w-[120px] md:w-[180px] lg:w-[217px] h-auto' src={midLogo} alt="LOogo" />
                <button className='flex items-center gap-x-1 xsm2:gap-x-4 ' ><span className='' > <img className=' w-5 sm:w-6  md:w-8 h-auto lg:w-12'  src={vector} alt="+" /> </span><span className='gradient-text text-[18px] sm:text-[20px] md:text-[28px] ' >Create Flashcard</span></button>
            </div>
        </div>
        {/* Fourth */}
        <div className='mb-[5rem]' >
        <div className="flex flex-col gap-y-[32px]  w-full px-3 pt-14  sm:pt-20 xsm:px-[20px]">
        <p className="font-[700] text-[24px] leading-[32px] sm:text-[48px] sm:leading-[64px] gradient-text">
          FAQ
        </p>
        <div className="w-full sm:max-w-[848px]   font-[600] text-[16px]  ">
          <div className="px-3 py-5 xsm:p-[20px] sm:pb-[25px] border-[1px] border-[#0A0003] sm:mt-[20px] rounded-[12px]">
            <div
              onClick={() => setfaq1(!faq1)}
              className="flex cursor-pointer items-center leading-[32px] justify-between sm:px-[36px]"
            >
              <p className="w-[629px]">Can education flashcards be used for all age groups?</p>
              {faq1 ? <HiChevronUp /> : <HiChevronDown />}
            </div>
            {faq1 && (
              <div className="mt-[42px] font-[400] px-[20px] sm:px-[36px] text-[16px] ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, officia. Molestiae cumque laborum maiores libero dolor eligendi architecto, reiciendis repellendus modi. Tempora.
                </p>
              </div>
            )}
          </div>

          <div className="px-3 py-5 xsm:p-[20px] sm:pb-[25px] border-[1px] border-[#0A0003] sm:mt-[20px] rounded-[12px]">
            <div
              onClick={() => setfaq2(!faq2)}
              className="flex cursor-pointer items-center justify-between sm:px-[36px]  "
            >
              <p className="w-[629px]">How do education flashcards work?</p>
              {faq2 ? <HiChevronUp /> : <HiChevronDown />}
            </div>
            {faq2 && (
              <div className="mt-[42px] font-[400] px-[20px] sm:px-[36px] text-[16px] leading-[24px]">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laboriosam a possimus ipsum alias veniam explicabo velit. Nesciunt asperiores pariatur accusantium dignissimos omnis earum perspiciatis deleniti voluptas laboriosam eos, rem sequi soluta!
                </p>
                
              </div>
            )}
          </div>

          <div className="px-3 py-5 xsm:p-[20px] sm:pb-[25px] border-[1px] border-[#0A0003] sm:mt-[20px] rounded-[12px] ">
            <div
              onClick={() => setfaq3(!faq3)}
              className="flex cursor-pointer items-center justify-between sm:px-[36px] "
            >
              <p className="w-[629px]  ">Can education flashcards be used for test preparation?</p>
              {faq3 ? <HiChevronUp /> : <HiChevronDown />}
            </div>
            {faq3 && (
              <div className="mt-[42px] font-[400] px-[20px] sm:px-[36px] text-[16px] leading-[24px]">
                <p>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis sed, non odio delectus molestiae accusantium reiciendis accusamus modi suscipit quam ad, a sequi libero impedit ab sunt nisi.
                </p>
              </div>
            )}
          </div>

         

         

          
        </div>
      </div>
        </div>
    </div>
  )
}

export default HomePage