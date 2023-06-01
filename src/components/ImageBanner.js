import React from 'react'
import '../css/imageBanner.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
function ImageBanner({title, description, img, altText}) {
  return (
    <section className='imageBanner'>
      <div className="container">
        <div className='imageBanner__grid'> 
          <div className='imageBanner__img'>
            <img loading='lazy' src={img} alt={altText} />
          </div>
          <div className='imageBanner__content'>            
            {title && <ReactMarkdown>{title}</ReactMarkdown>}
            <p>{description}</p>
          </div>
        </div>   
      </div>     
    </section>
  )
}

export default ImageBanner
