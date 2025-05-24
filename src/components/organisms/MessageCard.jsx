import { CgTimelapse } from 'react-icons/cg';
import ChatHead from '../molecules/ChatHead';
const MessageCard = ({ time, messageCount,userName,message ,time2,SeenMessage,image,watching}) => {

  return (
    <div className={`${watching===true?"bg-sky-100":"bg-slate-50"} flex items-center justify-between w-full px-3.5 py-2  rounded-md`}>
      <div className="md:w-[1.8rem] md:h-[1.8rem] self-start w-[20%]">
        <ChatHead name={userName} image={image} LetterStyle={""} />
      </div>
      <div className="w-[60%] leading-5">
        <p className={`md:text-[0.9rem] ${SeenMessage===false?"font-semibold text-black":" font-medium text-gray-600"} `}>{userName}</p>
        <p className={`md:text-[0.7rem] ${SeenMessage===false?"font-semibold text-gray-900":" font-medium text-slate-400"} `}>{message}</p>
      </div>
      <div className="w-[25%] text-right flex flex-col items-end">
        { time &&
          <p className="flex items-center bg-amber-100 px-3 gap-x-1 rounded-4xl">
            <CgTimelapse />
            <span className="md:text-[0.9rem] font-medium">{time}</span>
          </p>
          }
          {messageCount &&
          <p className="md:w-[1.2rem] md:h-[1.2rem] flex justify-center items-center bg-slate-950 text-white rounded-full md:text-[0.6rem]">
            {messageCount}
          </p>
            }
        {
          time2 &&
          <p className="md:text-[0.65rem] font-medium text-gray-600">{time2}</p>
        }

      </div>
    </div>
  );
};

export default MessageCard

{/* <MessageCard time="2025-05-24T10:00:00Z" messageCount={5} />; */}
