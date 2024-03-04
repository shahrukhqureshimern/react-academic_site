import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import OnlineCourses from "../allcourses/OnlineCourses"
import Testimonal from "../home/testimonal/Testimonal"
import CoursesContent from "../allcourses/CoursesContent"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <CoursesContent/>
      <OnlineCourses/>
       <Testimonal/>
       <br></br>
     
    </>
  )
}

export default About
