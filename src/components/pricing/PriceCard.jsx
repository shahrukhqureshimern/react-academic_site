import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <h4>{val.name}</h4>
          <h1>
            <span>$</span>
            {val.price}
          </h1>
          <p>{val.desc}</p>
          
          <a href="/contact">
          <button className='outline-btn'>GET STARTED</button>
          </a>
        </div>
      ))}
    </>
  )
}

export default PriceCard
