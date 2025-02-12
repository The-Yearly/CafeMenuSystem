'use client'
import styles from "@/app/styles/home.module.css"
import { useState } from "react"

export default function AddButton(){
    const [additem,setAddItem]=useState(0)
    return(
        <>
            {additem==0?<button className="relative top-[-70px] left-[530px] h-[40px] w-[80px] bg-white text-gray-500 rounded-[30px] border-[1px] border-black" onClick={()=>{setAddItem(additem+1)}}>Add Item</button>:<div className="relative top-[-70px] left-[530px] flex w-[80px] h-[40px] border-[1px]  border-black rounded-[30px]"><button className="absolute left-[10px] top-[6px] text-red-400" onClick={()=>{setAddItem(additem-1)}}>-</button><p className="absolute left-[35px] top-[7px]">{additem}</p><button className="absolute right-[10px] text-green-400 top-[7px]" onClick={()=>{setAddItem(additem+1)}}>+</button></div>}
        </>
    )
}