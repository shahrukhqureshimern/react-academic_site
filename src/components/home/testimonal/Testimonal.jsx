import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal'>
   
        <div className='container'>
          
          <Heading subtitle='' title='OUR TEAM' />
          <p style={{textAlign: "center"}}>
          Our services play an essential role in every student's life. In contrast, if you are clueless about writing, having a skilled and experienced team by your side can make all the difference. Furthermore, our dedicated team provides top-notch writing services tailored to your academic conditions. Whether you need assistance with essays, assignments or any other academic assistance, our team is here to ensure your success.
          </p>
          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
