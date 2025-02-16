'use client'
import { useEffect, useState } from "react"
export default function AddButton(props:{id:number}){
    let cartJson;
    const [additem,setAddItem]=useState(0)
    useEffect(()=>{const fetchdata=async()=>{
        const cart=sessionStorage.getItem("cart")
        console.log(cart)
        if(cart!=null){
            cartJson=JSON.parse(cart)
            if(cartJson[props.id]!=null){
                setAddItem(cartJson[props.id])
            }else{
                setAddItem(0)
            }
        }
    }
    fetchdata()},[])
    function AddItem(){
        const cart=sessionStorage.getItem("cart")
        console.log(cart)
        if(cart==null){
            sessionStorage.setItem("cart","{}")
            cartJson={}
        }else{
            cartJson=JSON.parse(cart)
        }
        if(cart!=null){
        setAddItem(additem+1)
        cartJson[props.id]=additem+1
        sessionStorage.setItem("cart",JSON.stringify(cartJson))
        }
    }
    function RemoveItem(){
        const cart=sessionStorage.getItem("cart")
        console.log(cart)
        if(cart!=null){
            cartJson=JSON.parse(cart)
            setAddItem(additem-1)
            cartJson[props.id]=additem-1
            if(additem-1==0){
                delete cartJson[props.id]
            }
            sessionStorage.setItem("cart",JSON.stringify(cartJson))

        }
    }
    return(
        <>
            {additem==0?<button className="absolute text-center z-10 text-green-300 2xl:top-[5vw] shadow-md 2xl:left-[9vw] 2xl:h-[2vw] 2xl:text-[1vw] 2xl:w-[2vw] border-1 2xl:rounded-[10vw] lg:top-[6vw] lg:left-[11vw] lg:h-[3vw] lg:text-[1.5vw] lg:w-[3vw] border-1 bg-white md:rounded-[10vw] md:top-[8vw] md:left-[14vw] md:h-[4vw] md:text-[2vw] md:w-[4vw] border-1  lg:rounded-[10vw] sm:top-[10vw] sm:rounded-[5vw] sm:left-[24vw] sm:h-[5vw] sm:text-[3vw] sm:w-[5vw] xl-phone:rounded-[5vw] xl-phone:top-[13vw] xl-phone:left-[28vw] xl-phone:h-[7vw] xl-phone:text-[4vw] xl-phone:w-[7vw] rounded-[5vw] top-[13vw] left-[28vw] h-[8vw] text-[4.5vw] w-[8vw] " onClick={AddItem}>+</button>:<div className="absolute flex items-center 2xl:top-[5vw] 2xl:left-[6vw] bg-white  2xl:w-[5vw] 2xl:h-[2vw] 2xl:rounded-[2vw] lg:top-[6vw] lg:left-[7vw] lg:w-[7vw] lg:h-[3vw] shadow-md lg:rounded-[2vw] sm:top-[10vw] sm:left-[17vw] sm:w-[12vw] sm:h-[5vw] sm:rounded-[3vw] md:top-[8vw] md:left-[8vw] md:w-[10vw] md:h-[4vw] md:rounded-[2vw]  xl-phone:top-[13vw] xl-phone:left-[19vw] xl-phone:w-[16vw] xl-phone:h-[7vw] xl-phone:rounded-[5vw]  top-[13vw] left-[19vw] w-[17vw] h-[8vw] rounded-[5vw]"><button className="absolute 2xl:left-[0.8vw] 2xl:text-[1.5vw]  text-red-400 lg:left-[1vw] lg:text-[2vw] md:left-[1vw] md:text-[3.5vw] sm:left-[2vw] sm:text-[4vw] xl-phone:left-[2vw] xl-phone:text-[6vw] left-[2vw] text-[7vw]" onClick={RemoveItem}>-</button><p className="absolute 2xl:left-[2.2vw] 2xl:text-[0.9vw] lg:left-[3vw] lg:text-[1.5vw] md:left-[4vw]  md:text-[2vw] sm:left-[5.5vw] sm:text-[2.5vw] xl-phone:left-[7vw] xl-phone:text-[3.5vw] left-[7vw] text-[4vw]">{additem}</p><button className="absolute 2xl:right-[0.6vw] text-green-400 2xl:text-[1vw] lg:right-[1vw] lg:text-[1.5vw] md:right-[1.5vw] md:text-[2.5vw] sm:right-[2vw] sm:text-[3vw] xl-phone:right-[2vw] xl-phone:text-[4vw] right-[2.5vw] text-[5vw]" onClick={AddItem}>+</button></div>}
        </>
    )
}