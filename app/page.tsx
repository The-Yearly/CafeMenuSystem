'use client'
import styles from "./styles/home.module.css"
import Image from "next/image"
import { useState,useEffect } from "react"
import AddButton from "./components/addButton"
import { Food } from "./assets/interface/food"
import { FoodTemp } from "./assets/interface/foodtemp"
export default function Home(){
  const[route,setRoute]=useState(0)
  const [data,setData]=useState<FoodTemp[]|null>(null)
  const [filteredData,setFilter]=useState<FoodTemp[]|null>(null)
  const [search,setSearch]=useState("")
  useEffect(()=>{const fetchdata=async()=>{
    let link="";
    if(route==0){
      link="http://localhost:8000/users/0"
      setSearch("")
    
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
  function Search(val:string){
    if(data!=null){
      let a=data.filter(food=>food.name.toLowerCase().includes(val.toLocaleLowerCase()))
      setFilter(a)
  }
  }
  function gotInput(event:React.ChangeEvent<HTMLInputElement>){
    if(event.target.value!=""){
      setSearch(event.target.value)
      Search(event.target.value)
    }else{
      setSearch("")
      Search(event.target.value)
    }
  }
    if(data!=null){
    const topfood=data.slice(0,5);
    console.log(topfood)

    return(
      <>
        <div>
          <Image src="https://www.apjtours.com/admin/assets/img/blog/Best-Cafes-In-Gurgaon-1200x675.jpg" alt="Cafe Image" width={1000} height={1000} className="absolute top-[2vw] left-[27vw] h-auto w-[44vw] rounded-[3vw]"/>
          <p className="absolute top-[19vw] left-[30vw] font-courier text-[3vw] text-white ">Summer Time Cafe</p>
          <p className="absolute top-[27vw] font-times left-[47vw] text-[2vw] text-gray-500">Menu</p>
          <input className="absolute h-[3vw] rounded-[2vw] top-[30vw] left-[27vw] w-[44vw] bg-gray-100 p-[1vw] text-[1vw]" placeholder="Search" value={search} onChange={gotInput}/>
          <div className="absolute top-[34vw] left-[27vw] h-[3vw] w-[44vw] flex border-[0.1vw] rounded-[1vw] border-black">
            <div className="relative flex left-[5vw]">
            <button className="pl-[3vw] font-times text-[1vw]" onClick={()=>setRoute(0)}><p className={route==0?"border-b-[0.2vw] rounded-[0.2vw] pb-[0.1vw]  border-green-600":"border-[0px]"}>Best Sellers</p></button>
            <button className="pl-[3vw] font-times text-[1vw]" onClick={()=>setRoute(1)}><p className={route==1?"border-b-[0.2vw] rounded-[0.2vw] pb-[0.1vw]  border-green-600":"border-[0px]"}>Foods</p></button>
            <button className="pl-[3vw] font-times text-[1vw]" onClick={()=>setRoute(2)}><p className={route==2?"border-b-[0.2vw] rounded-[0.2vw] pb-[0.1vw]  border-green-600":"border-[0px]"}>Drinks</p></button>
            <button className="pl-[3vw] font-times text-[1vw]" onClick={()=>setRoute(3)}><p className={route==3?"border-b-[0.2vw] rounded-[0.2vw] pb-[0.1vw]  border-green-600":"border-[0px]"}>Snacks</p></button>
            <button className="pl-[3vw] font-times text-[1vw]" onClick={()=>setRoute(4)}><p className={route==4?"border-b-[0.2vw] rounded-[0.2vw] pb-[0.1vw]  border-green-600":"border-[0px]"}>Desserts</p></button> 
            </div >
          </div>
        </div>
        <div className="absolute top-[40vw] left-[29vw]">
              <ul className="absolute left-[-2vw] grid grid-cols-5 gap-[1vw] w-[45vw] max-h-[150vw]">
                  {topfood.map((food)=><li key={food.user_id}><Image className="rounded-[4vw] w-[7vw] h-auto" src={food.user_userPic} width={500} height={500} alt="Food Item"/></li>)}
              </ul>
              <ul className="absolute top-[9vw]">
                  {(filteredData??data).map((food)=><li className="pb-[2vw]" key={food.user_id}>
                  <div className="bg-gray-100 flex items-center justify-center rounded-[2vw] w-[40vw] min-h-[18vw] h-auto p-4">
                    <div className="absolute  h-[14vw] w-[35vw] rounded-[1vw] bg-white p-4">
                              <Image className="absolute top-[2vw] left-[1.5vw] w-[9vw] h-auto rounded-[2vw]" alt={"Food Item"+food.user_id} width={1000} height={1000} src={food.user_userPic}/>
                              <p className="absolute text-gray-500 text-[2vw] left-[13vw] top-[3vw]">{food.name}</p>
                              <p  className="absolute text-gray-500 font-times top-[6vw] text-[0.9vw] w-[20vw] left-[13vw] line-clamp-3 border-black">{food.user_bio}</p>
                              <AddButton/>
                          </div>
                      </div>
                  </li>)}
              </ul>
          </div>  
      </>
    )
}
}
