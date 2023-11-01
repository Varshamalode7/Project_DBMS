import React, {useState} from 'react'
const Contact = () => {
  const [data,setData]=useState({
    fullName:"",
    phone:"",
    email:"",
    msg:"",
  });

  const InputEvent = (Event) =>{
    const {name,value} = Event.target
    
    setData((preVal) => {
      return {
        ... preVal,
        [name] : value,
      }
    })
  };
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.fullName}. My mobile number is ${data.phone} and email is ${data.email} , Here is what I want to say ${data.msg}`
    )
  };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact us</h1>
      </div>

      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter Your Name"/>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile Number"/>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" 
               name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
              </div>

              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
              </div>
              
              <div className='col-12'>
              <button className='btn btn-outline-primary' type='submit'>Submit form</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact