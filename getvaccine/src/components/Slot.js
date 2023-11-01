import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Slot = () => {

    const [books,setBook]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/getSlot")
        .then(books=>setBook(books.data))
        .catch(err=>console.log(err))
    },[])


  return (
    <div>
        <table class="table">
       <thead >
         <tr>
           <th scope="col"> <i class="fa-solid fa-user"></i> Name </th>
           <th scope="col"> <i class="fa-solid fa-file"></i>  Slot </th>
           <th scope="col"> <i class="fa-solid fa-calendar-days"></i> Date </th>
         </tr>
       </thead>
     </table>
      {books.map(book => {
       return <table class="table">
       <tbody>
         <tr>
           <th scope="row"></th>
           <td>{book.name}</td>
           <td>{book.slot}</td>
           <td>{new Date(book.date).toLocaleDateString()}</td>
         </tr>
       </tbody>
     </table>
       
      
      })}
    </div>
  )
}

export default Slot