import React from 'react'
import web from "../src/Images/step1.jpg";
import {NavLink} from "react-router-dom";

const Card = () => {
    return (
        <>
           <div className="my-5">
        <h1 className="text-center"> Our Steps</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
                
<div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={web} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                    </div>
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
</>
    )
}

export default Card