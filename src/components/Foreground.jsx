import React from 'react'
import Card from './Card'
import { useRef } from 'react'

function Foreground() {

    const ref = useRef(null);

const data = [
    {
        desc: "React js is a library of javascript which is so powerful and supports one-page web-applications",
        fileSize:"0.9mb",
        close:false,
        tag:{isOpen:true , tagTitle:"Download Now" , tagColor:"green"}
    },
    {
        desc: "React js is a library of javascript which is so powerful and supports one-page web-applications",
        fileSize:"0.9mb",
        close:false,
        tag:{isOpen:true , tagTitle:"Open Now" , tagColor:"blue"}
    },
    {
        desc: "React js is a library of javascript which is so powerful and supports one-page web-applications",
        fileSize:"0.9mb",
        close:false,
        tag:{isOpen:true , tagTitle:"Download Now" , tagColor:"green"}
    }
]

  return (
    <div ref = {ref} className='fixed top-0 left-0 z-[3]  w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data = {item} reference = {ref}/>
        ))}
    </div>

  )
}

export default Foreground