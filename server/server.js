const { PrismaClient } = require("@prisma/client");
const express=require("express")
const mysql=require("mysql2")
const prisma=new PrismaClient()
const app=express()
app.use(express.json())
const cors = require("cors");
app.use(cors());

async function test(){
    await prisma.items.create({
        data:{
            item_name:"Chicken",
            item_bio:"S",
            item_category:"s",
            item_image:"D",
            item_isVegan:false,

        }
    })
}

app.get("/test",async(req,res)=>{
    await test()
    res.json({message:"Hello There"})

})
const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("Server Starting ;)")
})
