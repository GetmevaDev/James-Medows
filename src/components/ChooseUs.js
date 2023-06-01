import React from "react";
import "../css/chooseUs.css";
function ChooseUs({ title, descprition, cardArr }) {
  return (
    <section className="choouseUs">
      <div className="container">
        {title && <h2 className="chooseUs__title">{title}</h2>}
        {descprition && <p className="chooseUs__desc">{descprition}</p>}
        <div className="chooseUs__card-wrapper">
          {cardArr.map((item) => {
            return (
              <div key={item.id} className="chooseUs__card">
                <img loading="lazy"
                  src={item.svg.data.attributes.url}
                  alt={item.svg.data.attributes.alternativeText}
                />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
