// import React, { useState } from 'react'
// import axios from 'axios'

// export default function Home() {
//     const [msg,setMsg]=useState('')

//     let submit = async(e)=>{
//         e.preventDefault()
//         try{
//             alert("submitted")
//             await axios.post("http://localhost:8000",{
//                 msg
//             })
//         }
//         catch(e){
//             console.log(e);
//         }
//     }

//   return (
//     <div className='cont'>
//         <form action="POST">
//         <textarea name="text" onChange={(e)=>{setMsg(e.target.value)}} placeholder='enter text' cols="30" rows="10"/>
//        <input type="submit" onClick={submit} value="Submit" />
//         </form>

//     </div>
//   )
// }

import React from 'react';
import { useLocation } from 'react-router-dom';
import tick from "../tick.gif"

function Home() {
  const location = useLocation();

  return (
      <div className="card text-center border-info" style={{width: "18rem",marginLeft:"35rem",marginTop:"3rem"}} >
      <div className="card-header">
      Be On Time
      </div>
      <div className="card-body">
        <p className="card-text">You have successfully booked your slot<br/> Please Check the details</p>
        <div className='Details'>
          <p>Name : {location.state.name}</p>
          <p>Date: {location.state.date}</p>
        </div>
      <img src={tick} alt="" width="100px" height="100px"></img>
      </div>
      <button type="button" class="btn btn-outline-info">Info</button>
    </div>
  );
}

export default Home;
