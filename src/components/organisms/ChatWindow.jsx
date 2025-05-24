import { useState } from 'react';
import { motion } from 'motion/react';
import ChatHead from '../molecules/ChatHead';
import girl from '../../assets/images/girl.png'
import { FaAngleDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "I was hoping you'd be able to refund me...", isSent: false, timestamp: '4dm' },
    { id: 2, text: "Let me look into this for you...", isSent: true, timestamp: 'Just now' },
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
    <div className="w-[60%] flex flex-col items-center min-h-screen px-2 py-4 ">
      <div className="w-full max-w-7xl space-y-4">
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
                {message.timestamp}
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
        <div className='w-full relative top-28 px-3'>
          <div className='flex gap-x-1 absolute bottom-14 left-6 items-center'>
          <MdMessage/>
          <span>Chat</span>
          <FaAngleDown/>
        </div>
      <textarea className=' w-full pt-8 px-2 focus:outline-none rounded-lg border border-gray-300 shadow shadow-ChatBg' placeholder='Use XX for shortcuts'>
       

      </textarea>
      
        </div>
     
       
    </div>
  );
};

export default ChatWindow;
