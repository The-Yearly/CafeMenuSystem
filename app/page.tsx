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
          <Image src="https://www.apjtours.com/admin/assets/img/blog/Best-Cafes-In-Gurgaon-1200x675.jpg" alt="Cafe Image" width={1000} height={1000} className="absolute left-[500px] h-[500px] w-[800px] rounded-[40px]"/>
          <p className="absolute top-[390px] left-[520px] font-courier text-[50px] text-white ">Summer Time Cafe</p>
          <p className="absolute top-[520px] font-times left-[860px] text-[30px] text-gray-500">Menu</p>
          <input className="absolute h-[50px] rounded-[300px] top-[580px] left-[500px] w-[800px] bg-gray-100 p-[20px] " placeholder="Search" value={search} onChange={gotInput}/>
          <div className="absolute top-[650px] left-[500px] h-[50px] w-[800px] flex border-[1px] rounded-[10px] border-black">
            <ul className="relative flex rounded-[30px] left-[120px]">
            <button className="pl-[50px] font-times" onClick={()=>setRoute(0)} ><p className={route==0?"border-b-[3px] rounded-[3px] pb-[1px]  border-green-600":"border-[0px]"}>Best Sellers</p></button>
            <button className="pl-[50px] font-times" onClick={()=>setRoute(1)}><p className={route==1?"border-b-[3px] rounded-[3px] pb-[1px]  border-green-600":"border-[0px]"}>Foods</p></button>
            <button className="pl-[50px] font-times" onClick={()=>setRoute(2)}><p className={route==2?"border-b-[3px] rounded-[4px] pb-[1px]  border-green-600":"border-[0px]"}>Drinks</p></button>
            <button className="pl-[50px] font-times" onClick={()=>setRoute(3)}><p className={route==3?"border-b-[3px] rounded-[4px] pb-[1px]  border-green-600":"border-[0px]"}>Snacks</p></button>
            <button className="pl-[50px] font-times" onClick={()=>setRoute(4)}><p className={route==4?"border-b-[3px] rounded-[4px] pb-[1px]  border-green-600":"border-[0px]"}>Desserts</p></button> 
            </ul>
          </div>
        </div>
        <div className="absolute top-[730px] left-[525px]">
              <ul className="flex">
                  {topfood.map((food)=><li className="pl-[20px]" key={food.user_id}><Image className="rounded-[100px] w-[130px] h-[130px" src={food.user_userPic} width={500} height={500} alt="Food Item"/></li>)}
              </ul>
              <ul className="absolute top-[170px]">
                  {(filteredData??data).map((food)=><li className="pb-[30px]" key={food.user_id}>
                  <div className="bg-gray-100 rounded-[50px] w-[730px] min-h-[350px] h-auto p-4">
                    <div className="relative top-[10px] left-[20px] h-[300px] w-[650px] rounded-[40px] bg-white p-4">
                              <Image className="relative top-[35px] left-[30px] w-[160px] h-[160px] rounded-[30px]" alt={"Food Item"+food.user_id} width={1000} height={1000} src={food.user_userPic}/>
                              <p className="relative text-gray-500 text-[30px] left-[250px] top-[-120px]">{food.name}</p>
                              <p  className="relative text-gray-500 font-times -top-[100px] w-[350px] left-[250px] line-clamp-3 border-black">{food.user_bio}</p>
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
/*
#foodImg{
    position: relative;
    top: 35px;
    left: 30px;
    width: 160px;
    height: 165px;
    border-radius: 30px;
}*/