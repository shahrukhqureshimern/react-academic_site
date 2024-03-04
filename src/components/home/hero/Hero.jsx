import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import zIndex from "@mui/material/styles/zIndex";
import "./contact.css"



const Hero = () => {
  let history = useHistory();

  return (
    <>
     <section className='hero' style={{ backgroundImage: `url("./images/pexels-george-milton-7034067.jpg")` }}>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='PROFESSIONAL' title='ONLINE EDUCATION & LEARNING SERVICES' />
            <p style={{color: "black"}}>Looking for the best academic help services? Explore our services and get the best services that helps you to shine academically.</p>
            
              </div>
            </div>
            
          </section>
          <div className='button' style={{zIndex: "1",marginTop: "310px", marginLeft: "90px", marginBottom: "90px"}}>
          <a href="/contact" style={{color: "#ffff"}}>
            <button className="primary-btn">
            
              ORDER NOW 
              
              </button>
              
              </a>
              </div>
 
     {/* <div className="container">
     <div className='right row' style={{float: "right", marginTop: "-519px"}}>
     <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
          </div>
     </div> */}
      
    </>
  )
}

export default Hero
