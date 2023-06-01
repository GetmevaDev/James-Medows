import React from "react";
import "../css/ourProfiles.css";
function OurProfiles({ title, bg_img, companyArr, cardArr, description }) {
  return (
    <section className="ourProfiles">
      <div
        className="ourProfiles__body"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="container">
          <h2>{title}</h2>
          <div className="ourProfiles__company-wrapper">
            {companyArr.map((item) => {
              return (
                <div key={item.id} className="ourProfiles__company">
                  <img loading="lazy"
                    src={item.company_image.data.attributes.url}
                    alt={item.company_image.data.attributes.alternativeText}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <p>{description}</p>
        <div className="ourProfiles__card-wrapper">
          {cardArr.map((item) => {
            return (
              <div key={item.id} className="ourProfiles__card">
                <img
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

export default OurProfiles;
