// const express=require("express")
// const cors=require("cors")
// const collection=require("./mongo")
// const app=express()
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cors())

// app.get("/",cors(),(req,res)=>{

// })

// app.post("/",async(req,res)=>{
//     const {msg}=req.body
//     const data={
//         msg:msg
//     }
//     await collection.insertMany([data])
// })

// app.listen(8000,()=>{
//     console.log("port connected")
//})

const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    slot:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection