import React from 'react';
import step1 from "../src/Images/step1.jpg";
import step2 from "../src/Images/step2.jpg";
import step3 from "../src/Images/step3new.jpg";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
      </div>

      <div className='ForSteps d-flex'>
        <div className="container-fluid mb-5">
          <div className="col-md-9 col-10 mx-auto">
            <div className="card text-center">
              <h3>Step1</h3>
              <p><br /></p>
              <img src={step1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Book an Appointment on Website or walk into any Vaccination Center.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="col-md-9 col-10 mx-auto">
            <div className="card text-center">
              <h3>Step2</h3>
              <br></br>
              <img src={step2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Get Your Vaccination Safely at the time of Your Appointment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="col-md-9 col-10 mx-auto">
            <div className="card text-center">
              <h3>Step3</h3>
              <br></br>
              <img src={step3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> <br />Download your Vaccination Certificate from website and wait for Dose #2.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of steps */}

      <div className='ForSteps d-flex'>
        <div className="container-fluid mb-5">
          <div className="col-md-9 col-10 mx-auto">
            <div className="card text-center">
              <h3>Step1</h3>
              <p><br /></p>
              <img src={step1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Book an Appointment on Website or walk into any Vaccination Center.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="col-md-9 col-10 mx-auto">
            <div className="card text-center">
              <h3>Step2</h3>
              <br></br>
              <img src={step2} className="card-img-top" alt="..." />
              <div className="card-body">

                <p className="card-text">Get Your Vaccination Safely at the time of Your Appointment.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-5">
          <div className="col-md-9 col-10 mx-auto">
            <div className="card text-center">
              <h3>Step3</h3>
              <br></br>
              <img src={step3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text"> <br />Download your Vaccination Certificate from website and wait for Dose #2.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of steps */}
    </>
  )
}

export default Services