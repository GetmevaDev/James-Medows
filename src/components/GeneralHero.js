import React from "react";
import "../css/generalHero.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function GeneralHero({ title, bg_img }) {
  const currentPage = useSelector((store) => store.pagesData.currentPage);
  const sublink = useSelector((store) => store.pagesData.subLink);
  return (
    <>
      <section className="g-hero" style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="g-hero__overlay"></div>
        <div className="container">
          <h1>{title}</h1>
        </div>
      </section>

      <div className="container">
        <div className="breadcrumbs">
          <Link to="/" className="previous">
            Home <span className="arrow">»</span>
          </Link>
          <p className={sublink ? "previous" : "current"}>
            {!sublink ? currentPage : "Practice Areas"}
           {sublink && <span className="arrow">»</span>}
          </p>
          {sublink && <p className="current">{sublink}</p>}
        </div>
      </div>
    </>
  );
}

export default GeneralHero;
