import React from 'react'
import '../css/generalHero.css'

function GeneralHero({title, bg_img}) {
  return (
    <section className='g-hero' style={{ backgroundImage: `url(${bg_img})` }}>
      <div className='g-hero__overlay'></div>
      <div className="container">
          <h1>{title}</h1>     
      </div>     
    </section>
  )
}

export default GeneralHero
