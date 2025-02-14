const express=require("express")
const mysql=require("mysql2")
const app=express()
app.use(express.json())
const cors = require("cors");
app.use(cors());


const cred={ host: "localhost",user: "theyearly",password: "Arduino1",database:"letterboxd"}
/*
const cred = {
    host: "letterboxd-theyearlone-7596.k.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_V64uo1ki7VnX7FsujhQ",
    database: "letterboxd",
    port: 24073,
  };*/
function connectMaria(){
con = mysql.createConnection(cred);
    con.connect(function(Err){
        if(Err){
            setTimeout(connectMaria,5000)
        }else{
            console.log("Connected With Maria ;)")
        }
    })
}
connectMaria()
app.get("/users/:off",(req,res)=>{
    con.query("select user_id,name,user_bio,user_userPic from users limit 6 offset "+req.params.off,function(err,rows){
        if(err) throw err;
        res.json(rows);
    })
})
app.get("/test",(req,res)=>{
    res.json({message:"Hello There"})
})
app.listen(8000,()=>{
    console.log("Server Starting ;)")
})