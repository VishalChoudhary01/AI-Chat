import React,{useState} from 'react'
import { RiVoiceRecognitionFill } from "react-icons/ri";
import { IoMdArrowRoundUp } from "react-icons/io";
const RightSideChat = () => {
   

  return (
<div className='w-[24%] gradientbg min-h-screen flex justify-center items-center relative'>

<div className='absolute '>
<div className='flex justify-center items-center flex-col'>
    < RiVoiceRecognitionFill className='text-4xl'/>
 <div className='text-center leading-5'>
 <p className='md:text-2xl font-Poppins font-semibold'>Hi, I'm Fin  AI Copilot  </p>
 <p className='text-slate-500 font-medium'>Ask me anything about this conversation</p>
</div>
  </div>
</div>
  
  <div className='absolute bottom-0  h-16 w-full px-2.5  '>

    <p className='bg-[#fff] px-3 py-2 rounded-3xl shadow shadow-IconBg2 absolute -top-14'>Suggested How do I get a refund?</p>
    <input type="text" placeholder='Ask a Question' className='w-full bg-white relative h-11 px-3 rounded-lg border border-gray-400 focus:ring-gray-500 focus:shadow-2xl shadow-IconBg2' />
  <span className='absolute right-4 top-3'>
    <IoMdArrowRoundUp className='text-lg text-gray-500'/>
  </span>
  </div>

</div>

  )
}

export default RightSideChat