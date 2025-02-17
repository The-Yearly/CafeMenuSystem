'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import AddButton from "../components/addButton"
import { FoodTemp } from "../assets/interface/foodtemp"
export default function Billing(){
  const [data,setData]=useState<FoodTemp[]|null>(null)
  useEffect(()=>{const fetchdata=()=>{
      const cartDets=sessionStorage.getItem("cartDets")
      if(cartDets!=null){
        setData(JSON.parse(cartDets))
       }
      }
      fetchdata()},[])

  if(data!=null){
    return(
      <>
        <div>
          <Image src="https://www.apjtours.com/admin/assets/img/blog/Best-Cafes-In-Gurgaon-1200x675.jpg" alt="Cafe Image" width={1000} height={1000} className="absolute  2xl:top-[2vw] 2xl:left-[27vw] 2xl:h-auto 2xl:w-[44vw] 2xl:rounded-[3vw]  xl  :top-[2vw] xl:left-[20vw] xl:h-auto xl:w-[60vw] xl:rounded-[3vw] lg:top-[3vw] lg:left-[21vw] lg:h-auto lg:w-[60vw] md:rounded-[3vw] md:top-[4vw]  md:h-auto md:left-[12vw] md:w-[75vw]  sm:rounded-[4vw] sm:top-[5vw] sm:left-[5vw] sm:h-auto sm:w-[90vw] xl-phone:rounded-[3vw] xl-phone:h-[80vw] xl-phone:top-[0vw] xl-phone:left-[0vw] xl-phone:w-[100vw] rounded-[3vw] h-[75vw] top-[0vw] left-[0vw] w-[100vw] lg:rounded-[3vw]"/>
          <p className="absolute 2xl:top-[19vw] 2xl:left-[30vw] 2xl:text-[3vw] font-courier text-white lg:top-[28vw] lg:left-[24vw] lg:text-[4vw] md:top-[35vw] md:left-[15vw] md:text-[5vw] sm:top-[40vw] sm:left-[10vw] sm:text-[7vw] xl-phone:top-[60vw] xl-phone:left-[1vw] xl-phone:text-[9vw] top-[60vw] left-[1vw] text-[10vw] ">Summer Time Cafe</p>
        </div>
        <div className="absolute z-0 2xl:top-[29vw] 2xl:left-[27vw] lg:top-[46vw] lg:left-[21vw] md:top-[63vw] md:left-[12vw] sm:top-[78vw] sm:left-[5vw] xl-phone:top-[125vw] xl-phone:left-[1vw] xl:top-[40vw]">
              <ul className="absolute 2xl:left-[3vw] xl:left-[10vw] ">
                  {data.map((food)=>
                  <li className="2xl:pb-[1vw] xl:pb-[1vw]" key={food.user_id}>
                  <div className="bg-gray-100 2xl:rounded-[2vw] 2xl:w-[38vw] 2xl:min-h-[16vw] h-auto 2xl:p-4 xl:rounded-[2vw] xl:w-[38vw] xl:min-h-[16vw]  xl:p-4">
                    <div className="relative 2xl:top-[0.5vw] 2xl:left-[1.3vw] 2xl:w-[34vw] 2xl:h-[13vw] xl:rounded-[2vw] xl:top-[0.5vw] xl:left-[1.3vw] xl:w-[34vw] xl:h-[13vw] 2xl:rounded-[2vw] bg-white p-4">
                              <Image className="relative 2xl:top-[2vw] 2xl:left-[2vw] 2xl:w-[8vw] 2xl:h-[8vw] 2xl:rounded-[2vw] xl:top-[1vw] xl:left-[2vw] xl:w-[8vw] xl:h-[8vw] xl:rounded-[2vw]" alt={"Food Item"+food.user_id} width={1000} height={1000} src={food.user_userPic}/>
                              <p className="relative text-gray-500 2xl:text-[2vw] 2xl:left-[12vw] 2xl:top-[-6vw] xl:text-[2vw] xl:left-[12vw] xl:top-[-7vw]">{food.name}</p>
                              <p  className="relative text-gray-500 font-times 2xl:top-[-5.5vw] 2xl:w-[20vw]  2xl:left-[12vw] xl:top-[-7vw] xl:w-[20vw]  xl:left-[12vw] xl:text-[1vw] line-clamp-3">{food.user_bio}</p>
            
                          </div>
                      </div>
                  </li>
                  )}
              </ul>
          </div>  
      </>
    )
}
}
