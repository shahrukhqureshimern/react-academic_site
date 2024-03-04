import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import CertificateComponent from "../../certificate/CertificateComponent"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              {/* <Link to='/home'>Home</Link> */}
              <a href="/">Home</a>
            </li>
            <li>
              {/* <Link to='/courses'>All Courses</Link> */}
              <a href="/courses">All Courses</a>
            </li>
            <li>
              {/* <Link to='/about'>About</Link> */}
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/team">Team</a>
            {/* <Link to='/team'>Team</Link> */}
            </li>
            <li>
              <a href="/pricing">Pricing</a>
              {/* <Link to='/pricing'>Pricing</Link> */}
            </li>
            {/* <li>
              <a href="/services">Services</a>
              <Link to='//journal'>Journal</Link>
            </li> */}
            <li>
              <a href="/contact">Contact</a>
              {/* <Link to='/contact'>Contact</Link> */}
            </li>
          </ul>
          {/* <div className='start'>
            <div className='button' onClick={handleDownloadCertificate}>GET CERTIFICATE</div>
          </div> */}
           <CertificateComponent />
          <button className='toggle' onClick={()=> setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
