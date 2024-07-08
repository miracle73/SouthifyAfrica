import React, { useState, useContext, useEffect } from 'react'
import './App.css'
import CancelIcon from '../assets/images/cancel.png'
import { Link } from 'react-router-dom';
import { ImFacebook } from "react-icons/im";
import { VscTwitter } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import SouthifyIcon from './assets/image/southify.png'
import SouthifyLogo from './assets/image/Soothify2.png'



const WaitlistForm = () => {

    return (
        <div className={`min-h-screen w-full  pt-5 flex flex-col justify-between`}>
            <div>
                <div className='flex flex-row max-md:flex-col max-md:items-start items-center justify-between mx-10  max-md:mx-5'>
                    <div className='max-md:flex max-md:flex-row max-md:justify-between max-md:items-center max-md:w-full'>
                        <div className='flex justify-between items-center gap-4'>
                            <img src={SouthifyIcon} />
                            <img src={SouthifyLogo} />
                        </div>
                    </div>
                </div>
            </div>
            <p className='mx-10  max-md:mx-5 text-[#000000] font-[Inter] text-[65px] max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] font-[700] text-center'>Join waitlist</p>
            <form className='mx-10  max-md:mx-5 w-[70%]'>
                <div>
                    {/* value={firstName} onChange={(e) => setFirstName(e.target.value)}  */}
                    <p className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] font-[600]'>Name</p>
                    <input type="text" className='email-input text-black border-[0.5px] opacity-40 border-[#263238] rounded-sm w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px] mt-2 p-4' placeholder='Enter your name' />
                </div>
            </form>
            <div className={`h-[240px] mt-40  bg-[#F7F9FC] pt-16 pb-16  max-md:mt-32 max-sm:mt-24 `}>
                <div className='border-t border-blue-100 flex flex-row justify-end max-sm:justify-between items-end px-10 max-md:px-5 max-sm:px-3  '>
                    <div className='flex flex-row justify-end max-sm:justify-between items-center gap-4 pt-10 '>
                        <p className='text-[#170F00] font-[Inter] text-[20px] max-xl:text-[17px] max-lg:text-[14px] max-md:text-[10px] font-[500]'>I fit choose my therapist?</p>
                        <div className='bg-[#121212] justify-center items-center flex flex-row max-md:h-5 max-md:w-5 max-md:rounded-[12px] h-7 w-7 rounded-[15px]'>
                            <ImFacebook className='text-white max-md:h-3 max-md:w-3' />
                        </div>
                        <div className='bg-[#121212] justify-center items-center flex flex-row h-7 w-7 max-md:h-5 max-md:w-5 max-md:rounded-[12px] rounded-[15px]'>
                            <VscTwitter className='text-white max-md:h-3 max-md:w-3' />
                        </div>
                        <div className='bg-[#121212] justify-center items-center flex flex-row h-7 w-7 max-md:h-5 max-md:w-5 max-md:rounded-[12px] rounded-[15px]'>
                            <FiInstagram className='text-white max-md:h-3 max-md:w-3' />
                        </div>
                        <div className='bg-[#121212] justify-center items-center flex flex-row h-7 w-7 max-md:h-5 max-md:w-5 max-md:rounded-[12px] rounded-[15px]'>
                            <FaLinkedinIn className='text-white max-md:h-3 max-md:w-3' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between max-sm:flex-col items-center max-sm:items-start pt-10 px-10 max-md:px-3 '>
                    <div className='flex flex-row justify-start gap-12 max-sm:gap-2 items-center max-sm:flex-col max-sm:items-center'>
                        <p className='text-[#344054] font-[Inter] text-[16px] max-xl:text-[14px] max-lg:text-[11px] max-md:text-[8px] font-[600]'>Privacy Policy</p>
                        <p className='text-[#344054] font-[Inter] text-[16px] max-xl:text-[14px] max-lg:text-[11px] max-md:text-[8px] font-[600]'>Terms of Use</p>
                    </div>
                    <div>
                        <p className='text-[#344054] font-[Inter] text-[16px] max-xl:text-[14px] max-lg:text-[11px]  max-md:text-[8px] font-[600]'>    © 2024 . Powered by <span className='font-[400]'> soothifyafrica </span> . All Rights Reserved.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaitlistForm
