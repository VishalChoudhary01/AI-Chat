import React from 'react'
import { motion } from 'motion/react'
const getBackgroundColor=(name)=>{
    const letters=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    const indexofFirstLetter=letters.indexOf(name.charAt(0).toUpperCase())
    const colors = [
        "bg-[#e24725]", "bg-[#f39c12]", "bg-[#27ae60]", "bg-[#2980b9]", "bg-[#8e44ad]", "bg-[#2c3e50]",
        "bg-[#d35400]", "bg-[#c0392b]", "bg-[#16a085]", "bg-[#34495e]", "bg-[#e67e22]", "bg-[#1abc9c]",
        "bg-[#9b59b6]", "bg-[#f1c40f]", "bg-[#7f8c8d]", "bg-[#e84393]", "bg-[#00b894]", "bg-[#fdcb6e]",
        "bg-[#0984e3]", "bg-[#6c5ce7]", "bg-[#fd79a8]", "bg-[#636e72]", "bg-[#fab1a0]", "bg-[#00cec9]",
        "bg-[#dfe6e9]", "bg-[#b2bec3]", "bg-[#ffeaa7]", "bg-[#81ecec]"
    ];
    return colors[indexofFirstLetter%colors.length]
}

const ChatHead = ({name,image,LetterStyle}) => {

    const firstName=name.split(" ")[0];
    const firstLetter=firstName.charAt(0).toUpperCase();
    const backgroundColor=getBackgroundColor(firstName);
  return (
    <motion.div
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
     className='flex relative cursor-pointer font-Poppins items-center justify-center w-full h-full rounded-full overflow-hidden'>
        {image?(
            <img src={image} alt={`${name}-profile`} className='absolute w-full h-full overflow-hidden object-center'/>
        ):(
            <div className={`flex items-center justify-center w-full h-full rounded-full ${backgroundColor}`}>
                <span className={` ${LetterStyle} font-bold text-white`}>{firstLetter}</span>
            </div>
        )}
    </motion.div>
  )
}

export default ChatHead