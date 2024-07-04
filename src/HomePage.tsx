// import React from 'react'
import SouthifyIcon from './assets/image/southify.png'
import SouthifyLogo from './assets/image/Soothify2.png'
import { IoIosArrowDown } from "react-icons/io";
import firstBackground from './assets/image/firstBackground.png'
import firstPicture from './assets/image/man.png'
import secondPicture from './assets/image/Group.png'
import thirdPicture from './assets/image/woman.png'
import fourthPicture from './assets/image/saxophone.png'
import fifthPicture from './assets/image/airplane.png'


const HomePage = () => {
  return (
    <div className='min-h-screen w-full px-10 pt-5 pb-10'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex justify-between items-center gap-4'>
          <img src={SouthifyIcon} />
          <img src={SouthifyLogo} />
        </div>
        <div className='flex justify-between gap-8 items-center  '>
          <div className='flex justify-between items-center gap-4  '>
            <p className='text-black text-[16px] font-[Inter] font-semibold'>Change Language</p>
            <IoIosArrowDown />
          </div>
          <div className='bg-[#2F6FED] px-4 py-2  rounded-[12px]'>
            <p className='text-white font-[Inter] text-[14px] font-[600] text-center'>Join Waitlist</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between  items-center mt-20 '>
        <div className='flex flex-col justify-center p-4'>
          <p className='text-black font-[Inter] text-[64px] font-[700] '>Find Your Peace for Here</p>
          <p className='text-[#160F0A] font-[Satoshi] text-[20px] font-[400]'>Welcome to Soothify, where we dey help you find peace, balance, and jolly. Soothify dey here to give you all the tools and support wey you need to live better</p>
          <div className='bg-[#2F6FED] w-1/4 py-2  rounded-[12px] mt-10'>
            <p className='text-white font-[Inter] text-[21px] font-[600] text-center'>Join Waitlist</p>
          </div>
        </div>
        <img src={firstBackground} />
      </div>
      <div className='pt-20'>
        <p className='text-black font-[Inter] text-[40px] font-[600] '>Your Journey to Peace and <br /> Balance</p>
        <div className='flex flex-row justify-between items-center pt-10'>
          <div className='h-[400px] w-[38%] bg-[#FFF9F6] rounded-[24px] flex flex-col items-center justify-center gap-8'>
            <p className='text-[#782F0E] font-[Inter] text-[24px] font-[600] text-center'> One-on-One Therapy Sessions</p>
            <img src={firstPicture} />
          </div>
          <div className='h-[400px] pt-10 w-[58%] bg-[#FCF5FF] rounded-[24px] flex flex-row  justify-around pr-20 pl-10'>
            <div className='flex flex-col self-start gap-8'>
              <p className='text-[#311386] font-[Inter] text-[24px] font-[600]'> Guided Meditation</p>
              <p className='text-[#311386] font-[Inter] text-[20px] font-[400]'> Experience calming sessions where you find peace and clarity within yourself. </p>
            </div>
            <img src={secondPicture} className='self-end' />
          </div>
        </div>
        <div className='flex flex-row justify-between items-center pt-5'>
          <div className='h-[400px] w-[32%] bg-[#FFF6FA] rounded-[24px] flex flex-col items-center justify-center gap-8'>
            <p className='text-[#7E1449] font-[Inter] text-[24px] font-[600] text-center'>Virtual Stretch Sessions </p>
            <img src={thirdPicture} />
          </div>
          <div className='h-[400px] w-[32%] bg-[#E8FCF5] rounded-[24px] flex flex-col items-center  justify-center gap-8'>
            <p className='text-[#065A0F] font-[Inter] text-[24px] font-[600] text-center'>Relaxation Music</p>
            <div className='flex flex-row justify-center items-center gap-16'>
              <div className='w-20 h-20'></div>
            <img src={fourthPicture} className='w-60 h-60'/>
            </div>
          
          </div>
          <div className='h-[400px] w-[32%] bg-[#F5F8FF] rounded-[24px] flex flex-col justify-center gap-8'>
          <div className='flex flex-row justify-end items-center '>
            <img src={fifthPicture} />
            </div>
            <p className='text-[#0C1351] font-[Inter] text-[24px] font-[600] text-center'>Wellness Articles</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
