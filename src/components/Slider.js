import React from "react";
import "../css/slider.css";
import google from "../images/google1.png";
import avva from "../images/avvo2023.png";
import yelp from "../images/yelp1.png";
import SliderItem from "./SliderItem";

function Slider({ title, sliderItems, bg_img }) {
  return (
    <section className="slider" style={{ backgroundImage: `url(${bg_img})` }}>
      <div className="container">
        <div className="slider__body">
          <h2>{title}</h2>
          <p>Top rated on:</p>
          <div className="slider__logos">
            <img loading="lazy" src={google} alt="google" />
            <img loading="lazy" className="slider__avva" src={avva} alt="avva" />
            <img loading="lazy" src={yelp} alt="yelp" />
          </div>
        </div>

        
        <div className="slider__item">
          <SliderItem arr={sliderItems} />
        </div>
       
      </div>
    </section>
  );
}

export default Slider;
