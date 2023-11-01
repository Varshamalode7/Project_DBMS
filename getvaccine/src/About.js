import React from 'react'
import web from "../src/Images/child vaccine.jpg";

import Common from "./Common";

const About = () => {
  return (
    <>
       <Common 
       name="We bring together public-and private-sector partners to advance vaccines through every
             stage of development—from discovery through delivery. 
            We create ingenious technologies and strategies to help countries get them all the way to the people who need them." 
       imgsrc={web} 
       visit="/Contact" 
       btname="Contact Now"
        
       />
    </>
  )
}

export default About