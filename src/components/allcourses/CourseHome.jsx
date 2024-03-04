import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import CoursesContent from "./CoursesContent"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' style={{color: 'black'}}/>
      <CoursesCard />
      <OnlineCourses />
      <CoursesContent/>
      <br></br>
  
      
    </>
  )
}

export default CourseHome
