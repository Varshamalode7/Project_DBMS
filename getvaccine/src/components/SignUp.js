// import React, { useState } from "react"
// import axios from "axios"
// import { useNavigate} from "react-router-dom"

// function Login() {
//     const history=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
//     const [name,setName]=useState('')
//     const [date,setDate]=useState('')
//     const [slot,setSlot]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:8000/signup",{
//                 email,password,name,date,slot
//             })
//             .then(res=>{
//                 if(res.data==="exist"){
//                     alert("User already exists")
//                 }
//                 else if(res.data==="notexist"){
//                     history("/home",{state:{name:name,date:date}})
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }
//     }


//     return (
//         <div className="signupcont">
//             <form action="POST">
//                 <h6>Name :</h6>
//                 <input className="data" type="name" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name"  /> <br/>
//                 <h6>Email :</h6>
//                 <input className="data" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email"  /><br/>
//                 <h6>Password :</h6>
//                 <input className="data" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" /><br/>
//                 <h6>Select Date :</h6>
//                 <input className="data"type="date" onChange={(e) => { setDate(e.target.value) }} /><br/>
//                 <h6>Select Slot :</h6>
//                 <input className="data"type="number" onChange={(e) => { setSlot(e.target.value) }} placeholder="Slot"  min="1" max="10"/><br/>
//                 <input className="but" type="submit" onClick={submit} />
                

//             </form>

//         </div>
//     )
// }


// export default Login

import React, { useState } from "react"
import axios from "axios"
import { useNavigate} from "react-router-dom"

function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [date,setDate]=useState('')
    const [slot,setSlot]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3000/signup",{
                email,password,name,date,slot
            })
        
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{name:name,date:date}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }
    }


    return (
        <div className="signupcont">
            <form action="POST">
                <h6>Name :</h6>
                <input className="data" type="name" onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name"  /> <br/>
                <h6>Email :</h6>
                <input className="data" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter Email"  /><br/>
                <h6>Password :</h6>
                <input className="data" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter Password" /><br/>
                <h6>Select Date :</h6>
                <input className="data"type="date" onChange={(e) => { setDate(e.target.value) }} /><br/>
                <h6>Select Slot :</h6>
                <input className="data"type="number" onChange={(e) => { setSlot(e.target.value) }} placeholder="Slot"  min="1" max="10"/><br/>
                <input className="but" type="submit" onClick={submit} />
                

            </form>

        </div>
    )
}

export default Login