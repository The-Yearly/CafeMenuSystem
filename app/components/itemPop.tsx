'use clinet'
import { useEffect, useState } from "react"
import { FoodTemp } from "../assets/interface/foodtemp"
import Image from "next/image"
export default function Item(props:{item:FoodTemp}){
    const [model,setModel]=useState(false)
    const food=props.item
    useEffect(()=>{
        if(model){
            document.body.classList.add("overflow-y-hidden")
        }else{
            document.body.classList.remove("overflow-y-hidden")
        }
    })
    return(
        <>
            <Image className="absolute 2xl:top-[-2vw] z-0 xl:top-[-2vw] md:top-[-2vw] 2xl:w-[10vw] h-auto  lg:w-[13vw] md:w-[14vw] sm:w-[23vw] sm:rounded-[15vw] sm:top-[-5vw] xl-phone:w-[28vw] xl-phone:rounded-[15vw] xl-phone:top-[-8vw] w-[30vw] rounded-[15vw] top-[-8vw]" alt={"Food Item"+food.user_id} width={1000} height={1000} src={food.user_userPic} onClick={()=>{setModel(!model)}}/>
            {model &&
            <div className="fixed z-50 top-0 left-0 w-[100vw] h-[100vw] bg-slate-200  opacity-30">
            </div>}
        </>
    )
}