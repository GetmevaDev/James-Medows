import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import  {  Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../css/sliderItem.css";
import stars from "../images/Review.png"

function SliderItem({ arr }) {
  return (
    <div>
    <Swiper modules={[Navigation]} navigation slidesPerView={3} spaceBetween={30} className="mySwiper">
      {arr.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="slider-item">
              <img loading="lazy" src={stars} alt="stars" />
              <p>{item.description}</p>
              <h4>{item.user}</h4>
            </div>
          </SwiperSlide>
        );
      })}

      {/* <SliderNav /> */}
    </Swiper>
    </div>
  );
}

export default SliderItem;
