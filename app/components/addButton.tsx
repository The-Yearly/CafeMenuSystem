'use client'
import { useState } from "react"

export default function AddButton(){
    const [additem,setAddItem]=useState(0)
    return(
        <>
            {additem==0?<button className="absolute top-[11vw] left-[28vw] h-[2vw] text-[1vw] w-[5vw] bg-white text-gray-500 rounded-[1vw] border-[0.1vw] border-black" onClick={()=>{setAddItem(additem+1)}}>Add Item</button>:<div className="absolute top-[11vw] left-[28vw] w-[5vw] h-[2vw] border-[0.1vw]  border-black rounded-[2vw]"><button className="absolute left-[0.8vw] text-[1vw] top-[0.2vw] text-red-400" onClick={()=>{setAddItem(additem-1)}}>-</button><p className="absolute left-[2.2vw] top-[0.25vw] text-[0.9vw]">{additem}</p><button className="absolute right-[0.6vw] text-green-400 text-[1vw] top-[0.2vw]" onClick={()=>{setAddItem(additem+1)}}>+</button></div>}
        </>
    )
}