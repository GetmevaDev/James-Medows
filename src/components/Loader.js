import React from "react";
import "../css/loader.css";
function Loader() {
  return (
    <div className="loader">
      <div className="loader__top"></div>
      <div className="loader__center"></div>
      <div className="loader__bottom"></div>

      <div className="loader__item item1"></div>
      <div className="loader__item item2"></div>
      <div className="loader__item item3"></div>
    </div>
  );
}

export default Loader;
