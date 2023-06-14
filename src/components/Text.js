import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import "../css/text.css"
function Text({text}) {
  return (
    <section className='text'>
        <div className="container">                
        <ReactMarkdown >{text}</ReactMarkdown>
        </div>     
      </section>
  )
}

export default Text
