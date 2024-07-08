import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SouthifyIcon from './assets/image/southify.png'
import SouthifyLogo from './assets/image/Soothify2.png'
import { IoIosArrowDown } from "react-icons/io";
import firstBackground from './assets/image/firstBackground.png'
import firstPicture from './assets/image/man.png'
import secondPicture from './assets/image/Group.png'
import thirdPicture from './assets/image/woman.png'
import fourthPicture from './assets/image/saxophone.png'
import fifthPicture from './assets/image/airplane.png'
import sixthPicture from './assets/image/NIG.png'
import seventhPicture from './assets/image/hand.png'
import eighthPicture from './assets/image/love.png'
import Phone from './assets/image/phone.png'
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { ImFacebook } from "react-icons/im";
import { VscTwitter } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Navbar from './assets/image/Navbar.png'
import Close from './assets/image/x-close.png'

const HomePage = () => {
  const [open, setOpen] = useState(false)
  const [secondOpen, setSecondOpen] = useState(false)
  const [thirdOpen, setThirdOpen] = useState(false)
  const [fourthOpen, setFourthOpen] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [pidgin, setPidgin] = useState(false)
  const [arrow, setArrow] = useState(false)
  return (
    <div className={`min-h-screen w-full  pt-5 ${arrow && 'flex flex-col justify-between'}`}>
      <div>
        <div className='flex flex-row max-md:flex-col max-md:items-start items-center justify-between mx-10  max-md:mx-5'>
          <div className='max-md:flex max-md:flex-row max-md:justify-between max-md:items-center max-md:w-full'>
            <div className='flex justify-between items-center gap-4'>
              <img src={SouthifyIcon} />
              <img src={SouthifyLogo} />
            </div>
            {navbar ? (
              <img src={Close} className='md:hidden mr-3' onClick={() => setNavbar(false)} />
            ) : (
              <img src={Navbar} className='md:hidden mr-3' onClick={() => setNavbar(true)} />
            )}

          </div>
          {navbar && <div className={`flex    md:hidden justify-between items-center w-full mt-10 `}>
            <p className='text-black text-[16px] font-[Inter] font-semibold'>Change Language</p>
            <IoIosArrowDown onClick={() => { setArrow(!arrow) }} className='mr-5' />
          </div>}


          <div className='flex max-md:hidden flex-row max-md:w-full max-md:mt-5 justify-between gap-8 items-center  '>
            <div className='flex justify-between items-center gap-4  '>
              <p className='text-black text-[16px] font-[Inter] font-semibold'>Change Language</p>
              <IoIosArrowDown className='mr-4' onClick={() => { setArrow(!arrow) }} />
            </div>
            <Link to="/waitlist" className='bg-[#2F6FED] px-4 py-2  rounded-[12px]'>
              <p className='text-white font-[Inter] text-[14px] max-md:text-[11px] font-[600] text-center'>Join Waitlist</p>
            </Link>
          </div>
        </div>
      </div>
      {arrow && <div className='h-36 max-md:hidden w-60 bg-white px-5 py-3 absolute top-20 right-20'>
        <div onClick={()=> {setPidgin(false); setArrow(false)}} className='bg-[#2F6FED] h-12 rounded-md border-[#CCCCCCCC] border-[0.2px] flex flex-row justify-center items-center'>
          <p className='text-white font-[500] font-[Nunito] text-[14px]'>English</p>
        </div>
        <div  onClick={()=> {setPidgin(true); setArrow(false)}}  className='bg-[#F9F9F9] mt-5 h-12 border-[#CCCCCCCC] rounded-md border-[0.2px] flex flex-row justify-center items-center'>
          <p className='text-[#1B1F26B8] font-[500] font-[Nunito] text-[14px]'>Pidgin</p>
        </div>
      </div>}
      {arrow && <div className='h-36 md:hidden w-60 bg-white px-5 py-3 absolute top-40 right-5'>
        <div  onClick={()=> {setPidgin(false); setArrow(false)}}  className='bg-[#2F6FED] h-12 rounded-md border-[#CCCCCCCC] border-[0.2px] flex flex-row justify-center items-center'>
          <p className='text-white font-[500] font-[Nunito] text-[14px]'>English</p>
        </div>
        <div  onClick={()=> {setPidgin(true); setArrow(false)}}  className='bg-[#F9F9F9] mt-5 h-12 border-[#CCCCCCCC] rounded-md border-[0.2px] flex flex-row justify-center items-center'>
          <p className='text-[#1B1F26B8] font-[500] font-[Nunito] text-[14px]'>Pidgin</p>
        </div>
      </div>}
      <div className={`flex justify-between max-md:flex-col  items-center mt-20  mx-10 max-md:mx-5 ${arrow && 'hidden'}`}>
        <div className='flex flex-col justify-center p-4'>
          <p className='text-black font-[Inter] text-[64px] max-xl:text-[50px] max-lg:text-[38px] max-lg:mb-5 max-md:text-[42px] font-[700] '>{pidgin ? 'Find Your Peace for Here' : 'Find Your Inner Peace'}</p>
          <p className='text-[#160F0A] font-[Satoshi] text-[20px] max-xl:text-[17px] max-lg:text-[14px] max-md:text-[18px] font-[400]'>{pidgin ? 'Welcome to Soothify, where we dey help you find peace, balance, and jolly. Soothify dey here to give you all the tools and support wey you need to live better' : 'Welcome to Soothify! Your journey to peace and wellness starts here. We provide the tools and support you need for a happy and balanced life.'}</p>
          <Link to="/waitlist" className='bg-[#2F6FED] w-fit px-4 py-2  rounded-[12px] mt-10 max-lg:mt-7 max-md:mt-5'>
            <p className='text-white font-[Inter] text-[21px] max-xl:text-[18px] max-lg:text-[14px] max-md:text-[16px] font-[600] text-center'>Join Waitlist</p>
          </Link>
        </div>
        <img src={firstBackground} className='max-md:pt-10 max-xl:w-1/2 max-md:w-full' />
      </div>
      <div className={`pt-20  mx-10 max-md:mx-5 ${arrow && 'hidden'}`}>
        <p className='text-black font-[Inter] text-[40px] max-md:text-[28px] font-[600] '> {pidgin ? 'The Road Wey Go Lead You to Peace and Good Health.' : 'Your Journey to Peace and '}<br /> {pidgin ? 'Peace and Good Health.' : 'Balance '}</p>
        <div className='flex flex-row justify-between items-center pt-10'>
          <div className='h-[400px] max-md:h-[250px] w-[38%] max-lg:px-3 bg-[#FFF9F6] rounded-[24px] flex flex-col items-center justify-center gap-8 max-md:gap-2'>
            <p className='text-[#782F0E] font-[Inter] text-[24px] max-xl:text-[20px] max-lg:text-[17px]  max-md:text-[13px] font-[600] text-center'> One-on-One Therapy Sessions</p>
            <img src={firstPicture} className=' max-md:w-36 max-md:h-36 max-lg:w-52 max-lg:h-52' />
          </div>
          <div className='h-[400px] max-md:h-[250px] max-lg:px-3 pt-10 max-lg:pt-7 max-md:pt-5 max-sm:pt-3 max-sm:flex-col w-[58%] bg-[#FCF5FF] rounded-[24px] flex flex-row  justify-around max-sm:justify-start pr-20 pl-10 max-md:px-5'>
            <div className='flex flex-col self-start gap-8 max-sm:gap-2 max-sm:mb-5'>
              <p className='text-[#311386] font-[Inter] text-[24px] max-xl:text-[20px] max-lg:text-[17px] max-md:text-[13px] font-[600]'> Guided Meditation</p>
              <p className='text-[#311386] font-[Inter] text-[20px] max-xl:text-[17px] max-lg:text-[14px] max-md:text-[10px] font-[400]'> {pidgin ? 'Enjoy sessions wey go calm you down and make you see clearly inside yourself.' : 'Experience calming sessions where you find peace and clarity within yourself.'}</p>
            </div>
            <img src={secondPicture} className='self-end max-sm:self-center max-md:w-36 max-md:h-36 max-sm:w-24 max-sm:h-24 max-lg:w-52 max-lg:h-52' />
          </div>
        </div>
        <div className='flex flex-row max-md:flex-wrap justify-between items-center pt-5'>
          <div className='h-[400px] max-md:h-[250px] max-lg:px-3 w-[32%] max-md:w-[47%] bg-[#FFF6FA] rounded-[24px] flex flex-col items-center justify-center gap-8'>
            <p className='text-[#7E1449] font-[Inter] text-[24px] max-xl:text-[20px] max-lg:text-[17px] max-md:text-[13px] font-[600] text-center'>Virtual Stretch Sessions </p>
            <img src={thirdPicture} className=' max-md:w-36 max-md:h-36  max-lg:w-52 max-lg:h-52' />
          </div>
          <div className='h-[400px] max-md:h-[250px] max-lg:px-3 w-[32%] max-md:w-[47%] bg-[#E8FCF5] rounded-[24px] flex flex-col items-center  justify-center gap-8'>
            <p className='text-[#065A0F] font-[Inter] text-[24px] max-xl:text-[20px] max-lg:text-[17px] max-md:text-[13px] font-[600] text-center'>Relaxation Music</p>
            <div className='flex flex-row justify-center items-center gap-16'>
              <div className='w-20 h-20 max-sm:hidden'></div>
              <img src={fourthPicture} className='w-60 h-60 max-md:w-36 max-md:h-36  max-lg:w-52 max-lg:h-52' />
            </div>

          </div>
          <div className='h-[400px] max-md:h-[250px] max-lg:px-3 w-[32%] max-md:mt-5 max-md:w-[47%] bg-[#F5F8FF] rounded-[24px] max-md:text-[13px] flex flex-col justify-center gap-8'>
            <div className='flex flex-row justify-end max-md:justify-center items-center '>
              <img src={fifthPicture} className=' max-md:w-36 max-md:h-36  max-lg:w-52 max-lg:h-52' />
            </div>
            <p className='text-[#0C1351] font-[Inter] text-[24px] max-xl:text-[20px] max-lg:text-[17px] max-md:text-[13px] font-[600] text-center'>Wellness Articles</p>

          </div>
        </div>
      </div>
      <div className={`pt-40 max-md:mx-5  mx-10 ${arrow && 'hidden'}`} >
        <p className='text-[#000000] font-[Inter] text-[40px] max-xl:text-[36px] max-lg:text-[31px] max-md:text-[27px] font-[600]'> WHY YOU FIT CHOOSE SOOTHIFY? </p>
        <div className='flex flex-row justify-between max-lg:flex-col items-start max-md:items-start pt-20 max-md:pt-10 gap-8'>
          <div className='max-md:w-[70%] max-sm:w-full max-md:mt-5'>
            <img src={sixthPicture} />
            <p className='font-[600] pt-10 max-md:pt-5 font-[Satoshi] text-[20px] text-[#160F0A] '>{pidgin ? 'Choose Your Language' : 'Select Language Options '}</p>
            <p className='font-[400] font-[Satoshi] text-[20px] text-[#160F0A]'> {pidgin ?
              'We dey care well-well say everybody suppose dey involved. That’s why we get our things for both Pidgin and English, so you fit sabi and relate well.' :
              'We care about everyone feeling included. That’s why our content and services are available in both Pidgin and English, so you can understand and connect easily.'} </p>
          </div>
          <div className='max-md:w-[70%] max-sm:w-full max-md:mt-5'>
            <img src={sixthPicture} />
            <p className='font-[600] pt-10 max-md:pt-5 font-[Satoshi] text-[20px] text-[#160F0A] '>{pidgin ? 'Made Specially for Naija People ' : 'Tailored for Nigerians  '}</p>
            <p className='font-[400] font-[Satoshi] text-[20px] text-[#160F0A]'>
              {pidgin ?
                'We sabi well-well the special needs wey Nigerians get. Our things dey specially set to match your culture and life, to make you feel like house.' :
                'We truly understand the unique needs of Nigerians. Our content and services are specially made to fit your culture and lifestyle, making you feel at home.'}
            </p>
          </div>
          <div className='max-md:w-[70%] max-sm:w-full max-md:mt-5'>
            <img src={seventhPicture} />
            <p className='font-[600] pt-10 max-md:pt-5 font-[Satoshi] text-[20px] text-[#160F0A] '> {pidgin ? 'Easy to Reach, No Big Money' : 'Accessible and Affordable '}</p>
            <p className='font-[400] font-[Satoshi] text-[20px] text-[#160F0A]'>
              {pidgin ?
                'We believe everyone deserves well-being. That’s why we offer affordable options and strive to make our platform inclusive for all.' :
                'We believe everyone deserves well-being. That’s why we offer affordable options and strive to make our platform inclusive for all.'}</p>
          </div>
          <div className='max-md:w-[70%] max-sm:w-full max-md:mt-5'>
            <img src={eighthPicture} />
            <p className='font-[600] pt-10 max-md:pt-5 font-[Satoshi] text-[20px] text-[#160F0A] '>  {pidgin ? 'Inside App Community' : 'Join the Community In-App '}</p>
            <p className='font-[400] font-[Satoshi] text-[20px] text-[#160F0A]'>
              {pidgin ?
                'Connect with people wey dey find peace and balance too. Share your experience, support each other, and grow together.' :
                'Connect with others who are also looking for peace and balance. Share your experiences, support each other, and grow together.'}</p>
          </div>


        </div>
      </div>
      <div className={` mx-10 max-md:mx-5 h-[450px] max-lg:h-[800px] max-md:h-[750px] max-sm:h-[500px] max-xsm:h-[550px] max-xsxl:h-[600px] mt-40 mb-20 max-md:px-5 max-xl:px-8 max-lg:px-6 bg-black relative rounded-[24px] flex flex-row  justify-end max-lg:justify-start max-lg:items-start bg-myimage ${arrow && 'hidden'}`} >
        <img src={Phone} className='absolute bottom-4 left-0 max-sm:left-20 max-xsm:left-5 z-20 max-sm:w-64 max-sm:h-64' />
        <div className='flex flex-col justify-center max-lg:justify-start gap-10 max-lg:gap-3 items-start max-lg:items-center max-md:items-start   w-1/2 max-lg:w-full self-center max-lg:self-start'>
          <p className='font-[600] pt-10 font-[Inter] text-[48px] max-xl:text-[44px] max-md:text-[36px] max-sm:text-[32px] text-[#FFFFFF] max-lg:text-center max-md:text-start '> {pidgin ? ' Come dey Part of ' : 'Become a part of our '}     <br className='max-lg:hidden' />  {pidgin ? ' Our Community' : ' community '}
          </p>

          <p className='font-[400]  font-[Satoshi] text-[20px] max-xl:mx-5 max-lg:mx-0  max-md:text-[18px] max-sm:text-[14px] max-lg:text-center max-md:text-start text-[#FFFFFF] '>  {pidgin ? 'Take charge of your well-being. ' : 'Take charge of your well-being. '}
            <br className='max-lg:hidden' />  {pidgin ? '  No let stress control your life.   ' : "Don't let stress control your life."}</p>
          <div className='bg-[#2F6FED] w-fit px-4 py-2 max-xl:mx-5 max-lg:mx-0  rounded-[12px]'>
            <p className='text-white font-[Inter] text-[14px] max-md:text-[11px] font-[600] text-center'>Join Community</p>
          </div>
        </div>

      </div>
      <div className={`bg-[#E8F5FC]  mx-10 max-md:mx-5 w-36 max-md:w-fit max-md:px-4 py-2  rounded-[6px] ${arrow && 'hidden'}`}>
        <p className='text-[#2F6FED] font-[Satoshi] text-[16px] max-md:text-[13px] font-[700] text-center'>Support</p>
      </div>

      <p className={`text-[#121212]  mx-10 max-md:mx-5 font-[Satoshi] text-[36px] max-lg:text-[30px] max max-md:text-[28px] font-[700] mt-10 max-md:mt-5 ${arrow && 'hidden'}`}>{pidgin ? ' ' : "Frequently Asked Questions"}</p>
      <div className={`${arrow && 'hidden'}`}>
        {open ? (
          <div className='py-4 max-sm:px-2 max-md:h-40 max-xl:h-44 max-sm:h-fit max-sm:py-3 max-lg:mx-5 max-md:px-5  mx-10  px-10 mt-10 max-md:mt-5 bg-[#F5F5F5] border rounded-md h-32'>
            <div className=' flex max-sm:gap-8 flex-row justify-between items-center'>
              <p className='text-[#170F00] font-[Inter] text-[20px] max-sm:text-[14px] font-[500]'> {pidgin ? 'Therapy sessions dem dey confidential?' : "Are the therapy sessions confidential?"} </p>
              <div onClick={() => { setOpen(false) }} className='h-10 w-10 max-sm:h-6 max-xsm:h-5 max-xsm:w-5 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
                <HiOutlineMinusSmall />
              </div>
            </div>
            <p className='text-[#170F00] max-sm:text-[11px]  max-md:mt-2 mt-5 font-[Satoshi] text-[18px] font-[400]'>{pidgin ? 'Yes, all di sessions dem dey completely confidential. We no dey save your sessions for our database, so no record go dey and your privacy dey protected.' : "Yes, all sessions are completely confidential. Your sessions are not saved to our database, ensuring there's no record and your privacy is protected."} </p>
          </div>
        ) : (
          <div className='border max-sm:gap-8 mt-10 max-lg:px-5 max-md:mt-5 max-md:mx-5 max-md:h-16  mx-10 flex flex-row justify-between items-center rounded-md h-28 px-10 max-sm:px-3' >
            <p className='text-[#170F00] font-[Inter] max-sm:text-[13px] max-md:text-[16px] text-[20px] font-[500]'> {pidgin ? 'Therapy sessions dem dey confidential?' : "Are the therapy sessions confidential?"}  </p>
            <div onClick={() => { setOpen(true) }} className='h-10 max-xsm:h-5 max-xsm:w-5 w-10 max-sm:h-6 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
              <AiOutlinePlus className='max-xsm:h-4 max-xsm:w-4' />
            </div>
          </div>

        )}
        {secondOpen ? (
          <div className='py-4 max-sm:px-2 max-sm:h-fit max-xl:h-44 max-lg:mx-5  max-md:h-40 max-md:px-5  mx-10 max-md:mt-5 max-md:mx-5 px-10 mt-10 bg-[#F5F5F5] border rounded-md h-32'>
            <div className='max-sm:gap-8 flex flex-row justify-between items-center'>
              <p className='text-[#170F00] font-[Inter] text-[20px] max-sm:text-[14px] font-[500]'>{pidgin ? 'I fit choose my therapist?' : "Can I choose my therapist?"} </p>
              <div onClick={() => { setSecondOpen(false) }} className='h-10 w-10 max-sm:h-6 max-xsm:h-5 max-xsm:w-5 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
                <HiOutlineMinusSmall />
              </div>
            </div>
            <p className='text-[#170F00] max-sm:text-[11px]  max-md:mt-2 mt-5 font-[Satoshi] text-[18px] font-[400]'>
              {pidgin ? ' Sure! You get the power to choose your therapist. We fit also recommend the best therapist wey go fit you, based on the experience and skill of our own psychotherapist wey dey house.' :
                "Sure! You get the power to choose your therapist. We fit also recommend the best therapist wey go fit you, based on the experience and skill of our own psychotherapist wey dey house."}
            </p>
          </div>
        ) : (

          <div className='border max-sm:gap-8 mt-10 max-lg:px-5 max-md:mt-5 max-md:mx-5 max-md:h-16  mx-10 flex flex-row justify-between items-center rounded-md h-28 px-10 max-sm:px-3' >
            <p className='text-[#170F00] font-[Inter] max-sm:text-[13px] max-md:text-[16px] text-[20px] font-[500]'>{pidgin ? 'I fit choose my therapist?' : "Can I choose my therapist?"}</p>
            <div onClick={() => { setSecondOpen(true) }} className='h-10 max-xsm:h-5 max-xsm:w-5 w-10 max-sm:h-6 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
              <AiOutlinePlus className='max-xsm:h-4 max-xsm:w-4' />
            </div>
          </div>
        )}
        {thirdOpen ? (
          <div className=' max-sm:px-2 py-4 max-sm:h-fit max-xl:h-44 max-lg:mx-5  max-md:h-40 max-md:px-5  mx-10 max-md:mt-5 max-md:mx-5 px-10 mt-10 bg-[#F5F5F5] border rounded-md h-32'>
            <div className=' flex max-sm:gap-8 flex-row justify-between items-center'>
              <p className='text-[#170F00] font-[Inter]  text-[20px] max-sm:text-[14px] font-[500]'>{pidgin ? 'Therapy dey available for Pidgin?' : "Is therapy available in Pidgin?"}</p>
              <div onClick={() => { setThirdOpen(false) }} className='h-10 w-10 max-sm:h-6 max-xsm:h-5 max-xsm:w-5 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
                <HiOutlineMinusSmall />
              </div>
            </div>
            <p className='text-[#170F00] max-sm:text-[11px]  max-md:mt-2 mt-5 font-[Satoshi] text-[18px] font-[400]'>
              {pidgin ? 'Yes, we get therapists and wellness coaches for our platform wey fit do sessions for both Pidgin and English, depending on wetin you like.' : "Yes, we have therapists and wellness coaches available on the platform who can conduct sessions in both Pidgin English and English, depending on your preference."}
            </p>
          </div>
        ) : (

          <div className='border max-sm:gap-8 mt-10 max-lg:px-5  mx-10 max-md:mt-5 max-md:h-16 max-md:mx-5 flex flex-row justify-between items-center rounded-md h-28 px-10 max-sm:px-3' >
            <p className='text-[#170F00] font-[Inter] max-sm:text-[13px] text-[20px] max-md:text-[16px] font-[500]'>{pidgin ? 'Therapy dey available for Pidgin?' : "Is therapy available in Pidgin?"}</p>
            <div onClick={() => { setThirdOpen(true) }} className='h-10 max-xsm:h-5 max-xsm:w-5 w-10 max-sm:h-6 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
              <AiOutlinePlus className='max-xsm:h-4 max-xsm:w-4' />
            </div>
          </div>
        )}
        {fourthOpen ? (
          <div className='py-4 max-sm:h-fit max-xl:h-44 max-lg:mx-5  mx-10 max-md:mt-5 max-md:mx-5 px-10 mt-10 bg-[#F5F5F5] border rounded-md h-32 max-md:h-40 max-md:px-5 max-sm:px-2'>
            <div className=' flex max-sm:gap-8 flex-row justify-between items-center'>
              <p className='text-[#170F00] font-[Inter] text-[20px] max-sm:text-[14px] font-[500]'>{pidgin ? 'How I fit schedule session?' : "How do I schedule a session?"}</p>
              <div onClick={() => { setFourthOpen(false) }} className='h-10 w-10 max-sm:h-6 max-xsm:h-5 max-xsm:w-5 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
                <HiOutlineMinusSmall />
              </div>
            </div>
            <p className='text-[#170F00] mt-5 max-md:mt-2 font-[Satoshi] text-[18px] max-sm:text-[11px] font-[400]'>
              {pidgin ? 'Soothify dey under development. When we launch, to schedule session,  you go just book am for our easy-to-use booking screen.' :
                "Soothify is currently in development. To schedule a session once we launch, simply book through our easy-to-use booking screen."}
            </p>
          </div>
        ) : (

          <div className='border mt-10 max-lg:px-5 max-md:mt-5 max-md:mx-5 max-md:h-16  mx-10 flex flex-row justify-between items-center rounded-md h-28 px-10 max-sm:gap-8 max-sm:px-3' >
            <p className='text-[#170F00] font-[Inter] text-[20px] max-md:text-[16px] max-sm:text-[13px] font-[500]'>{pidgin ? 'How I fit schedule session?' : "How do I schedule a session?"}</p>
            <div onClick={() => { setFourthOpen(true) }} className='h-10 max-xsm:h-5 max-xsm:w-5 w-10 max-sm:h-6 max-sm:w-6 rounded-[22px] max-sm:rounded-[45px] border border-black flex flex-row justify-center items-center'>
              <AiOutlinePlus className='max-xsm:h-4 max-xsm:w-4' />
            </div>
          </div>
        )}
      </div>

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

export default HomePage
