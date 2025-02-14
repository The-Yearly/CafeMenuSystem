'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import AddButton from "./components/addButton"
import { FoodTemp } from "./assets/interface/foodtemp"
export default function Home(){
  const[route,setRoute]=useState(0)
  const [data,setData]=useState<FoodTemp[]|null>(null)
  const [filteredData,setFilter]=useState<FoodTemp[]|null>(null)
  const [search,setSearch]=useState("")
  /*'https://cafe-menu-system-backend.vercel.app/users/0*/
  useEffect(()=>{const fetchdata=async()=>{
    let link="";
    if(route==0){
      link="http://localhost:8000/users/0"
      setSearch("") 
      setFilter(null) 
    }
    else if(route==1){
      link="http://localhost:8000/users/1"
    }
    else if(route==2){
      link="http://localhost:8000/users/2"
    }
    else if(route==3){
      link="http://localhost:8000/users/3"
    }
    else if(route==4){
      link="http://localhost:8000/users/4"
    } 
    const res=await fetch(link)
    setData(await res.json()) 
  }
  fetchdata()},[route])
  useEffect(()=>{const Search=()=>{
    if(data!=null){
      const a=data.filter(food=>food.name.toLowerCase().includes(search.toLowerCase()))
      console.log(a)
      setFilter(a)
  }
  }
  Search()},[search])
  function gotInput(event:React.ChangeEvent<HTMLInputElement>){
    if(event.target.value!=""){
      setSearch(event.target.value)
    }else{
      setSearch("")
    }
  }
    if(data!=null){
      console.log(route)
      console.log(data,filteredData)
    const topfood=data.slice(0,5);
    return(
      <>
        <div>
          <Image src="https://www.apjtours.com/admin/assets/img/blog/Best-Cafes-In-Gurgaon-1200x675.jpg" alt="Cafe Image" width={1000} height={1000} className="absolute top-[2vw] left-[27vw] h-auto w-[44vw] rounded-[3vw] 2xl:top-[2vw] 2xl:left-[27vw] 2xl:h-auto 2xl:w-[44vw] 2xl:rounded-[3vw]  xl:top-[2vw] xl:left-[27vw] xl:h-auto xl:w-[1vw] xl:rounded-[3vw] lg:top-[3vw] lg:left-[21vw] lg:h-auto lg:w-[60vw] md:rounded-[3vw] md:top-[4vw] md:left-[12vw] md:w-[75vw] lg:rounded-[3vw]"/>
          <p className="absolute 2xl:top-[19vw] 2xl:left-[30vw] 2xl:text-[3vw] font-courier text-white lg:top-[28vw] lg:left-[24vw] lg:text-[4vw] md:top-[35vw] md:left-[15vw] md:text-[5vw]">Summer Time Cafe</p>
          <input className="absolute 2xl:h-[3vw] 2xl:rounded-[2vw] 2xl:top-[30vw] 2xl:left-[27vw] 2xl:w-[44vw] lg:h-[4vw] lg:rounded-[2vw] lg:top-[42vw] lg:left-[21vw] lg:w-[60vw] md:rounded-[2vw] md:h-[5vw] md:top-[54vw] md:left-[12vw] md:w-[75vw] bg-white p-[1vw] " placeholder="Search" value={search} onChange={gotInput}/>
          <p className="absolute 2xl:top-[27vw] font-times lg:left-[48vw] 2xl:text-[2vw] lg:top-[38vw] 2xl:left-[47vw] lg:text-[2.5vw] md:top-[48vw] md:left-[45vw] md:text-[3.5vw] text-gray-500">Menu</p>
          <div className="absolute 2xl:top-[34vw] 2xl:left-[27vw] 2xl:h-[3vw] 2xl:w-[44vw] flex border-[0.1vw] 2xl:rounded-[1vw] 2xl:flex 2xl:border-[0.1vw] lg:left-[21vw] lg:top-[47vw] lg:h-[5vw] lg:w-[60vw] lg:rounded-[2vw] md:left-[12vw] md:top-[61vw] md:h-[7vw] md:w-[75vw] md:rounded-[2vw] border-black">
            <div className="relative flex z-10 2xl:left-[5vw] lg:left-[1vw] ">
            <button className="2xl:pl-[3vw] font-times 2xl:text-[1vw] lg:pl-[5vw] md:pl-[7vw]" onClick={()=>setRoute(0)}><p className={route==0?"2xl:border-b-[0.2vw] 2xl:rounded-[0.2vw] 2xl:pb-[0.1vw] border-green-600 lg:border-b-[0.3vw] lg:rounded-[0.35vw] lg:pb-[0.3vw] md:border-b-[0.5vw] md:rounded-[0.5vw] md:pb-[0.3vw]":"border-[0px]"}>Starters</p></button>
            <button className="2xl:pl-[3vw] font-times 2xl:text-[1vw] lg:pl-[5vw] md:pl-[7vw]" onClick={()=>setRoute(1)}><p className={route==1?"2xl:border-b-[0.2vw] 2xl:rounded-[0.2vw] 2xl:pb-[0.1vw] border-green-600 lg:border-b-[0.3vw] lg:rounded-[0.35vw] lg:pb-[0.3vw] md:border-b-[0.5vw] md:rounded-[0.5vw] md:pb-[0.3vw]":"border-[0px]"}>Salads</p></button>
            <button className="2xl:pl-[3vw] font-times 2xl:text-[1vw] lg:pl-[5vw] md:pl-[7vw]" onClick={()=>setRoute(2)}><p className={route==2?"2xl:border-b-[0.2vw] 2xl:rounded-[0.2vw] 2xl:pb-[0.1vw] border-green-600 lg:border-b-[0.3vw] lg:rounded-[0.35vw] lg:pb-[0.3vw] md:border-b-[0.5vw] md:rounded-[0.5vw] md:pb-[0.3vw]":"border-[0px]"}>Main Course</p></button>
            <button className="2xl:pl-[3vw] font-times 2xl:text-[1vw] lg:pl-[5vw] md:pl-[7vw]" onClick={()=>setRoute(3)}><p className={route==3?"2xl:border-b-[0.2vw] 2xl:rounded-[0.2vw] 2xl:pb-[0.1vw] border-green-600 lg:border-b-[0.3vw] lg:rounded-[0.35vw] lg:pb-[0.3vw] md:border-b-[0.5vw] md:rounded-[0.5vw] md:pb-[0.3vw]":"border-[0px]"}>Drinks</p></button>
            <button className="2xl:pl-[3vw] font-times 2xl:text-[1vw] lg:pl-[5vw] md:pl-[7vw]" onClick={()=>setRoute(4)}><p className={route==4?"2xl:border-b-[0.2vw] 2xl:rounded-[0.2vw] 2xl:pb-[0.1vw] border-green-600 lg:border-b-[0.3vw] lg:rounded-[0.35vw] lg:pb-[0.3vw] md:border-b-[0.5vw] md:rounded-[0.5vw] md:pb-[0.3vw]":"border-[0px]"}>Desserts</p></button> 
            </div >
          </div>
        </div>
        <div className="absolute z-0 2xl:top-[33vw] 2xl:left-[27vw] lg:top-[46vw] lg:left-[21vw] md:top-[63vw] md:left-[12vw]">
              <div className="grid grid-cols-3 2xl:gap-y-[3vw] 2xl:gap-5 2xl:w-[45vw] lg:gap-y-[5vw] lg:gap-5 lg:w-[60vw] md:gap-y-[5vw] md:gap-10  md:w-[70vw]">
                  {(filteredData??data).map((food)=>
                  <div className="relative shadow-lg bg-white flex items-center justify-center 2xl:top-[9vw] 2xl:rounded-[2vw] 2xl:w-[14vw] 2xl:min-h-[17vw] 2xl:p-4 h-auto lg:p-8 lg:top-[9vw] lg:rounded-[2vw] lg:w-[18vw] lg:min-h-[23vw] md:p-8 md:top-[9vw] md:rounded-[2vw] md:w-[24vw] md:min-h-[30vw]" key={food.user_id}>
                      <Image className="absolute top-[-2vw] 2xl:w-[9vw] h-auto rounded-[10vw] lg:w-[11vw] md:w-[14vw]" alt={"Food Item"+food.user_id} width={1000} height={1000} src={food.user_userPic}/>
                      <p className="absolute text-center text-black font-courier 2xl:text-[1.5vw] break-words  2xl:w-[10vw] 2xl:top-[7vw] lg:text-[2vw] lg:w-[15vw] lg:top-[10vw]  md:text-[2.5vw] md:w-[20vw] md:top-[12vw]">{food.name}</p>
                      <p  className="absolute z-10 text-center text-gray-500 font-times 2xl:top-[9.2vw] 2xl:text-[0.9vw] 2xl:w-[10vw] line-clamp-3  lg:top-[13vw] lg:text-[1.4vw] lg:w-[15vw] md:top-[15vw] md:text-[2vw] md:w-[21vw] border-black">{food.user_bio}</p>
                      <p className="absolute text-center 2xl:top-[13.7vw] 2xl:text-[1vw] font-times lg:text-[2vw] lg:top-[19vw] md:text-[2.5vw] md:top-[24vw]">1000</p>
                      <AddButton/>
                    </div>
                  )}
              </div>
          </div>  
      </>
    )
}
}
