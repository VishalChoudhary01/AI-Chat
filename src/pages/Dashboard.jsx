import React,{useState} from 'react'

import Button from '../components/atoms/Button';
import LeftSideBar from '../components/organisms/LeftInnerSideBar';
import ChatWindow from '../components/organisms/ChatWindow';
import RightSideChat from '../components/organisms/RightSideChat';
import { FaIntercom } from "react-icons/fa";
import { PiSidebarSimpleBold } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMailCloseFill } from "react-icons/ri";

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("AI Copilot");
 const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='md:py-2.5'>
      {/* Headers */}
    <div className='w-full flex px-3 justify-between  border-b border-gray-100 shadow'>
<p className='font-Poppins font-medium md:text-[1.3rem] w-[18%]'>Your Inbox</p>
 {/* heading middle */}
    <div className=' flex justify-between w-[58%] pl-3 '>
      <p className='font-bold text-slate-900 md:text-[1.5rem]'>Louis Easton</p>
      <div className='flex items-center gap-x-2'>
        <span className='p-2 bg-Lightesgray rounded-lg'>
        <BsThreeDots/>
        </span>
      <span className='p-2 bg-Lightesgray rounded-lg'>
        <BsFillMoonStarsFill/>
        </span>
        <Button renderLeftItem={<RiMailCloseFill/>} buttonStyle={"flex items-center hover:scale-105 transition-all cursor-pointer bg-buttonBG text-buttonText px-3 py-1 rounded-lg gap-x-1 font-Roboto "} buttonText={"Close"} />
      </div>
  </div>

  {/* heading right */}
    <div className='flex justify-between  items-center font-Poppins w-[24%] px-5  '>
      <div className='flex gap-x-8 text-heading3 font-Poppins font-medium    '>
        <p
        onClick={() => handleTabClick("AI Copilot")}
        className={`flex items-center gap-x-1 relative cursor-pointer ${
          activeTab === "AI Copilot"
            ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[0.15rem] after:bg-gradient-to-tr after:from-[#0f45ab] after:via-[#a96fb7] after:to-[#c7698b]"
            : "bg-transparent"
        }`}
      >
        <span>
          <FaIntercom className="text-[#033aa0]" />
        </span>
        <span
          className={`${
            activeTab === "AI Copilot"
              ? "bg-gradient-to-tr from-[#0f45ab] via-[#a96fb7] to-[#c7698b] text-transparent bg-clip-text tracking-tighter font-semibold"
              : ""
          }`}
        >
          AI Copilot
        </span>
      </p>

      <p
        onClick={() => handleTabClick("Details")}
        className={`relative cursor-pointer ${
          activeTab === "Details"
            ? "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[0.15rem] after:bg-gradient-to-tr after:from-[#0f45ab] after:via-[#a96fb7] after:to-[#c7698b]"
            : "bg-transparent"
        }`}
      >
        Details
      </p>
      </div>
      <PiSidebarSimpleBold/>
    </div>

      </div>
      {/* Headers End */}

<div className='w-full  flex justify-center  '>
    <LeftSideBar/>
    <ChatWindow/>
    <RightSideChat/>
    </div>
    </div>
  )
}

export default Dashboard