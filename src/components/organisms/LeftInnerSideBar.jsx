import React from 'react'
import MessageCard from './MessageCard'
import mess from '../../assets/icon/mess.png'
import iconshare from '../../assets/icon/share.png'
import { FaChevronDown } from "react-icons/fa";

const LeftSideBar = () => {
  return (
    <div className='w-[20%]  mr-2   shadow shadow-ChatBg '>
          <div className='w-full px-2.5 pt-2'>
            <div className='flex  w-full justify-center md:text-[0.95rem]'>
              <p className='w-full flex items-center font-bold gap-x-1 font-Poppins'> <span>5 Open</span>
                <FaChevronDown className='text-black'/>
              </p>
              <p className='w-full flex items-center font-bold gap-x-1 font-Poppins'> <span>Waiting longest</span>
                <FaChevronDown className='text-black'/>
              </p>
            </div>
              {/* Messages  */}
            <div className='space-y-2 pt-3.5'>
            <MessageCard userName={"Louis Easton"} watching={true} time2={"43min"} SeenMessage={true} message={"Hey , I have a question"} />
            <MessageCard time={"3min"} userName={"Ivan Nike"} time2={"20min"} SeenMessage={false} message={"Hey , I have a question"} />
            <MessageCard messageCount={"5"} userName={"Lead From New York"} time2={"40min"} SeenMessage={false} message={"Good Morning  let me ..."} />
            <MessageCard  userName={"Banking API problems"} image={mess} time2={"45min"} SeenMessage={true} message={"Bug report "} />
            <MessageCard  userName={"Lead From New York"} image={iconshare} time2={"45min"} SeenMessage={true} message={"Hey there, I am here  ..."} />
    
            </div>
    
    
          </div>
        </div>
  )
}

export default LeftSideBar