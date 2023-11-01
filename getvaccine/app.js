const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/getSlot",cors(),(req,res)=>{
    collection.find()
    .then(collection =>res.json(collection))
    .catch(err=>res.json(err))
})


app.post("/signup",async(req,res)=>{
    const{email,password,name,date,slot}=req.body

    const data={
        email:email,
        password:password,
        name:name,
        date:date,
        slot:slot
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})

