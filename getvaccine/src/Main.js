import React from 'react'
import web from "../src/Images/img4.jpg";
import step1 from "../src/Images/step1.jpg";
import step2 from "../src/Images/step2.jpg";
import step3 from "../src/Images/step3new.jpg";
import { Link } from "react-router-dom";
import Common from "./Common"


const Main = () => {
  return (
    <>
      <Common
        name="Welcome To Website "
        imgsrc={web}
        visit="/About"
        btname="About"
      />

      <div className="my-5">

        <h1 className="text-center">Get Vaccinated in  3 Steps</h1>
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

      {/* //for slots */}
      <div className="my-5">
        <h1 className="text-center">SLOT BOOKING</h1>
      </div>
      <div className='ForSteps d-flex '>
        <div className="container-fluid mb-5 ">
          <div className="card ">
            <div className="card-body ">
              <br />
              <p className="card-text">Appointment for Age 18 to 44 is based on slots made avaliable
                by the private vaccination center as well as the respective state government.If slots are not currently
                avaliable,it will be opened soon.Please check again in Sometime .we regret
                our inconvience </p>
              <Link to="/signup">
              <div className='Slot text-center'>
                <button type="button" class="btn btn-info">Book Slot</button>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>

      {/* for footer */}
      <section10 className="section-p1">
        <div className="col">
          <h3><strong>Contact</strong></h3>
          <p><strong>Address: </strong>Pune Institute of Computer Technology,PUNE</p>
          <p><strong>Phone: </strong>+90 9324134532\+90 9876543211</p>
          <p><strong>Hours: </strong>10:00-06:00,Mon-Sat</p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
        <div className="col">
          <h3><strong>About</strong></h3>
          <a to="#">About us</a>
          <a to="#">Delivery Information</a>
          <a to="#">Privacy Policy</a>
          <a to="#">Terms & Conditions</a>
          <a to="#">Contact Us</a>
        </div>

        <div className="col">
          <h3><strong>Account</strong></h3>
          <a to="#">Sign In</a>
          <a to="#"></a>
          <a to="#">My Wishlist</a>
          <a to="#">Track My Order</a>
          <a to="#">Help</a>
        </div>
      </section10>

    </>
  )
}

export default Main