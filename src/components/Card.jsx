import React from 'react';
import { MdFolderSpecial } from "react-icons/md";
import { MdCloudDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}}  dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/10 text-white px-8 py-10 overflow-hidden'>
         <MdFolderSpecial/>
         <p className='text-sm mt-5 leading-tight '>{data.desc}</p>

         <div className='footer absolute bottom-0 w-full   left-0'>

         <div className='flex items-center justify-between px-8 py-3 mb-5'>
            <h5>{data.fileSize}</h5>
            
            {data.close ? <IoClose/> : <MdCloudDownload/> }

         </div>
            {
                data.tag.isOpen ? (
                    <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} items-center flex justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                 </div>
                ) : null
            }
        
         </div>
          </motion.div>

   
  )
}

export default Card