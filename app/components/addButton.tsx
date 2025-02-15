'use client'
import { useState } from "react"
export default function AddButton(){
    const [additem,setAddItem]=useState(0)
    return(
        <>
            {additem==0?<button className="absolute text-center z-10 text-green-300 2xl:top-[5vw] shadow-md 2xl:left-[9vw] 2xl:h-[2vw] 2xl:text-[1vw] 2xl:w-[2vw] border-1 2xl:rounded-[10vw] lg:top-[6vw] lg:left-[11vw] lg:h-[3vw] lg:text-[1.5vw] lg:w-[3vw] border-1 bg-white md:rounded-[10vw] md:top-[8vw] md:left-[14vw] md:h-[4vw] md:text-[2vw] md:w-[4vw] border-1  lg:rounded-[10vw] sm:top-[10vw] sm:rounded-[5vw] sm:left-[24vw] sm:h-[5vw] sm:text-[3vw] sm:w-[5vw]" onClick={()=>{setAddItem(additem+1)}}>+</button>:<div className="absolute flex items-center 2xl:top-[5vw] 2xl:left-[6vw] bg-white  2xl:w-[5vw] 2xl:h-[2vw] 2xl:rounded-[2vw] lg:top-[6vw] lg:left-[7vw] lg:w-[7vw] lg:h-[3vw] shadow-md lg:rounded-[2vw] sm:top-[10vw] sm:left-[17vw] sm:w-[12vw] sm:h-[5vw] sm:rounded-[3vw] md:top-[8vw] md:left-[8vw] md:w-[10vw] md:h-[4vw] md:rounded-[2vw]"><button className="absolute 2xl:left-[0.8vw] 2xl:text-[1.5vw]  text-red-400 lg:left-[1vw] lg:text-[2vw] md:left-[1vw] md:text-[3.5vw] sm:left-[2vw] sm:text-[4vw]" onClick={()=>{setAddItem(additem-1)}}>-</button><p className="absolute 2xl:left-[2.2vw] 2xl:text-[0.9vw] lg:left-[3vw] lg:text-[1.5vw] md:left-[4vw]  md:text-[2vw] sm:left-[5.5vw] sm:text-[2.5vw]">{additem}</p><button className="absolute 2xl:right-[0.6vw] text-green-400 2xl:text-[1vw] lg:right-[1vw] lg:text-[1.5vw] md:right-[1.5vw] md:text-[2w] sm:right-[2vw] sm:text-[2w]" onClick={()=>{setAddItem(additem+1)}}>+</button></div>}
        </>
    )
}