import React from "react";

import "../css/hero.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
function Hero({ title, subtitle, btn, btn_link, bg_img, call_us }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg_img})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="hero__body">
          <div className="hero__content">
            <ReactMarkdown>{title}</ReactMarkdown>

            {subtitle && <h5>{subtitle}</h5>}

            {btn && (
              <a className="hero__btn" href={btn_link}>
                {btn}
              </a>
            )}
          </div>

          {call_us && (
            <form className="hero__contact">
              <ReactMarkdown>{call_us}</ReactMarkdown>

              <label htmlFor = "phone">
                Enter your phone number                
              </label>
              <input type="text" id="phone"/>
              <button type="submit">Submit Phone Number</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
