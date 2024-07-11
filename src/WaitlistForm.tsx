import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
//@ts-ignore
// @ts-expect-error
import { CountryDropdown } from "react-country-state-dropdown";
import "react-country-state-city/dist/react-country-state-city.css";
// import { ImFacebook } from "react-icons/im";
import { VscTwitter } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import SouthifyIcon from './assets/image/southify.png'
import SouthifyLogo from './assets/image/Soothify2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useLanguageContext } from './LanguageContext';
import axios from 'axios';





const WaitlistForm = () => {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState({ firstQuestion: '', secondQuestion: '', thirdQuestion: '', fourthQuestion: '', fifthQuestion: '', sixthQuestion: '', seventhQuestion: "", eighthQuestion: "", ninthQuestion: "" });
    const { pidgin } = useLanguageContext();
    const handleSetCountry = (e: any, value: any) => setCountry(value);

    console.log(pidgin)
    const handleSubmit2 = async (event: any) => {
        setLoading(true);
        event.preventDefault();
    
        const requestBody = {
            email: data.secondQuestion,
            name: data.firstQuestion,
            phone: data.thirdQuestion,
            need: data.fourthQuestion,
            favFeature: data.fifthQuestion,
            awarenessMedium: data.sixthQuestion,
            country: country.name,
            age: data.eighthQuestion,
            subscribe: data.ninthQuestion === 'Yes',
        };

        console.log(requestBody);
        console.log(country.name)

        try {
            // const response = await axios.post('https://southifyafrica-1.onrender.com/api/user/', requestBody, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });
            const { data } = await axios.post(`https://southifyafrica-1.onrender.com/api/user/`, requestBody)
            if (data.status === 'ok') {
                alert("ok")
            }

            // Assuming you want to handle success similarly
            setData({
                firstQuestion: '',
                secondQuestion: '',
                thirdQuestion: '',
                fourthQuestion: '',
                fifthQuestion: '',
                sixthQuestion: "",
                seventhQuestion: "",
                eighthQuestion: "",
                ninthQuestion: ""
            });
            setSubmit(true);
            console.log("Done");
            setLoading(false);

        } catch (error) {
            console.error('There was an error!', error);
            setLoading(false);
            if(error.response.data.message){
                alert(error.response.data.message)
            }
        }
    };


    if (submit) {
        return (
            <div className='min-h-screen w-full  pt-5 flex flex-col gap-8 justify-between items-start'>
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
                <div className='w-full flex flex-col gap-2 justify-start items-center'>
                    <p className='text-[#000000] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px] font-[600] pt-5'>You will hear from us very soon</p>
                    <Link to="/" className='bg-[#2F6FED] w-fit py-2 px-4 rounded-lg text-white'>Go back to homepage</Link>
                </div>
                <div></div>
            </div>

        )
    }
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
            <p className='mx-10  max-md:mx-5 text-[#000000] font-[Inter] text-[65px] max-xl:text-[60px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[32px] max-xsm:text-[24px] max-xsxl:text-[20px] mt-10 font-[700] text-center'>{pidgin ? 'Join Soothify Waitlist' : 'Join the Soothify Waitlist'}</p>
            <p className='text-black px-10  max-md:px-5 font-[Inter] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] font-[300] pt-5'>
                {pidgin ? 'Hello!' : "Hi there!"}
            </p>
            <p className='text-black px-10  max-md:px-5 font-[Inter] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] font-[300] pt-5'>
                {pidgin ? 'We happy to help you for your wellness journey. Join our waitlist to be first to try Soothify!' : "We're excited to help you with your wellness journey. Join our waitlist to be the first to try Soothify!"}
            </p>
            <form className='px-10  max-md:px-5 w-[70%] max-sm:w-full' onSubmit={handleSubmit2}>


                <div className='my-5'>

                    <p className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px] font-[600]'>Name</p>
                    <input type="text" className='email-input text-black border-[0.5px] opacity-40 border-[#263238] rounded-sm w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px] mt-2 p-4' placeholder='Enter your name' id="firstQuestion" value={data.firstQuestion} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} />
                </div>
                <div className='my-5'>

                    <p className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px] font-[600]'>Email</p>
                    <input type="text" className='email-input text-black border-[0.5px] opacity-40 border-[#263238] rounded-sm w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px] mt-2 p-4' placeholder='Enter your email' id="secondQuestion" value={data.secondQuestion} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} />
                </div>
                <div className='my-5'>

                    <p className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px]  max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px] font-[600]'>Phone</p>
                    <input type="text" className='email-input text-black border-[0.5px] opacity-40 border-[#263238] rounded-sm w-full  text-xl max-lg:text-base max-md:text-sm max-sm:text-[10px] mt-2 p-4' placeholder='Enter your phone number' id="thirdQuestion" value={data.thirdQuestion} onChange={(e) => { setData({ ...data, [e.target.id]: e.target.value }) }} />
                </div>

                <p className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px] font-[600] pt-5'>{pidgin ? 'Wetin you need help with? (Tick all wey apply)' : 'What do you need help with? (Check all that apply)'}</p>

                <div className="flex flex-col min-w-fit pt-5 gap-3 md:gap-1">
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fourthQuestion"
                            value={'Reducing stress'}
                            checked={data.fourthQuestion === "Reducing stress"}
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                            className='h-8 w-8'
                        />
                        <div className="text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Reduce stress' : 'Reducing stress'}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fourthQuestion"
                            value={"Better sleep"}
                            checked={data.fourthQuestion === "Better sleep"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Better sleep' : 'Better sleep'}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fourthQuestion"
                            value={"Improving sleep"}
                            checked={data.fourthQuestion === "Improving sleep"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Improve focus' : 'Improving focus'}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fourthQuestion"
                            value={"Building health habits"}
                            checked={data.fourthQuestion === "Building health habits"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Build healthy habits' : 'Building health habits'}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fourthQuestion"
                            value={"Feeling more calm"}
                            checked={data.fourthQuestion === "Feeling more calm"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className="text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Feel more calm' : 'Feeling more calm'}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fourthQuestion"
                            value={"Other (please specify)"}
                            checked={data.fourthQuestion === "Other (please specify)"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Other (make you specify)' : 'Other(s) (please specify)'}</div>

                    </div>
                </div>
                <p className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px] max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px] font-[600] pt-5'>{pidgin ? ' Which features you like? (Tick all wey apply):' : 'What feature do you like? (Check all that apply)'}</p>

                <div className="flex flex-col min-w-fit pt-5  gap-3 md:gap-1">
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fifthQuestion"
                            value={'Yoga'}
                            checked={data.fifthQuestion === "Yoga"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}

                        />
                        <div className="text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{"Yoga"}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fifthQuestion"
                            value={"Meditation"}
                            checked={data.fifthQuestion === "Meditation"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{"Meditation"}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fifthQuestion"
                            value={"Mindfulness exercise"}
                            checked={data.fifthQuestion === "Mindfulness exercise"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{"Mindfulness exercise"}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fifthQuestion"
                            value={"Community support"}
                            checked={data.fifthQuestion === "Community support"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{"Community support"}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fifthQuestion"
                            value={"Learning about wellness"}
                            checked={data.fifthQuestion === "Learning about wellness"}
                            className='h-8 w-8'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Learn about wellness' : 'Learning about wellness'}</div>

                    </div>
                    <div className="flex justify-between items-center max-w-fit">
                        <input
                            type="checkbox"
                            name="fifthQuestion"
                            value={"Other (please specify)"}
                            checked={data.fifthQuestion === "Other (please specify)"}
                            className='h-8 w-8 bg-black'
                            onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}
                        />
                        <div className=" text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] ml-10 max-lg:ml-8 max-md:ml-5 max-sm:ml-3">{pidgin ? 'Other (make you specify)' : 'Other(s) (please specify)'}</div>

                    </div>
                </div>

                <div className='text-gray-900 text-base max-sm:text-xs font-normal  my-20'>
                    <label className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px]  max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px]  font-[600] pt-5'>
                        {pidgin ? 'How you take hear about us?' : 'How did you hear about us?'}
                    </label>
                    <div className="w-full flex justify-between items-center mt-5" >
                        <select name="sixthQuestion" className='w-full py-3 px-3  text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px]  max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] bg-[#F5F5F5] pr-3 border border-[#263238] flex flex-col rounded-md gap-6 email-input ' value={data.sixthQuestion} onChange={(e) => { setData({ ...data, sixthQuestion: e.target.value }) }}>
                            <option value="" disabled selected hidden>Please select</option>
                            <option value='Social media'>Social media</option>
                            <option value='Friend/family'>Friend/Family</option>
                            <option value='Online search'>Online search</option>
                            <option value='Ads'>Ads</option>
                            <option value='Other (please specify)'>{pidgin ? 'Other (make you specify)' : 'Other(s) (please specify)'}</option>
                        </select>
                    </div>

                </div>
                <div className='text-gray-900 text-base max-sm:text-xs font-normal  mt-20'>
                    <label className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px]  max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px]  font-[600] pt-5'>Country</label>
                    <div className=" justify-between items-start mt-5 w-full py-3 px-3  text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px]  max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] bg-[#F5F5F5] pr-3 border border-[#263238] flex flex-col rounded-md gap-6 email-input " >
                        {/* <select name="seventhQuestion" className='w-full py-3 px-3  text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px]  max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] bg-[#F5F5F5] pr-3 border border-[#263238] flex flex-col rounded-md gap-6 email-input ' value={data.seventhQuestion} onChange={(e) => { setData({ ...data, seventhQuestion: e.target.value }) }}> */}
                        {/* <option value="" disabled selected hidden>Please select</option>
                            <option value='Nigeria'>Nigeria</option>
                            <option value='Ghana'>Ghana</option>
                            <option value='Egypt'>Egypt</option>
                            <option value='South africa'>South africa</option>
                            <option value='Senegal'>Senegal</option> */}

                        {/* </select> */}
                        <CountryDropdown clearable value={country} onChange={handleSetCountry}
                            classes="element" />
                    </div>

                </div>
                <div className='text-gray-900 text-base max-sm:text-xs font-normal  mt-20'>
                    <label className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px]  max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px]  font-[600] pt-5'>     {pidgin ? 'How old you de?' : 'How old are you?'}</label>
                    <div className="w-full flex justify-between items-center mt-5 " >
                        <select name="eighthQuestion" className='w-full py-3 px-3  text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px]  max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] bg-[#F5F5F5] pr-3 border border-[#263238] flex flex-col rounded-md gap-6 email-input ' value={data.eighthQuestion} onChange={(e) => { setData({ ...data, eighthQuestion: e.target.value }) }}>
                            <option value="" disabled selected hidden>Please select</option>
                            <option value='18 -25'>18 -25</option>
                            <option value='26 - 35'>26 - 35</option>
                            <option value='36 - 45'>36 - 45</option>
                            <option value='45 & Above'>45 & Above</option>
                        </select>
                    </div>

                </div>
                <div className='text-gray-900 text-base max-sm:text-xs font-normal  mt-20'>
                    <label className='text-[#263238] font-[Inter] text-[32px] max-xl:text-[30px] max-lg:text-[25px] max-md:text-[20px]  max-sm:text-[18px] max-xsm:text-[16px] max-xsxl:text-[14px]  font-[600] pt-5'>
                        {pidgin ? 'You wan get updates from Soothify?' : 'Want to get updates from soothify?'}
                    </label>
                    <div className="w-full flex justify-between items-center mt-5" >
                        <select name="ninthQuestion" className='w-full py-3 px-3  text-[#263238] text-[28px] max-lg:text-[24px] max-md:text-[20px] max-sm:text-[16px] max-xsm:text-[14px] max-xsxl:text-[12px] font-[400] font-[Inter] bg-[#F5F5F5] pr-3 border border-[#263238] flex flex-col rounded-md gap-6 email-input ' value={data.ninthQuestion} onChange={(e) => { setData({ ...data, ninthQuestion: e.target.value }) }}>
                            {/* <option value='null disabled'>Please select</option> */}
                            <option value="" disabled selected hidden>Please select</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>

                        </select>
                    </div>

                </div>
                {loading ? (
                    <FontAwesomeIcon icon={faSpinner} spin className='mt-32' />
                ) : (
                    <button className='bg-[#2F6FED] w-fit py-2 px-4 rounded-lg mt-32 text-white' onClick={handleSubmit2}>Submit</button>
                )}

                <p className='text-black font-[Inter] text-[20px] max-xl:text-[18px] max-lg:text-[16px] max-md:text-[14px] font-[300] pt-5'>
                    {pidgin ? 'When you submit, you agree say we go send you email about the app. Your info dey safe with us.' : ' By submitting you agree  to get emails from us about the App. your info is safe with us'}
                </p>
            </form>
            <div className={`h-[240px] mt-40  bg-[#F7F9FC] pt-16 pb-16  max-md:mt-32 max-sm:mt-24 `}>
                <div className='border-t border-blue-100 flex flex-row justify-end max-sm:justify-between items-end px-10 max-md:px-5 max-sm:px-3  '>
                    <div className='flex flex-row justify-end max-sm:justify-between items-center gap-4 pt-10 '>
                        <p className='text-[#170F00] font-[Inter] text-[20px] max-xl:text-[17px] max-lg:text-[14px] max-md:text-[10px] font-[500]'>follow us on</p>
                        {/* <Link to="" className='bg-[#121212] justify-center items-center flex flex-row max-md:h-5 max-md:w-5 max-md:rounded-[12px] h-7 w-7 rounded-[15px]'>
                            <ImFacebook className='text-white max-md:h-3 max-md:w-3' />
                        </Link> */}
                        <Link to="https://x.com/soothifyafrica?s=21&t=HA6M5FfESE3wkPAI2ot6mw" target='_blank' className='bg-[#121212] justify-center items-center flex flex-row h-7 w-7 max-md:h-5 max-md:w-5 max-md:rounded-[12px] rounded-[15px]'>
                            <VscTwitter className='text-white max-md:h-3 max-md:w-3' />
                        </Link>
                        <Link to="https://www.instagram.com/soothifyafrica?igsh=MW5saDFhcDltdXZ2ag%3D%3D&utm_source=qr" target='_blank' className='bg-[#121212] justify-center items-center flex flex-row h-7 w-7 max-md:h-5 max-md:w-5 max-md:rounded-[12px] rounded-[15px]'>
                            <FiInstagram className='text-white max-md:h-3 max-md:w-3' />
                        </Link>
                        <Link to="https://www.linkedin.com/company/soothify-africa/" target='_blank' className='bg-[#121212] justify-center items-center flex flex-row h-7 w-7 max-md:h-5 max-md:w-5 max-md:rounded-[12px] rounded-[15px]'>
                            <FaLinkedinIn className='text-white max-md:h-3 max-md:w-3' />
                        </Link>
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
