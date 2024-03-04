import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import './parallax.css'

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='parallax-container' style={{alignItems: "center", marginBottom: '30px'}}>
        <div className="parallax-bg" style={{backgroundImage: `url("./images/how-we-work.png")` }}></div>
          <Heading subtitle='' title='HOW WE WORK AT ACADEMIA?'/>
          <p style={{color: "#fff", textAlign: "center"}}>Detailed steps to help you understand</p>
          <br/>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  {/* <img src={val.cover} /> */}
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
