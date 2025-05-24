import { useState } from 'react';
import { motion } from 'motion/react';
import ChatHead from '../molecules/ChatHead';
import girl from '../../assets/images/girl.png'
import { FaAngleDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "I was hoping you'd be able to refund me...", isSent: false, timestamp: '4m' },
    { id: 2, text: "Let me look into this for you...", isSent: true, timestamp: 'seen' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        isSent: true,
        timestamp: 'Just now'
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="w-[60%] flex flex-col items-center min-h-screen justify-between px-2 pt-2 ">
      <div className="w-full max-w-7xl space-y-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`w-full flex gap-x-1 ${message.isSent ? 'justify-end' : 'justify-start'}`}
          >
            {!message.isSent && (
              <motion.div
              initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
              className='md:w-6 lg:h-6 self-end'>
                <ChatHead name={"Louis"}/>
              </motion.div>
              
            )
            }

            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`max-w-5xl lg:max-w-7xl p-3 rounded-lg ${
                message.isSent
                  ? 'bg-blue-100 text-slate-900'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.isSent ? 'text-blue-100' : 'text-gray-500'}`}>
                { message.timestamp}
              </p>
            </motion.div>

            {
              message.isSent && (
              <motion.div
              initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
              className='md:w-6 lg:h-6 self-end'>
                <ChatHead name={""} image={girl}/>
              </motion.div>
              
            )
            }
          </div>
        ))}
      </div>



      {/* message type */}
          <div className='w-full'>
            <div className='w-full relative   px-3 rounded-lg border border-gray-300 shadow shadow-ChatBg'>
          <div className='flex gap-x-1 absolute bottom-32 left-6 items-center'>
          <MdMessage/>
          <span>Chat</span>
          <FaAngleDown/>
        </div>
      <textarea className=' resize-none w-full h-40  px-2 pt-10 focus:outline-none ' placeholder='Use XX for shortcuts'>

      </textarea>
      <div className='absolute flex bottom-2 left-4 gap-x-2 text-gray-600'>
        
          <AiFillThunderbolt/>
        <span className='bg-gray-400 h-4 w-[0.1em]'>
        </span>
          <FaBookmark/>
          <FaSmile/>

      </div>

      <div className='absolute right-0 bottom-2 flex items-center gap-x-2 text-gray-600'>
        <button onClick={handleSend} className='font-medium'>Send</button>
        <span className='bg-gray-400 h-4 w-[0.1em]'></span>
        <FaAngleDown/>
      </div>
      
        </div>
          </div>
        
     
       
    </div>
  );
};

export default ChatWindow;
