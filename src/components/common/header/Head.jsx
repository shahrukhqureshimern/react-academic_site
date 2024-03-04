import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='img'>
          
          {/* <img src="./images/uK-writers_logo.png" alt="UK Writers Logo" style={{width: "32%"}}/> */}
            <a href="/"><h1 style={{color: '#1eb2a6'}}>ACADEMIA</h1>
            <span style={{color: '#1eb2a6'}}>ONLINE EDUCATION & LEARNING</span>
            </a>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'><a href="https://www.facebook.com/"></a></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
